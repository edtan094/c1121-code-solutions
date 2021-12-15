/* exported swapChars */
// function: swapChars
// argument: firstIndex: an integral number
//          secondIndex: an integral number
//           string
// return: string with the characters at firstIndex and secondIndex swapped.

// create a storage both for the first and second character
// find first character on the string using the first integral number
// find the second character on the string using the second integral number
// switch their locations on the string around
// return string

function swapChars(firstIndex, secondIndex, string) {
  var firstCharacter;
  var secondCharacter;
  firstCharacter = string[firstIndex];
  secondCharacter = string[secondIndex];
  string[firstIndex] = firstCharacter;
  string[secondIndex] = secondCharacter;
  return string;
}
