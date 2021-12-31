/* exported titleCase */
// function: titleCase
// argument: title -  A JavaScript String representing a book title
// return : The original title, but with APA Title Case Style applied.

function titleCase(title) {
  var finalTitle = '';
  var finalProperTitle = '';
  for (var titleIndex = 0; titleIndex < title.length; titleIndex++) {
    if (titleIndex === 0) {
      finalTitle += title[titleIndex].toUpperCase();
    } else {
      finalTitle += title[titleIndex].toLowerCase();
    }
    if (title[titleIndex] === ' ' || titleIndex === title.length - 1) {
      for (var finalTitleIndex = 0; finalTitleIndex < finalTitle.length; finalTitleIndex++) {
        if (finalTitle.length > 3 && finalTitleIndex === 0) {
          finalProperTitle += finalTitle[0].toUpperCase();
        } if (finalTitle[finalTitleIndex - 1] === '-') {
          finalProperTitle += finalTitle[finalTitleIndex].toUpperCase();
        } if (finalTitle[finalTitleIndex] === 'i' && finalTitle[finalTitleIndex + 1] === ' ') {
          finalProperTitle += finalTitle[finalTitleIndex].toUpperCase();
        } else if (finalTitle.length <= 3) {
          finalProperTitle += finalTitle[finalTitleIndex];
        } else if (finalTitleIndex !== 0) {
          finalProperTitle += finalTitle[finalTitleIndex];
        }
      }
    }
    if (title[titleIndex] === ' ') {
      finalTitle = '';
    }
  }
  return finalProperTitle;
}
