/* exported getWords */
// function: getWords
// argument: string containing zero or more words separated by spaces.
// return: an array of javascript string.  Each string is one word in the string parameter

// look at string
// create a storage to store where each word will go to. (array)
// if there is 0 words in the string, the storage is empty
// take each word, (separated by space) and put it into the storage
// produce the storage

function getWords(string) {
  var array = [];
  if (string === '') {
    return array;
  } else {
    array = string.split(' ');
    return array;
  }
}
