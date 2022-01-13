/* exported difference */
// function: difference
//  argument: first - Any JavaScript Array
// second - Any JavaScript Array
// return: A new Array containing the symmetric difference between first and second. That is, elements are included if they are found in one Array,
// but not the other. The result values are unqiue and their order is determined by the order they occur.
// create a variable of an empty array
// loop through the first array.
// loop through the second array to see if first element of the first array matches anything within the second array
// if there there is no match, push this element into the array we created
// once the loop is done for the first array, loop through the second array and loop into the first array to check if any items in the second array match the first array
// if they dont, push it into the array we created
// return this array

function difference(first, second) {
  var status = true;
  var newArray = [];
  for (var firstIndex = 0; firstIndex < first.length; firstIndex++) {
    for (var secondIndex = 0; secondIndex < second.length; secondIndex++) {
      if (first[firstIndex] === second[secondIndex]) {
        status = false;
      }
    }
    if (status === true) {
      newArray.push(first[firstIndex]);
    }
    status = true;
  }
  for (secondIndex = 0; secondIndex < second.length; secondIndex++) {
    for (firstIndex = 0; firstIndex < first.length; firstIndex++) {
      if (second[secondIndex] === first[firstIndex]) {
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
