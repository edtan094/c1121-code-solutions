/* exported intersection */
// function: intersection
// argument: any array
//  any array
// return: A new Array containing unique values found in both first and second.
// The order of result values is determined by the order they occur.
// create a variable with an empty array
// loop through the first array to check if any values in the first array match the second array also by looping through the second array
// if the values match, push this matching value into the empty array we just create
// return this array

function intersection(first, second) {
  var newArray = [];
  for (var firstIndex = 0; firstIndex < first.length; firstIndex++) {
    for (var secondIndex = 0; secondIndex < second.length; secondIndex++) {
      if (first[firstIndex] === second[secondIndex]) {
        newArray.push(first[firstIndex]);
      }
    }
  }
  return newArray;
}
