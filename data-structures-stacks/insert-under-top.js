/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const topStack = stack.pop();
  stack.push(value);
  stack.push(topStack);
}
