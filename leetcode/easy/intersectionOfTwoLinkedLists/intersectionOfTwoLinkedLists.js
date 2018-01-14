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
const getIntersectionNode = (l1, l2) => {
  if (!l1 || !l2) return null;
    
  let p1 = l1;
  let p2 = l2;
  let p1ReachedEnd = false;
  let p2ReachedEnd = false;
  
  while(p1 !== p2) {
    p1 = p1.next;
    if (!p1) {
      if (!p1ReachedEnd) {
        p1 = l2;
        p1ReachedEnd = true;   
      } else {
        return null;
      }
    }
     
    p2 = p2.next;
    if (!p2) {
      if (!p2ReachedEnd) {
        p2 = l1;
        p2ReachedEnd = true;
      } else {
        return null;
      }
    }
  }
  
  return p1;
};
