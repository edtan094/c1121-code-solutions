/* exported includes */

function includes(list, value) {
  while (list !== null) {
    if (list.data === value) {
      return true;
    } else {
      list = list.next;
    }
  }
  return false;
}
