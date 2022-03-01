/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const onlyStack = stack.pop();
  if (stack.peek() === undefined) {
    stack.push(onlyStack);
    return undefined;
  }
  stack.push(onlyStack);
  const topStack = stack.pop();
  const secondTopStack = stack.pop();
  stack.push(secondTopStack);
  stack.push(topStack);
  return secondTopStack;
}
