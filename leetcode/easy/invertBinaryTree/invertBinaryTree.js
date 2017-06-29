/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = (root) => {
  if (!root) return root;
  
  const _left = root.left;
  const _right = root.right;
  root.left = _right;
  root.right = _left;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};
