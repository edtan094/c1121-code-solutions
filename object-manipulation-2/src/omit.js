/* exported omit */
// function: omit
// argument: source - any javascript object
//            keys - an array of javascript strings
// return: A new Object containing all of the properties of source that are not listed in keys.
// If a key is listed in keys, then it should not be included in the new Object.

// create a variable for an object that will contain the properties and property value of whatever is currently not listed in the key
// for each property key and property value within the source, push it into the array
// for each property key within keys that matches a value within array, remove the property key and value from array
// once that it is done, push the remaining values in array into object
// produce the object

function omit(source, keys) {
  var object = {};
  for (var propInSource in source) {
    if (keys.includes(propInSource) === false) {
      object[propInSource] = source[propInSource];
    }
  }
  return object;
}
