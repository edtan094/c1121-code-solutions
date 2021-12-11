/* exported reverse */
// function: reservse
// argument: array
// return: new array containing all elements in reverse order

// create a storage for a list of elements
// look at the list
// if the list is not empty, proceed to move each item starting from the end of the list and move it to the storage
// produce the storage

function reverse(array) {
  var newArray = [];
  for (var i = 0; i <= array.length - 1; i++) {
    newArray.unshift(array[i]);
  }
  return newArray;
}
