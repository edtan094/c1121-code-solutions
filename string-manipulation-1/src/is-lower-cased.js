/* exported isLowerCased */
// function : isLowerCased
// argument: word
// return: true is all characters in the word are lowercased

// look at the word
// if all letters are lowercased, return true, otherwise return false

function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  }
  return false;
}
