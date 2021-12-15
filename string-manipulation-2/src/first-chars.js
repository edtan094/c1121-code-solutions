/* exported firstChars */
// function : firstChars
// argument: length - integral javascript number
//           string
// return: first length characters of string

// count each character of the argument until the length argument is hit
// create a storage that will contain the final answer
// add each letter together into the storage
// if the length is greater than the length of the string, the answer is string
// produce the storage

function firstChars(length, string) {
  var characters = '';
  for (var i = 0; i < length; i++) {
    if (length < string.length) {
      characters += string[i];
    } else if (length > string.length) {
      return string;
    }
  }
  return characters;
}
