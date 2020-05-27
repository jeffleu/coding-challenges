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
 * @return {number}
 */

/*
Runtime: 68 ms, faster than 17.77% of JavaScript online submissions for Second Minimum Node In a Binary Tree.
Memory Usage: 33.2 MB, less than 100.00% of JavaScript online submissions for Second Minimum Node In a Binary Tree.
*/

const findSecondMinimumValue = root => {
  if (!root || (!root.left && !root.right) || Math.max(root.left.val, root.right.val) === root.val) return -1;
  const helper = (node = root) => {
    if (!node.left && !node.right) return node.val;
    const left = helper(node.left);
    const right = helper(node.right);
    if (left === root.val) return right;
    if (right === root.val) return left;
    return Math.min(left, right);
  };
  return helper();
};
