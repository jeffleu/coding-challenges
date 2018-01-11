/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  const result = new ListNode(0);
  let runner = result;
  let sum = 0;
  
  let p1 = l1;
  let p2 = l2;
  while(p1 || p2) {
    if (p1) {
      sum += p1.val;
      p1 = p1.next;
    }
    
    if (p2) {
      sum += p2.val;
      p2 = p2.next;
    }
    
    if (sum < 10) {
      runner.next = new ListNode(sum);
      sum = 0;
    } else {
      runner.next = new ListNode(sum % 10);
      sum = 1;
    }
    
    runner = runner.next;
  }
  
  if (sum) runner.next = new ListNode(sum);

  return result.next;
};
