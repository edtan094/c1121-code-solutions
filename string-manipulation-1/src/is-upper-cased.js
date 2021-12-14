/* exported isUpperCased */
// function: isUpperCased
// argument: word
// return: boolean true if all letters are uppercase.  false if any letters are lowercase.
//
// look at word and determine if any letters are lowercase.
// as soon as one letter is lowercase, produce false, other produce true

function isUpperCased(word) {
  for (var i = 0; i <= word.length - 1; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
