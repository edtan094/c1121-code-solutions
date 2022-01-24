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
  const newFirstString = firstString.replaceAll(' ', '');
  const newSecondString = secondString.replaceAll(' ', '');

  const firstStringArray = newFirstString.split('');
  const secondStringArray = newSecondString.split('');

  const newFirstStingArray = firstStringArray.sort();
  const newSecondStringArray = secondStringArray.sort();

  for (let index = 0; index < newFirstStingArray.length; index++) {
    if (newFirstStingArray[index] !== newSecondStringArray[index]) {
      return false;
    }
  }
  return true;
}
