var array = [
  {
    isbn: 9788857005140,
    title: 'The Complete Calvin & Hobbes',
    author: 'Bill Watterson'
  },
  {
    isbn: 9780345428837,
    title: 'Star Wars Episode III: Revenge of the Sith',
    author: 'Matthew Stover'
  },
  {
    isbn: 9781524763169,
    title: 'A Promised Land',
    author: 'Barrack Obama'
  }
];
console.log(array);
console.log('This type of this is:', typeof array);

console.log('JSON stringify of array:', JSON.stringify(array));
console.log('The type of this is:', typeof JSON.stringify(array));

var string = '{"id": 12345,"name": "Bob"}';
console.log(string);
console.log('The type of this is:', typeof string);

console.log(JSON.parse(string));
console.log('The type is:', typeof JSON.parse(string));
