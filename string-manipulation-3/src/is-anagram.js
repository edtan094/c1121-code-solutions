/* exported isAnagram */
// function: isAnagram
// argument: firstString: any string
//           secondString: any string
// return: boolean whether or not secondString is an anagram of firstString
// loop through the firstString to check if all the letters in there match all the letters in secondString
// if a letter in the firstString matches a letter in the second string, move on to the next letter on firstString and do not check that matched letter in secondString moving foward
// ignore any spaces
// if all letters match, return true
// otherwise it is false
function isAnagram(firstString, secondString) {
  var newFirstString = firstString.replaceAll(' ', '');
  var newSecondString = secondString.replaceAll(' ', '');
  var stringCounter = 0;
  var status = true;
  if (newFirstString.length !== newSecondString.length) {
    return false;
  }
  for (var firstStringIndex = 0; firstStringIndex < newFirstString.length; firstStringIndex++) {
    status = true;
    for (var secondStringIndex = 0; secondStringIndex < newSecondString.length; secondStringIndex++) {
      if (status === false) {
        status = false;
      } else if (newFirstString[firstStringIndex] === newSecondString[secondStringIndex]) {
        status = false;
        stringCounter++;
        newSecondString = newSecondString.replace(newSecondString[secondStringIndex], '');
      }
    }
  } if (stringCounter === newFirstString.length) {
    return true;
  } else {
    return false;
  }
}
