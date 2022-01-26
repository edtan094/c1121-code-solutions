const express = require('express');
const app = express();
const json = require('./data.json');

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
    res.status(404).json({ error: 'id does not match any notes in the system' });
  } else if (json.notes[id] !== undefined) {
    res.status(200).json(json.notes[id]);
  }
});

app.listen(3000, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on 3000!');
});
