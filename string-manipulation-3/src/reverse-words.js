/* exported reverseWords */
// function: reverseWords
// argument: any string
// return: A version of String with every character of each word reversed, but the words in their original order.
// go through each letter in the string argument.  once you hit a space character, take that character and put it in a variable, including the space
// once all characters are in a variable, go through each variable and swap the order of the letters backwards.
// concatenate all the variables together in the order they were created and store it in a final variable
// return this final variable

function reverseWords(string) {
  var finalString;
  for (var stringIndex = 0; stringIndex < string.length; stringIndex++) {
    finalString += string[stringIndex];
    if (string[stringIndex] === " "){
      for (var finalStringIndex = finalString.length -1; finalStringIndex >= 0; finalStringIndex--)
    }
  }
}
