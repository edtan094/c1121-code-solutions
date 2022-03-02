/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const head = list.data;
  const neck = list.next.data;
  list.data = neck;
  list.next.data = head;
  return list;
}
