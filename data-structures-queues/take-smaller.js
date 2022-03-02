/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() !== undefined) {
    const firstItem = queue.dequeue();
    if (queue.peek() === undefined) {
      return firstItem;
    }
    const secondItem = queue.dequeue();
    if (Math.max(firstItem, secondItem) === firstItem) {
      queue.enqueue(firstItem);
      return secondItem;
    } else {
      queue.enqueue(secondItem);
      return firstItem;
    }
  }

}
