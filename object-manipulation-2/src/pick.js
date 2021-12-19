/* exported pick */
// function: pick
// argument: source - any javascript object
//            keys - an array of javascript strings
// return: A new Object containing all of the properties of source listed in keys.
// If a key is listed in keys, but is not defined in source, then that property is not added to the new Object.

// create a new object that will contain the properties and their values that match the array strings (which are property names)
// take the object given and pair it with the first item on the array.
// if this gives a valid value, pair the array item with the value given into the new object

function pick(source, keys) {
  var object = {};
  for (var i = 0; i < keys.length; i++) {
    var keyIndex = keys[i];
    if (source[keyIndex] !== undefined) {
      object[keyIndex] = source[keyIndex];
    }
  }
  return object;
}
