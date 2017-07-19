/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const largestValues = (root, depth = 0, result = []) => {
  if (!root) return [];
  if (result[depth] === undefined || result[depth] < root.val) result[depth] = root.val;
  if (root.left) largestValues(root.left, depth + 1, result);
  if (root.right) largestValues(root.right, depth + 1, result);
  return result;
};
