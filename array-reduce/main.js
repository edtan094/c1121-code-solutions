const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const adding = (previousValue, currentValue) => previousValue + currentValue;
const sum = numbers.reduce(adding);
console.log('sum: ', sum);

const multiplier = (previousValue, currentValue) => previousValue * currentValue;
const product = numbers.reduce(multiplier);
console.log('product: ', product);

const accountSum = (previousValue, currentValue) => {
  let sum = 0;
  if (previousValue.type === 'withdrawal') {
    previousValue.amount = previousValue.amount * -1;
  }
  if (currentValue.type === 'withdrawal') {
    currentValue.amount = currentValue.amount * -1;
  }
  sum = previousValue + currentValue.amount;
  return sum;
};
const balance = account.reduce(accountSum, 0);
console.log('balance: ', balance);

const addingObjects = (previousValue, currentValue) => Object.assign(previousValue, currentValue);
const composite = traits.reduce(addingObjects);
console.log('composite: ', composite);
