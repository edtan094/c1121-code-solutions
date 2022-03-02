/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() !== undefined) {
    let item;
    for (let i = 0; i < index; i++) {
      item = queue.dequeue();
      queue.enqueue(item);
    }
    return queue.dequeue();
  }
}
