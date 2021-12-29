/* exported isPalindromic */
// function: isPalindromic
// argument: any string
// return: boolean
// take the string in the argument, and spell it backwards
// put the result of that into a variable
// if that variable is stricly equal to the string in the argument return true
// if not, return false

function isPalindromic(string) {
  var newString = string.replace(' ', '');
  var backwardsString = '';
  for (var stringIndex = newString.length - 1; stringIndex >= 0; stringIndex--) {
    backwardsString += newString[stringIndex];
  } if (backwardsString === newString) {
    return true;
  }
  return false;
}
