/* exported lastChars */
// function: lastChars
// argument: length (any integral number)
//           string
// return: last length characters of string

// count the number of characters starting from the end of the string down till the number length is reached
// if the length is greater than the number of characters in string, produce string as the answer
// create a storage for string characters that will be put in here
// once you have reached the final character from the end, add it into the storage from beginning to end.

function lastChars(length, string) {
  var characters = '';
  if (length > string.length) {
    return string;
  } for (var i = string.length - length; i < string.length; i++) {
    characters += string[i];
  }
  return characters;
}
