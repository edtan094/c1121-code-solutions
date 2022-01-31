const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

function evenNumbersFilter(number) {
  return number % 2 === 0;
}
const evenNumbers = numbers.filter(evenNumbersFilter);
console.log('even numbers are: ', evenNumbers);

function overFiveFilter(number) {
  return number > 5;
}
const overFiveNumbers = numbers.filter(overFiveFilter);
console.log('numbers over 5: ', overFiveNumbers);

function startWithEFilter(word) {
  return word[0] === 'E';
}

const wordsThatStartWithE = names.filter(startWithEFilter);
console.log('words that start with E: ', wordsThatStartWithE);

function haveD(word) {
  return word.includes('d') || word.includes('D');
}
const wordsThatHaveD = names.filter(haveD);
console.log('words that have the letter d or D: ', wordsThatHaveD);
