/* exported flatten */
// function flatten
//  argument: array
// return: A new Array with any direct child Arrays unwrapped. This function should only "flatten" array by one level.
// create a new empty array
// loop through the indexes of the array argument
// if the value is an array, loop through that array and obtain all the values within that array and push them into a new array
// if the value is not an array, push the value into the new array
// return the new array
function flatten(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === 'object') {
      for (var arrayIndex = 0; arrayIndex < array[i].length; arrayIndex++) {
        if (array[i][arrayIndex] === undefined) {
          for (var prop in array[i]) {
            newArray.push(array[i][prop]);
            i++;
          }
        } else {
          newArray.push(array[i][arrayIndex]);
        }
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
