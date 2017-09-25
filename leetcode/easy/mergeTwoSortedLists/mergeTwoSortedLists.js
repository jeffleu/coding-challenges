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
const mergeTwoLists = (l1, l2) => {
  if (!l1 || !l2) {
    if (!l1 && !l2) return null;
    return !l1 ? l2 : l1;
  }
  
  let l3;
  let l1Runner = l1;
  let l2Runner = l2;

  if (l1.val > l2.val) {
    l3 = l2;
    l2Runner = l2Runner.next;
  } else if (l1.val < l2.val || l1.val === l2.val) {
    l3 = l1;
    l1Runner = l1Runner.next;
  }
  
  let l3Runner = l3;

  while(l1Runner && l2Runner) {
    if (l1Runner.val > l2Runner.val) {
      l3Runner.next = l2Runner;
      l2Runner = l2Runner.next;
    } else if (l1Runner.val < l2Runner.val || l1Runner.val === l2Runner.val) {
      l3Runner.next = l1Runner;
      l1Runner = l1Runner.next;
    }
    l3Runner = l3Runner.next;
  }
  
  if (l1Runner) {
    l3Runner.next = l1Runner;
  } else if (l2Runner) {
    l3Runner.next = l2Runner;
  }

  return l3;
};
