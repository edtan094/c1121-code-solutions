/* exported equal */
// function: equal
// argument: any array
//            any array
// return value: A Boolean indicating whether or not first and second are equal to each other, index-for-index.
// go through the indexes of the first array and get the value of each one and compared it to the samme index in the second array
// if the values match each other, keep going until one does not match and the return will be false
// if all of them match, return true
function equal(first, second) {
  var length = 0;
  if (first.length >= second.length) {
    length = first.length;
  } else {
    length = second.length;
  }
  for (var index = 0; index < length; index++) {
    if (first[index] !== second[index]) {
      return false;
    }
  }
  return true;
}
