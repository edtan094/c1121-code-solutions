/* exported tail */
// function: tail
// argument: array
// return: an array containing all the elements except for the first one in the original array

// create storage for a list of elements you will be putting in here
// look at the list (array)
// skip the first element and add all the other elements of the list into the storage in corresponding order
// produce this storage

function tail(array) {
  var newArray = [];
  for (var i = 1; i <= array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
