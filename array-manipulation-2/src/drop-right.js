/* exported dropRight */
// function: dropRight
// argument: array
//           a positive integer number of elements to drop from the end of array
// return: A new Array containing the elements of array before the last count elements.

// create a storage that will receive the list of items from array
// for each item up to the number count, take the items from array and put it into the new storage
// if count is greater than the number of items in array, return and empty storage list
// produce the storage

function dropRight(array, count) {
  var finalArray = [];
  if (count > array.length) {
    return finalArray;
  }
  for (var i = 0; i < array.length - count; i++) {
    finalArray.push(array[i]);
  }
  return finalArray;
}
