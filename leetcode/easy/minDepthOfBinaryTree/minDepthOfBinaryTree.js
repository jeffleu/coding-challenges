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
const minDepth = (root, depth = 1, result = {value: Number.MAX_VALUE}) => {
  if (!root) return 0;
  if (!root.left && !root.right) {
  	if (depth < result.value) result.value = depth;
  }
  
  minDepth(root.left, depth + 1, result);
  minDepth(root.right, depth + 1, result);
  
  return result.value;
};
