const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (err, data) => {
  if (err) throw err;
  const textData = data;
  fs.writeFile(process.argv[3], textData, 'utf-8', err => {
    if (err) throw err;
    console.log('Mission Success');
  });
});
