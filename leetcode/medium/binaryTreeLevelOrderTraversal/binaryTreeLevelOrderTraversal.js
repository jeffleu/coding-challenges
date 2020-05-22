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
 * @return {number[][]}
 */

/*
Runtime: 68 ms, faster than 21.11% of JavaScript online submissions for Binary Tree Level Order Traversal.
Memory Usage: 35.5 MB, less than 5.88% of JavaScript online submissions for Binary Tree Level Order Traversal.
*/

const levelOrder = (root, depth = 0, result = []) => {
  if (!root) return result;
  if (!result[depth]) result[depth] = [];
  result[depth].push(root.val);
  levelOrder(root.left, depth + 1, result);
  levelOrder(root.right, depth + 1, result);
  return result;
};
