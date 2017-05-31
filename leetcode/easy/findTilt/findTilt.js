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

const dfs = (root, result) => {
  if (!root) return 0;
  const left = dfs(root.left, result);
  const right = dfs(root.right, result);
  result.total += Math.abs(left - right);
  return left + right + root.val;
};

const findTilt = (root) => {
  const result = { total: 0 };
  dfs(root, result);
  return result.total;
};
