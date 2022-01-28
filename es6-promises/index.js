const takeAChance = require('./take-a-chance');
const itsAGamble = takeAChance('Edwin');
itsAGamble.then(message => {
  console.log(message);
});

itsAGamble.catch(error => {
  console.error(error.message);
});
