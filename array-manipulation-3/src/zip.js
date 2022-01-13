/* exported zip */
// function: zip
// argument: first - Any JavaScript Array
//  second - Any JavaScript Array
// return value: An Array of Arrays. Each sub-Array is a pair containing an element from first, and an element from second,
//  each from the same index of their respective source Array. The "zipped" result is only as long as the shorter of first and second.
// create an empty array
// loop through the first array and the second array, check each corresponding index and pairing them together into an array
// push this array into the array first created
// stop once the length has been hit of the shorter first or second array
// return the array that was first created

function zip(first, second) {
  var newArray = [];
  for (var index = 0; index < first.length && index < second.length; index++) {
    var newSubArray = [first[index], second[index]];
    newArray.push(newSubArray);
  }
  return newArray;
}
