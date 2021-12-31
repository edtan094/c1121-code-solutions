/* exported titleCase */
// function: titleCase
// argument: title -  A JavaScript String representing a book title
// return : The original title, but with APA Title Case Style applied.

function titleCase(title) {
  var finalTitle = '';
  var finalProperTitle = '';
  for (var titleIndex = 0; titleIndex < title.length; titleIndex++) {
    finalTitle += title[titleIndex];
    if (title[titleIndex] === ' ' || titleIndex === title.length - 1) {
      for (var finalTitleIndex = 0; finalTitleIndex < finalTitle.length; finalTitleIndex++) {
        if (finalTitle.length > 3 && finalTitleIndex === 0) {
          finalProperTitle += finalTitle[0].toUpperCase();
        } else {
          finalProperTitle += finalTitle[finalTitleIndex];
        }
      }
    }
  }
}
