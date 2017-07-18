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
const findBottomLeftValue = (root, depth = 0, result = []) => {
  if (!result[depth]) {
    result[depth] = [root.val];
  } else {
    result[depth].push(root.val);
  }
  
  if (root.left) findBottomLeftValue(root.left, depth + 1, result);
  if (root.right) findBottomLeftValue(root.right, depth + 1, result);
  
  return result[result.length - 1][0];
};
