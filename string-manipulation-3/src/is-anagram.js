/* exported isAnagram */
// function: isAnagram
// argument: firstString: any string
//           secondString: any string
// return: boolean whether or not secondString is an anagram of firstString
// remove all spaces from both arguments
// take the firstString and compare if the letters in the secondString match
// if they match, return true
// otherwise return false
function isAnagram(firstString, secondString) {
  // for (var firstStringIndex = 0; firstStringIndex < firstString.length; firstStringIndex++) {
  //   if (firstString[firstStringIndex] === ' ') {
  //     firstString[firstStringIndex].replace(' ', '');
  //   }
  // }
  // for (var secondStringIndex = 0; secondStringIndex < secondString.length; secondStringIndex++) {
  //   if (secondString[secondStringIndex] === ' ') {
  //     secondString[secondStringIndex].replace(' ', '');
  //   }
  var newFirstString = firstString.replaceAll(' ', '');
  var newSecondString = secondString.replaceAll(' ', '');

}
