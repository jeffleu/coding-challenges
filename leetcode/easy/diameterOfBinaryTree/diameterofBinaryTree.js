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

const getMaxDepth = (root) => {
  if (!root) return 0;
  return Math.max(getMaxDepth(root.left), getMaxDepth(root.right)) + 1;
};

const diameterOfBinaryTree = (root) => {
  if (!root) return 0;
  const left = diameterOfBinaryTree(root.left);
  const right = diameterOfBinaryTree(root.right);
  const self = getMaxDepth(root.left) + getMaxDepth(root.right);
  return Math.max(left, self, right);
};
