/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = (root) => {
  if (!root) return 0;
  let left = root.left && !root.left.left && !root.left.right ? root.left.val : sumOfLeftLeaves(root.left);
  const right = sumOfLeftLeaves(root.right);
  return left + right;
};
