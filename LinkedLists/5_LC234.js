/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  //find midpoint, reverse the second half of LL and then check for palindrome

  // finding midpoint
  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reversing the second half of LL
  let prev = null;
  let curr = slow; //midpoint-found above
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  //checking for palindrome
  let leftLL = head;
  let rightLL = prev; // prev is pointing to the last element-found above
  while (rightLL) {
    if (leftLL.val !== rightLL.val) {
      return false;
    }
    leftLL = leftLL.next;
    rightLL = rightLL.next;
  }
  return true;
};
