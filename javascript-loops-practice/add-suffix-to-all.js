/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newArray = [];
  for (var i = 0; i <= words.length - 1; i++) {
    newArray.push(words[i] + suffix);
  }
  return newArray;
}
