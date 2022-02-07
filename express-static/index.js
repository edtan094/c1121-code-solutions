const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join('__dirname', 'public');
console.log(publicPath);

const staticPublic = express.static('public');
app.use(staticPublic);

app.listen(
  3000,
  () => console.log('listening on port 3000!')
);
