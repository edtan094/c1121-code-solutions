/* exported removeNext */

function removeNext(list) {
  if (list.next !== null) {
    const restOfList = list.next.next;
    list.next = restOfList;
  }

}
