/* exported drop */
// function: drop
// argument: array
//           count- A positive integer Number of elements to "drop" from the beginning of array
// return: A new Array containing the elements of array after the first count elements.

// create a new storage for to receive a list of items from the array
// if count is greater than the length of the array, the answer is an empty array
// for each item in the array up to the count provided in the argument, shift it out of the array
// the answer is now the current array

function drop(array, count) {
  var finalArray = [];
  if (count > array.length) {
    return finalArray;
  }
  for (var i = count; i < array.length; i++) {
    finalArray.push(array[i]);
  }
  return finalArray;
}
