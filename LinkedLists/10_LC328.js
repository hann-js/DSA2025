/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  // create linkages of all odds and all evens
  // finally link the last odd with first even and done!
  if (head == null || head.next == null) return head; // 0 or 1 node

  let odd = head;
  let even = head.next;
  let first_even = head.next;

  while (odd && odd.next && even && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }
  odd.next = first_even;
  return head;
};
