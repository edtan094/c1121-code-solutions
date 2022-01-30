const express = require('express');
const app = express();
const expressJSON = express.json();
app.use(expressJSON);
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
  from "grades"`;

  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })

    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const body = req.body;
  body.score = parseFloat(body.score);
  if (body.name === undefined || body.course === undefined || body.score === undefined ||
    Math.floor(body.score) !== body.score) {
    res.status(400).json({
      error: 'Missing name, course, score, or score is not an integer from 0 - 100'
    });
    return;
  }

  const text = 'insert into grades(name, course, score) values($1, $2, $3) returning *';
  const values = [body.name, body.course, body.score];
  db.query(text, values)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const id = parseFloat(req.params.gradeId);
  const body = req.body;
  body.score = parseFloat(body.score);
  if (body.name === undefined || body.course === undefined || body.score === undefined ||
    Math.floor(body.score) !== body.score || Math.floor(id) !== id || id < 0) {
    res.status(400).json({
      error: 'Missing name, course, score, score is not an integer from 0 - 100, or id is not an integer greater than 0'
    });
    return;
  }
  const text = 'update grades set name = $1, course = $2, score = $3 where "gradeId" = $4 returning *';
  const values = [body.name, body.course, body.score, id];
  db.query(text, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${id}`
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const id = parseFloat(req.params.gradeId);
  if (Math.floor(id) !== id || id < 0) {
    res.status(400).json({
      error: 'id is not an integer greater than 0'
    });
    return;
  }
  const text = 'delete from grades where "gradeId" = $1 returning *';
  const values = [id];
  db.query(text, values)
    .then(result => {
      const grade = result.rows[0];
      if (grade === undefined) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${id}`
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured'
      });
    });
});

app.listen(3000, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on 3000!');
});
