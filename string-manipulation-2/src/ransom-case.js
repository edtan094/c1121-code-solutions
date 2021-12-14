/* exported ransomCase */
// function: ransomCase
// argument: any string
// return: returns string with every other character uppercased

// take the argument and lowercase all the letters and store it in another storage space
// for every other letter beginning with the second letter, uppercase that letter
// produce the storage space

function ransomCase(string) {
  var newWord = string.toLowerCase();
  for (var i = 1; i <= newWord.length - 1; i += 2) {
    newWord[i] = newWord[i].toUpperCase();
  }
  return newWord;
}
