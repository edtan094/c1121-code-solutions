/* exported chunk */
// function : chunk
// argument: array
//           size - a positive integer number indicating the desired chunk size
//  return: A new Array of Arrays. Each sub-Array has a length equal to size. Remaining elements are gathered into a final sub-Array.

// if the size is greater than the length of the array, return an empty array
// Starting from the beginning of the array, push these items into a new array with the size of the new array based on the size provided in the argument
// once the size of the array has been hit, create a new array if there are more items left
// return all the arrays
// function chunk(array, size) {
//   var newArray = [];
//   if (size > array.length) {
//     return newArray;
//   }
//   for (var i = 0; i < array.length; i += size) {
//     newArray = array.slice(i, size);
//   }
//   return newArray;
// }