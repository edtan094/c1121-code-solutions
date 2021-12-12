/* exported toObject */
// function: toObject
//  argument: an array containing two elements; a string and any other javascript value
//  return: an object with one property consisting of the passed argument

// create storage for a list of two elements to be pushed from the argument
// create a storage for an object
// for each item in the argument, push (push method)it into the storage list
// take the second item and assign it to the storage object with the first item
// produce the storage object

function toObject(keyValuePair) {
  var array = [];
  var object = {};
  for (var i = 0; i <= keyValuePair.length - 1; i++) {
    array.push(keyValuePair[i]);
  } var key = array[0];
  object[key] = array[1];
  return object;

}
