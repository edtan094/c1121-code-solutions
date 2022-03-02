/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let item;
  if (queue.peek() !== undefined) {
    item = queue.dequeue();
    if (queue.peek() === undefined) {
      return item;
    }
    queue.enqueue(item);
    let smallestItem;
    for (let i = 0; queue.peek() !== item; i++) {
      if (queue.peek() <= item) {
        smallestItem = queue.dequeue();
      } else {
        const otherItems = queue.dequeue();
        queue.enqueue(otherItems);
      }
    }
    return smallestItem; // gotta get the next smallest!!
  }
}

// take the first item and store it
// use a for loop until we hit the same number again
// if there is an item equal to or less than the first item, replace the first item with that number
// all numbers that are greater than the smallest item are routed back to the queue
