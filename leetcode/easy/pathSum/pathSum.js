/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const getRootToLeafSums = (root, sum = 0, result = new Set()) => {
  if (!root.left && !root.right) result.add(sum + root.val);
  if (root.left) getRootToLeafSums(root.left, sum + root.val, result);
  if (root.right) getRootToLeafSums(root.right, sum + root.val, result);
  return result;
};

const hasPathSum = (root, sum) => {
  if (!root) return false;
  const sums = getRootToLeafSums(root);
  return sums.has(sum);
};
