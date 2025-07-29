/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let curr = headB;
  let setB = new Set(); // create a lookup-set
  while (curr) {
    setB.add(curr);
    curr = curr.next;
  }

  curr = headA;
  while (curr) {
    if (setB.has(curr)) {
      return curr;
    }
    curr = curr.next;
  }
  return null;
};
