const fs = require('fs');

if (process.argv[2] === 'read') {
  fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
