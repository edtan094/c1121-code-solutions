const fs = require('fs');
const data = process.argv[2];

fs.writeFile('note.txt', data, 'utf-8', err => {
  if (err) throw err;
  console.log('You have made a note!');
});
