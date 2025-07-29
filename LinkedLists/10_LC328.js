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

  // while (odd && odd.next && even && even.next) {
  // why above condition is unnecessary?
  // because we have tested all corner cases above, our LL atleast contains 2 or more
  // elements that means the odd and even are not null at the starting of the loop
  // now this odd and even are pointer to the node and it will surely have .next
  // next que can be ok, then what if it goes to  null inside the loop when we do .next.next
  // it wont because if odd.next exists that means next el exists so it will also have its next property
  while (odd.next && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }
  odd.next = first_even;
  return head;
};
