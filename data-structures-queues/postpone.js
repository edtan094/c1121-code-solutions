/* exported postpone */

function postpone(queue) {
  if (queue.peek() !== undefined) {
    const item = queue.dequeue();
    queue.enqueue(item);
  }

}
