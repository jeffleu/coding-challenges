/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

/*
Runtime: 80 ms, faster than 24.16% of JavaScript online submissions for Check Completeness of a Binary Tree.
Memory Usage: 38.8 MB, less than 100.00% of JavaScript online submissions for Check Completeness of a Binary Tree.
*/

const isCompleteTree = root => {
  if (!root) return false;
  const queue = [root];
  let nodes = [];
  while(queue.length) {
    const node = queue.shift();
    if (node) {
      queue.push(node.left, node.right);
      nodes.push(node.val);
    } else {
      nodes.push(node);
    }
  }

  let end = nodes.length - 1;
  while(nodes[end] === null) end--;
  nodes = nodes.slice(0, end + 1);
  return nodes.includes(null) ? false : true;
};
