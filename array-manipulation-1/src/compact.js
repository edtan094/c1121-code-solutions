/* exported compact */
// function: compact
// argument: array
// return: an array containing on elements that are not falsy but still left in order

// create a storage for a list of elements
// for each item on the list that is not a falsy, put it into the storage list
// produce storage list

function compact(array) {
  var newArray = [];
  for (var i = 0; i <= array.length - 1; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
