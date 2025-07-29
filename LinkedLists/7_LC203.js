// IMP: Looks easy but solve it
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let dummy = new ListNode(); // this is a dummy node: ListNode is available in problem
  // else initialise with {val: undefined, next: head}
  // the dummy node is used for the case when the initial node/s are equal to val and
  // we have to delete them
  // also, dummy node's next always points to the new head[if initial nodes were val]
  dummy.next = head;
  let prev = dummy;
  while (prev && prev.next) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return dummy.next;
};
