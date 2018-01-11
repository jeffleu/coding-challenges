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
const isPalindrome = (head) => {
  // Find midpoint
  let fast = head;
  let slow = head;
  
  while(fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  
  // Reverse second half
  let node = null;
  
  while(slow) {
    const next = slow.next;
    slow.next = node;
    node = slow;
    slow = next;
  }
  
  // Compare nodes
  while(node) {
    if (node.val !== head.val) return false;
    node = node.next;
    head = head.next;
  }
  
  return true;
};
