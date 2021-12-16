/* exported ransomCase */
// function: ransomCase
// argument: any string
// return: returns string with every other character uppercased

// take the argument and lowercase all the letters and store it in another storage space
// for every other letter beginning with the second letter, uppercase that letter
// produce the storage space

function ransomCase(string) {
  var newWord = string.toLowerCase();
  var everyOtherWord = true;
  var finalWord = '';
  for (var i = 0; i <= newWord.length - 1; i++) {
    if (everyOtherWord === true) {
      everyOtherWord = false;
      finalWord += newWord[i];
    } else if (everyOtherWord === false) {
      everyOtherWord = true;
      finalWord += newWord[i].toUpperCase();
    }
  }
  return finalWord;
}
