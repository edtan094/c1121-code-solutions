const express = require('express');
const app = express();

app.use(function (req, res) {
  res.send('Hello there!');
});

app.listen(3000, function () {
});
