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
 * @return {TreeNode}
 */

/*
Runtime: 76 ms, faster than 44.17% of JavaScript online submissions for Lowest Common Ancestor of Deepest Leaves.
Memory Usage: 39.7 MB, less than 100.00% of JavaScript online submissions for Lowest Common Ancestor of Deepest Leaves.
*/

const getDepth = node => {
  if (!node) return 0;
  const left = getDepth(node.left);
  const right = getDepth(node.right);
  return 1 + Math.max(left, right);
};

const lcaDeepestLeaves = root => {
  if (!root) return null;
  const left = getDepth(root.left);
  const right = getDepth(root.right);
  if (left === right) return root;
  if (left > right) return lcaDeepestLeaves(root.left);
  return lcaDeepestLeaves(root.right);
};
