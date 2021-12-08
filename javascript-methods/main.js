var num1 = 2;
var num2 = 4;
var num3 = 6;
var maximumValue = Math.max(num1, num2, num3);
console.log('The maximum value is:', maximumValue);

var heroes = ['Thor', 'Wanda', 'Magneto', 'Batman'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('Random Index:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('Random Hero:', randomHero);

var library = [
  {
    title: 'Calvin and Hobbes',
    author: 'Bill Watterson'
  },
  {
    title: 'Garfield',
    author: 'Jim Davis'
  },
  {
    title: 'One Piece',
    author: 'Eiichiro Oda'
  }
];
var lastBook = library.pop();
console.log('The last book: ', lastBook);
var firstBook = library.shift();
console.log('The first book is: ', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Library: ', library);

var fullName = 'Edwin Tan';
var firstAndLastname = fullName.split(' ');
console.log('First and Last Name: ', firstAndLastname);
var firstName = firstAndLastname[0];
var sayMyName = firstName.toUpperCase();
console.log('Say my name: ', sayMyName);
