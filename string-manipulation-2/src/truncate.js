/* exported truncate */
// function: truncate
// argument: length (any integral number), string
// return: a shortened version of string, plus in an ellipsis

// look at the argument and determine how many characters should be included in the return with the ellipsis
// once that is done, count the number of characters based on the length number and store that in a storage spot
// then take the answer of storage plus ellipsis and put that into another storage
// produce the final storage

function truncate(length, string) {
  var letters = '';
  var answer = '';
  for (var i = 0; i < length; i++) {
    if (length < string.length - 1 && string !== '') {
      letters += string[i];
      answer = letters + '...';
    } else {
      answer = string + '...';
    }
  }
  return answer;
}
