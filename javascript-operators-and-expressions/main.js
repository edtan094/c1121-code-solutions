var width = 5;
var height = 6;
var area = width * height;
console.log('Area:', area);
console.log('Type of Area:', typeof area);

var bill = 10;
var payment = 20;
var change = payment - bill;
console.log(change);
console.log('Type of Change', typeof change);

var quizzes = 20;
var midterm = 30;
var final = 40;
var grade = (quizzes + midterm + final) / 3;
console.log('grade:', grade);
console.log('Type of grade:', typeof grade);

var firstName = 'Edwin';
var lastName = 'Tan';
var fullName = firstName + lastName;
console.log('fullName:', fullName);
console.log('type of fullName:', fullName);

var pH = 420;
var isAcidic = pH < 7;
console.log('isAcidic', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

var headCount = 10;
var isSparta = headCount === 300;
console.log('isSparta', isSparta);
console.log('typeof isSparta', typeof isSparta);

var motto = fullName;
motto = fullName + ' is the GOAT';
console.log('motto', motto);
console.log('typeof motto', typeof motto);
