/* exported getKeys */
// function: getKeys
// argument: any object
//  return : an array of the objects property keys

//  create a a storage for the list of items you will be receiving from the object property values (keys)
//  for each property value(keys) in the object, push them into the storage (push method)
//  produce this storage

function getKeys(object) {
  var newArray = [];
  for (var prop in object) {
    newArray.push(prop);
  }
  return newArray;
}
