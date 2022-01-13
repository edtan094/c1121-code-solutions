/* exported union */
// function: union
// argument: any array
// any array
// return: A new Array containing unique values from both first and second in the order they appear.
// create a variable with an empty array
// loop through the first array and push all those values into the new array just created
// loop through the second array and another push those values into the newly create array is they do not already match with any previous value in the new array
// return this new array once it is done

function union(first, second) {
  var newArray = [];
  for (var firstIndex = 0; firstIndex < first.length; firstIndex++) {
    newArray.push(first[firstIndex]);
  }
  var status = true;
  for (var secondIndex = 0; secondIndex < second.length; secondIndex++) {
    for (var newArrayIndex = 0; newArrayIndex < newArray.length; newArrayIndex++) {
      if (second[secondIndex] === newArray[newArrayIndex]) {
        status = false;
      }
    }
    if (status === true) {
      newArray.push(second[secondIndex]);
    }
    status = true;
  }
  return newArray;
}
