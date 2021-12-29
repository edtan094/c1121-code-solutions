/* exported takeRight */
// function: takeRight
// argument: array
//           count- a positive integer number of elements to take from the end of array
// return: new array containing the last count elements of array

// create a new storage that will be receiving a list of items from the array
//  count the number of items in the array and add one to the total number
// if count is greater than the length of the array, produce the storage empty
//  take this number and subtract it by count
// for each item left in the array starting at this number, push it into the new storage
// produce storage
function takeRight(array, count) {
  var newArray = [];
  if (count > array.length) {
    return newArray;
  }
  for (var i = (array.length - count); i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
