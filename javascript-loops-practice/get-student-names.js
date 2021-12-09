/* exported getStudentNames */
function getStudentNames(students) {
  var newArray = [];
  for (var i = 0; i <= students.length - 1; i++) {
    newArray.push(students[i].name);
  }
  return newArray;
}
