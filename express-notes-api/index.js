// attempting to fix issues where req.body does not equal undefined but it actually equals an empty object when the body is empty????
const express = require('express');
const app = express();
const json = require('./data.json');
const expressJSON = express.json();
app.use(expressJSON);

app.get('/api/notes', function (req, res) {
  const array = [];
  for (const prop in json.notes) {
    array.push(json.notes[prop]);
  }
  res.json(array);
});

app.get('/api/notes/:id', function (req, res) {
  const id = parseFloat(req.params.id);
  if (Math.floor(id) !== id || id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (json.notes[id] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else if (json.notes[id] !== undefined) {
    res.status(200).json(json.notes[id]);
  } else {
    console.error(new Error());
    res.sendStatus(500);
  }
});

app.post('/api/notes', function (req, res) {
  if (req.body === {}) {
    res.status(400).json({ error: 'content is a required field' });
  } if (req.body !== undefined) {
    req.body.id = json.nextId;
    json.notes[json.nextId] = req.body;
    json.nextId++;
    res.status(201).json(req.body);
  } else {
    console.error(new Error());
    res.sendStatus(500);
  }

});

app.delete('/api/notes/:id', function (req, res) {
  const id = parseFloat(req.params.id);
  if (Math.floor(id) !== id || id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (json.notes[id] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else if (json.notes[id] !== undefined) {
    delete json.notes[id];
    res.status(204).json();
  } else {
    console.error(new Error());
    res.sendStatus(500);
  }
});

app.put('/api/notes/:id', function (req, res) {
  const id = parseFloat(req.params.id);
  if (Math.floor(id) !== id || id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (req.body === {}) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (json.notes[id] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else if (json.notes[id] !== undefined) {
    json.notes[id] = req.body;
    json.notes[id].id = id;
    res.status(200).json(req.body);
  } else {
    console.error(new Error());
    res.sendStatus(500);
  }
});

app.listen(3000, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on 3000!');
});
