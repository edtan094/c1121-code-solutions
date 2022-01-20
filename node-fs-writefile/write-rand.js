const fs = require('fs');
let data = Math.random();
data = data.toString();

fs.writeFile('random.txt', data, 'utf-8', err => {
  if (err) throw err;
  console.log('The file has been saved!');
});
