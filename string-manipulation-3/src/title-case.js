/* exported titleCase */
// function: titleCase
// argument: title -  A JavaScript String representing a book title
// return : The original title, but with APA Title Case Style applied.

function titleCase(title) {
  var finalTitle = '';
  var finalProperTitle = '';
  var status = false;
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
        if ((finalTitleIndex === 0 && finalTitle !== 'and ' && finalTitle !== 'or ' && finalTitle !== 'nor ' && finalTitle !== 'but ' && finalTitle !== 'a ' && finalTitle !== 'an ' && finalTitle !== 'the ' && finalTitle !== 'as ' && finalTitle !== 'at ' && finalTitle !== 'by ' && finalTitle !== 'for ' && finalTitle !== 'in ' && finalTitle !== 'of ' && finalTitle !== 'on ' && finalTitle !== 'per ' && finalTitle !== 'to ') || status === true) {
          finalProperTitle += finalTitle[finalTitleIndex].toUpperCase();
        } else if (finalTitle !== 'and ' && finalTitle !== 'or ' && finalTitle !== 'nor ' && finalTitle !== 'but ' && finalTitle !== 'a ' && finalTitle !== 'an ' && finalTitle !== 'the ' && finalTitle !== 'as ' && finalTitle !== 'at ' && finalTitle !== 'by ' && finalTitle !== 'for ' && finalTitle !== 'in ' && finalTitle !== 'of ' && finalTitle !== 'on ' && finalTitle !== 'per ' && finalTitle !== 'to ' && status === false && finalTitle[finalTitleIndex - 1] !== '-') {
          finalProperTitle += finalTitle[finalTitleIndex];
        }
        if ((finalTitle === 'and ' || finalTitle === 'or ' || finalTitle === 'nor ' || finalTitle === 'but ' || finalTitle === 'a ' || finalTitle === 'an ' || finalTitle === 'the ' || finalTitle === 'as ' || finalTitle === 'at ' || finalTitle === 'by ' || finalTitle === 'for ' || finalTitle === 'in ' || finalTitle === 'of ' || finalTitle === 'on ' || finalTitle === 'per ' || finalTitle === 'to ') && status === false) {
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
