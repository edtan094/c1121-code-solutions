/* exported countValues */

function countValues(stack) {
  let i = 0;
  while (stack.pop() !== undefined) {
    i++;
  }
  return i;
}
