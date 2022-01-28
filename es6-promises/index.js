const takeAChance = require('./take-a-chance');
const itsAGamble = takeAChance('Edwin');
itsAGamble.then(() => {
  console.log('you win!');
}, () => {
  console.error('you lose!');
});
