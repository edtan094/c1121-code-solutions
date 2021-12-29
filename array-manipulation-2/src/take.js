/* exported take */
// function: take
// argument: array
//           any positive integer number of elements to "take" from the beginning of array
// return: new array containing the first count elements of array

// create a new storage that will be a list of items from the array
// for each item in the array up to the number provided in the argument, push it into the new storage
// return storage

function take(array, count) {
  var finalArray = [];
  if (count > array.length) {
    return finalArray;
  }
  for (var i = 0; i < count; i++) {
    finalArray.push(array[i]);
  }
  return finalArray;
}
