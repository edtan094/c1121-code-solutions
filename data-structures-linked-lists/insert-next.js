/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const newList = new LinkedList(value);
  const oldRestOfList = list.next;
  list.next = newList;
  list.next.next = oldRestOfList;
}
