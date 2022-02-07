const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join('/mnt/c/Users/etan0/repos/c1121-code-solutions/express-static', 'public');
console.log(publicPath);

const staticPublic = express.static('public');
app.use(staticPublic);

app.listen(
  3000,
  () => console.log('listening on port 3000!')
);
