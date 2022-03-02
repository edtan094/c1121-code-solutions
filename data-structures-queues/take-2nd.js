/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() !== undefined) {
    const item = queue.dequeue();
    queue.enqueue(item);
    return queue.dequeue();
  }
}
