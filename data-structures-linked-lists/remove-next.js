/* exported removeNext */

function removeNext(list) {
  if (list.next !== null) {
    const restOfList = list.next.next;
    delete list.next;
    list.next = restOfList;
  }

}
