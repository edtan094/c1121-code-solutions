const fs = require('fs');
const json = require('./data.json');
const appFunctions = process.argv[2];
const nodeArgument = process.argv[3];
if (appFunctions === 'read') {
  for (const prop in json.notes) {
    console.log(`${prop}: ${json.notes[prop]}`);
  }
} else if (appFunctions === 'create') {
  json.notes[json.nextId] = nodeArgument;
  json.nextId++;
  const data = JSON.stringify(json, null, 2);
  fs.writeFile('data.json', data, 'utf-8', err => {
    if (err) throw err;
    console.log('Update Complete!');
  });
} else if (appFunctions === 'delete') {
  for (let prop in json.notes) {
    if (prop === nodeArgument) {
      prop = parseInt(prop);
      delete json.notes[prop];
      const data = JSON.stringify(json, null, 2);
      fs.writeFile('data.json', data, 'utf-8', err => {
        if (err) throw err;
        console.log('Deleted!');
      });
    }
  }
}
