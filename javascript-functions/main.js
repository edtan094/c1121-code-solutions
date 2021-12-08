function convertMinutesToSeconds(minutes) {
  var timesSixty = minutes * 60;
  return timesSixty;
}
var resultOfConvertMinutestoSeconds = convertMinutesToSeconds(5);
console.log('resultofConvertMinutestoSeconds:', resultOfConvertMinutestoSeconds);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}
var resultofGreet = greet('Edwin');
console.log('resultofGreet:', resultofGreet);

function getArea(width, height) {
  var widthTimesHeight = width * height;
  return widthTimesHeight;
}

var resultOfGetArea = getArea(17, 42);
console.log('resultOfGetArea:', resultOfGetArea);

function getFirstName(person) {
  var personFirstName = person.firstName;
  return personFirstName;
}
var getFirstNameResult = getFirstName({ firstName: 'Edwin', lastName: 'Tan' });
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}
var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResult:', getLastElementResult);
