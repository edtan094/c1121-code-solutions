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

app.listen(3000, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on 3000!');
});
