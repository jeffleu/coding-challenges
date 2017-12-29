/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {
  if (!head) return null;
  let base = head;
  let runner = base.next;
  
  while(runner) {
    if (base.val !== runner.val) {
      base.next = runner;
      base = base.next;
    }
    runner = runner.next;
  }
  
  base.next = runner;
  return head;
};
