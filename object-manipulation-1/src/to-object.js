/* exported toObject */
// function: toObject
//  argument: an array containing two elements; a string and any other javascript value
//  return: an object with one property consisting of the passed argument

// create a storage for an object
// create another storage for the first value of the argument
// the second item of the argument will be equal to the storage for an object of the first value
// produce the storage object

function toObject(keyValuePair) {

  var object = {};
  var propertyName = keyValuePair[0];
  object[propertyName] = keyValuePair[1];
  return object;
}
