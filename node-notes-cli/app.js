const fs = require('fs');
const json = require('./data.json');
const appFunctions = process.argv[2];
// const nodeArgument = process.argv[3];
// const readFunction = fs.readFile('data.json', 'utf-8', (err, data) => {
//   if (err) throw err;
//   return data;
// });
if (appFunctions === 'read') {
  fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err) throw err;
    for (const prop in json.notes) {
      console.log(`${prop}: ${json.notes[prop]}`);
    }
  });
}
// else if (appFunctions === 'create') {
//   const existingText = readFunction();
//   fs.writeFile('data.json', nodeArgument, 'utf-8', err => {
//     if (err) throw err;
//     console.log('Update Complete!');
//   });
// }
