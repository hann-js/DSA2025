/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // we are not creating a new LL
  // corner cases
  if (!list1) {
    return list2;
  } else if (!list2) {
    return list1;
  }
  let dummy = new ListNode();
  let curr = dummy;
  // create a dummy node to track the head
  while (list1 && list2) {
    if (list1.val > list2.val) {
      curr.next = list2;
      list2 = list2.next;
      // just pointing to the smaller node
    } else {
      curr.next = list1;
      list1 = list1.next;
    }
    curr = curr.next;
  }
  if (list1) {
    // connecting to remaining LL whichever is left
    curr.next = list1;
  } else {
    curr.next = list2;
  }
  return dummy.next;
};
