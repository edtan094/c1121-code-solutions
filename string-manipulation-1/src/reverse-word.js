/* exported reverseWord */
// function: reverseWord
// argument: single word as a string
// return: a string in reverse order of word

// look at the string
// create a storage space for characters you will taking in from word
// for each last letter of the word, take it and put it into the storage space for word
// produce word

function reverseWord(word) {
  var drow = '';
  for (var i = word.length - 1; i >= 0; i--) {
    drow += word[i];
  }
  return drow;
}
