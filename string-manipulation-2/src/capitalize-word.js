/* exported capitalizeWord */
// function: capitalizeWords
// argument: word (a single javascript string)
// return: returns a word with its first character uppercased and the rest of its characters lowercased.

// create a new storage space for the new word
// create a new storage space for the first letter
// capitalized the first word on the string
// for each letter after the first word, lowercase the letters.
// if result of this is Javascript, produce the storage as JavaScript
// produce the storage

function capitalizeWord(word) {
  var newWord = '';
  var firstLetter = '';
  firstLetter = word[0].toUpperCase();
  newWord += firstLetter;
  for (var i = 1; i <= word.length - 1; i++) {
    newWord += word[i].toLowerCase();
  }
  if (newWord === 'Javascript') {
    return 'JavaScript';
  }
  return newWord;
}
