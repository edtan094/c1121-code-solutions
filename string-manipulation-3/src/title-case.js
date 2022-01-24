/* exported titleCase */
// function: titleCase
// argument: title -  A JavaScript String representing a book title
// return : The original title, but with APA Title Case Style applied.

function titleCase(title) {
  var finalTitle = '';
  var finalProperTitle = '';
  var status = false;
  var shortWords = ['and ', 'or ', 'nor ', 'but ', 'a ', 'an ', 'the ', 'as ', 'at ', 'by ', 'for ', 'in ', 'of ', 'on ', 'per ', 'to '];
  for (var titleIndex = 0; titleIndex < title.length; titleIndex++) {
    if (titleIndex === 0) {
      finalTitle += title[titleIndex].toUpperCase();
    } else {
      finalTitle += title[titleIndex].toLowerCase();
    }
    if ((finalTitle === 'Javascript ' && status === false) || (finalTitle === 'javascript ' && status === false)) {
      finalTitle = 'javaScript ';
    }
    if ((finalTitle === 'Javascript: ' && status === false) || (finalTitle === 'javascript: ' && status === false)) {
      finalTitle = 'javaScript: ';
    }
    if (finalTitle === 'api') {
      finalTitle = 'API';
    }
    if (finalTitle === 'i ') {
      finalTitle = 'I ';
    }
    if (title[titleIndex] === ' ' || titleIndex === title.length - 1) {
      for (var finalTitleIndex = 0; finalTitleIndex < finalTitle.length; finalTitleIndex++) {
        if ((finalTitleIndex === 0 && !shortWords.includes(finalTitle)) || status === true) {
          finalProperTitle += finalTitle[finalTitleIndex].toUpperCase();
        } else if (!shortWords.includes(finalTitle) && status === false && finalTitle[finalTitleIndex - 1] !== '-') {
          finalProperTitle += finalTitle[finalTitleIndex];
        }
        if (shortWords.includes(finalTitle) && status === false) {
          finalProperTitle += finalTitle[finalTitleIndex];
        }
        if (finalTitle[finalTitleIndex - 1] === '-') {
          finalProperTitle += finalTitle[finalTitleIndex].toUpperCase();
        }
        if (status === true && finalTitle[finalTitleIndex] !== ' ') {
          status = false;
        }
        if (finalTitle[finalTitleIndex] === ':') {
          status = true;
        }
      }
    }
    if (title[titleIndex] === ' ') {
      finalTitle = '';
    }
  }
  return finalProperTitle;
}
