//IMP

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // let nodeSet = new Set()
  // let current = head
  // while (current) {
  //   if (!nodeSet.has(current)) {//why not current.val? because val might be duplicate but node cant be as it contains the next element as well
  //     nodeSet.add(current)
  //   } else {
  //     return true
  //   }
  //   current = current.next
  // }
  // return false

  // another solution-floyd cycle detection algo--vvimp
  if (!head) return false;
  let fast = head.next; // otherwise it will collide in 1st element
  let slow = head;

  while (fast && fast.next) {
    if (slow === fast) return true;
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
  // the same floyd algo can also be written as
  // while (true) {
  //   if (!fast || !fast.next) {
  //     return false;
  //   }
  //   if (slow == fast) {
  //     return true;
  //   }
  //   slow = slow.next;
  //   fast = fast.next.next;
  // }
};
