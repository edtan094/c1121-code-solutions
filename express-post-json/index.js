const express = require('express');
const app = express();

let nextId = 1;
const grades = {};
let array = [];
function gradesInArray() {
  for (const prop in grades) {
    array.push(grades[prop]);
  }
  return array;
}

app.use(express.json());
app.get('/api/grades', function (req, res) {
  array = [];
  res.json(gradesInArray());

});

app.post('/api/grades', function (req, res) {
  req.body.id = nextId;
  grades[nextId] = req.body;
  nextId++;
  res.status(201);
  res.json(req.body);
});

app.listen(3000, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on 3000!');
});
