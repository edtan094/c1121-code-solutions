/* exported sumAll */
function sumAll(numbers) {
  var i = 0;
  var total = 0;
  while (i <= (numbers.length - 1)) {
    total += numbers[i];
    i++;
  }
  return total;
}
