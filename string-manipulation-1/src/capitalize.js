/* exported capitalize */
// function: capitalize
// argument: word
// var capitalizedWord
// var wordLength
//
// Need a storage of capitalized word
// Need a storage for each new letter
// determine how many letters are in the word
// for each letter, capitalize the first letter and lowercase all other letters
// after each letter has been uppercased or lowercased, put it into the storage for capitalized word
// give back capitalized word

function capitalize(word) {
  var capitalizedWord = '';
  var newLetter;
  newLetter = word[0].toUpperCase();
  capitalizedWord += newLetter;
  for (var i = 1; i <= word.length - 1; i++) {
    newLetter = word[i].toLowerCase();
    capitalizedWord += newLetter;
  }
  return capitalizedWord;
}
