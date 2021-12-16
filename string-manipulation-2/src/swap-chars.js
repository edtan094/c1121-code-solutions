/* exported swapChars */
// function: swapChars
// argument: firstIndex: an integral number
//          secondIndex: an integral number
//           string
// return: string with the characters at firstIndex and secondIndex swapped.

// create a storage for a list of letters from string
// split all the letters in a string into the storage
// switch the spots of the firstIndex and secondIndex letters
// for each letter in the list of storage, produce a storage containing this word
// return the last storage

function swapChars(firstIndex, secondIndex, string) {
  var array = [];
  array = string.split('');
  var firstArgument = array[firstIndex];
  var secondArgument = array[secondIndex];
  var finalString = '';
  array[firstIndex] = secondArgument;
  array[secondIndex] = firstArgument;
  for (var i = 0; i < array.length; i++) {
    finalString += array[i];
  }
  return finalString;
}
