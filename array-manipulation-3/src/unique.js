/* exported unique */
// function: unique
// argument: array
// return: A new Array containing only the unique elements of array, in the order they first appear in array.
// create a variable with an empty array
// loop throuugh the argument array
// push each element of the array into the new array
// if the element previously matches another element already added into the array, skip this one
// return the new array

function unique(array) {
  var newArray = [];
  var status = true;
  for (var index = 0; index < array.length; index++) {
    for (var newArrayIndex = 0; newArrayIndex < newArray.length; newArrayIndex++) {
      if (array[index] === newArray[newArrayIndex]) {
        status = false;
      }
    }
    if (status === true) {
      newArray.push(array[index]);
    }
    status = true;
  }
  return newArray;
}
