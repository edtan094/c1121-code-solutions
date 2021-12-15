/* exported capitalizeWords */
// function: capitalizedWords
//  argument: string
//  return: string with every word capitalized

//  create a storage for the argument to be lowercased into here
// create another storage where this argument will be capitalized as follows
//  capitalize the first letter, and every letter following a space and add each letter in the last storage
//  produce the storage

function capitalizeWords(string) {
  var lowerCasedString = string.toLowerCase();
  var finalString = '';
  finalString += lowerCasedString[0].toUpperCase();
  for (var i = 1; i < lowerCasedString.length; i++) {
    if (lowerCasedString[i - 1] === ' ') {
      finalString += lowerCasedString[i].toUpperCase();
    } else if (lowerCasedString[i - 1] !== ' ') {
      finalString += lowerCasedString[i];
    }

  }
  return finalString;
}
