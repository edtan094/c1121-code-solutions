/* exported initial */
// function: intial
// argument: array
// return: a new array containg all elements of the original array except the last one

// create storage for the list of elements you will be taking from the original list
// for each list element, put it into the storage space except for the very last element
// produce storage

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
