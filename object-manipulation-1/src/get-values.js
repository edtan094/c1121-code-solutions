/* exported getValues */
//  function: getValues
//  argument: object
//  return: array of object's property values

// create a storage for a list of property keys that we will be putting in from the object
// create a storage for list of property values
// for each property key within the object, push (push method) it in the storage we just created
// for each value in this storage, that it and put it against the object to give the property value and push (push method) it into another storage
// produce the storage with the property value

// function getValues(object) {
//   var keyArray = [];
//   var valueArray = [];
//   for (var prop in object) {
//     keyArray.push(prop);
//   }
//   for (var i = 0; i <= keyArray.length - 1; i++) {
//     valueArray.push(object.keyArray[i]);
//   }
//   return valueArray;
// }

function getValues(object) {
  var valueArray = [];
  for (var prop in object) {
    valueArray.push(object[prop]);
  }
  return valueArray;
}
