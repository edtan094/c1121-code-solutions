/* exported isVowel */

// function: isVowel
// argument: char (string)
// return: boolean whether or not char is a vowel. true for vowel, false for not vowel

// look at the letter in char
// vowels are a,e,i,o,u
// if it is a vowel, it is true
// if it isnt, it is false

function isVowel(char) {
  if ((char.toLowerCase() === 'a') || (char.toLowerCase() === 'e') || (char.toLowerCase() === 'i') ||
  (char.toLowerCase() === 'o') || (char.toLowerCase() === 'u')) {
    return true;
  } else {
    return false;
  }
}
