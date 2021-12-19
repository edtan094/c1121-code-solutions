/* exported invert */
// function: invert
// argument: source - any javascript object
// return: A new Object containing all properties of source, but with the keys and values inverted.

// create a new empty storage for an object
// take the source object and take out the keys and property values
// put the keys and property values into the new empty storage object with it reversed
// produce the object

function invert(source) {
  var array = [];
  var object = {};
  for (var prop in source) {
    array.push(prop);
    array.push(source[prop]);
  }
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      object[array[i + 1]] = array[i];
    }
  }
  return object;
}
