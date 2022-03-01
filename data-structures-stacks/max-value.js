/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let number;
  let status = true;
  while (stack.peek() !== undefined) {
    if (status === true) {
      number = stack.pop();
      status = false;
    }
    if (number < stack.peek()) {
      number = stack.pop();
    } else {
      stack.pop();
    }
  }
  return number;
}
