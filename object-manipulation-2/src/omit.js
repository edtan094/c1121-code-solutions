/* exported omit */
// function: omit
// argument: source - any javascript object
//            keys - an array of javascript strings
// return: A new Object containing all of the properties of source that are not listed in keys.
// If a key is listed in keys, then it should not be included in the new Object.

// create a variable for an object that will contain the properties and property value of whatever is currently not listed in the key
// for each key that matches the property key in the source object, do not pass this property key and value to the new object
//
function omit(source, keys) {
  var object = {};
  var array = [];
  for (var prop in source) {
    array.push(prop);
    array.push(source[prop]);
  }
  for (var i = 0; i < array.length; i++) {
    if (array[i + 1] !== source[array[i]] && i % 2 === 0) {
      object[array[i]] = array[i + 1];
    }
  }
  return object;
}
// function pick(source, keys) {
//   var object = {};
//   for (var i = 0; i < keys.length; i++) {
//     var keyIndex = keys[i];
//     if (source[keyIndex] !== undefined) {
//       object[keyIndex] = source[keyIndex];
//     }
//   }
//   return object;
// }
