/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next) return head; // if 0 or 1 elements in list

  let length = 0;
  let curr = head;
  while (curr) {
    // get the length
    curr = curr.next;
    length++;
  }

  let rotation = k % length; // rotating LL by its length reaches same original LL
  let slow = head;
  let fast = head;
  for (let i = 0; i < rotation; i++) {
    fast = fast.next;
  }
  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  fast.next = head;
  let newHead = slow.next;
  slow.next = null;

  return newHead;
};
