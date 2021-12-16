/* exported numVowels */
// function: numVowels
//  argument: string
//  return: number of vowel characters in string

// create a storage and place the string in there after it has been all capitalized
// create a storage for the number of vowels in the string starting at 0
// for each letter in the storage that is a vowel, increase the vowel storage by 1
// produce the storage

function numVowels(string) {
  var capitalizedString = string.toUpperCase();
  var numberOfVowels = 0;
  for (var i = 0; i < capitalizedString.length; i++) {
    if (capitalizedString[i] === 'A' || capitalizedString[i] === 'E' || capitalizedString[i] === 'I' || capitalizedString[i] === 'O' || capitalizedString[i] === 'U') {
      numberOfVowels += 1;
    }
  }
  return numberOfVowels;
}
