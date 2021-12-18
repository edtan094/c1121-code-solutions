/* exported includes */
// function : includes
// argument: array
//           value - the value to search for in array
// return : boolean indicating the presecense of value at any index of array

// for each item in the array, if any of the items matches the value in the array, return true, otherwise it is false
// if the array is empty, return false

function includes(array, value) {
  if (array === []) {
    return false;
  }
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
