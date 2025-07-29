/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // TWO PASS APPROACH
  /////////////////////
  // let dummy = new ListNode()
  // dummy.next = head

  // let length = 0
  // while (head) {
  //   length++
  //   head = head.next
  // }
  // let removalPos = length - n + 1
  // let prev = dummy
  // //think >> [2,3,4,6] (n=2->2nd last,ie 4): l-n+1 > 4-2+1
  // // but we should traverse only till removalPos - 1 to delete a node
  // for (let i = 0; i < removalPos - 1; i++) {
  //   prev = prev.next
  // }
  // prev.next = prev.next.next

  // return dummy.next
  ////////////////////////
  // ONE PASS APPROACH
  ////////////////////////

  let sentinel = new ListNode();
  sentinel.next = head;
  let first = sentinel;
  let second = sentinel;

  for (let i = 0; i < n; i++) {
    first = first.next;
  }
  while (first && first.next) {
    second = second.next;
    first = first.next;
  }
  second.next = second.next.next;
  return sentinel.next;
};
