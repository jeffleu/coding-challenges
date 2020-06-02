/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */

/*
Runtime: 76 ms, faster than 20.76% of JavaScript online submissions for Convert Binary Search Tree to Sorted Doubly Linked List.
Memory Usage: 38.9 MB, less than 100.00% of JavaScript online submissions for Convert Binary Search Tree to Sorted Doubly Linked List.
*/

const treeToDoublyList = root => {
  if (!root) return root;

  const stack = [];
  const helper = node => { // Add to stack all nodes in tree using in-order traversal
    if (!node) return;
    helper(node.left);
    stack.push(node);
    helper(node.right);
  };
  helper(root);

  let head = null;
  let prev = null;
  while(stack.length) {
    const current = stack.shift();
    if (!head) head = current;
    if (prev) {
      prev.right = current;
      current.left = prev;
    }
    prev = current;
  }

  head.left = prev;
  prev.right = head;
  return head;
};
