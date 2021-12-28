/* exported chunk */
// function : chunk
// argument: array
//           size - a positive integer number indicating the desired chunk size
//  return: A new Array of Arrays. Each sub-Array has a length equal to size. Remaining elements are gathered into a final sub-Array.

// create a storage for all subarray
// if the size is greater than the length of the array, return an empty array
// Starting from the beginning of the array, push each items into a new array up to a length of the size given
// once the size of the array has been hit, add it to a storage for sublists
// create a new array if there are more items left and repeat step 2 starting with the item we have left off previously
// return all the arrays
function chunk(array, size) {
  if (size > array.length) {
    return array;
  }
  var allArrays = [];
  var subArray = [];
  for (var arrayIndex = 0; arrayIndex < array.length; arrayIndex) {
    for (var sizeIndex = 1; sizeIndex <= size; sizeIndex++) {
      subArray.push(array[arrayIndex]);
      arrayIndex++;
    }
    allArrays.push(subArray);
  }
  return allArrays;
}
