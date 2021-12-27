/* exported calculator */
var calculator = {
  add: function (x, y) {
    var sum = x + y;
    return sum;
  },
  subtract: function (x, y) {
    var subtract = x - y;
    return subtract;
  },
  multiply: function (x, y) {
    var multiply = x * y;
    return multiply;
  },
  divide: function (x, y) {
    var divide = x / y;
    return divide;
  },
  square: function (x) {
    var square = x * x;
    return square;
  },
  sumAll: function (numbers) {
    var sumAll = 0;
    for (var i = 0; i < numbers.length; i++) {
      sumAll += numbers[i];
    }
    return sumAll;
  },
  getAverage: function (numbers) {
    var getAverage = 0;
    for (var i = 0; i < numbers.length; i++) {
      getAverage += numbers[i];
    }
    getAverage = getAverage / numbers.length;
    return getAverage;
  }
};
