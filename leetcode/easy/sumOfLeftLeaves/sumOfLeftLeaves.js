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
const sumOfLeftLeaves = (root, whichSide, result = []) => {
  if (!root) return 0;
    
  if (!root.left && !root.right) {
    if (whichSide === 'left') result.push(root.val);
    return 0;
  }
  
  if (root.left) sumOfLeftLeaves(root.left, 'left', result);
  if (root.right) sumOfLeftLeaves(root.right, 'right', result);
  return result.reduce((total, n) => total + n, 0);
};
