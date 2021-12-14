/* exported getValue */
// function: getValue
// argument: object - any object
//           key - any string
// return: a value in object found at the key property

// create a storage for the value of the property (key)
// examine if the property (key) is within this object
// use the property (key) on the object to bring out the value of this

function getValue(object, key) {
  var value = object[key];
  return value;
}
