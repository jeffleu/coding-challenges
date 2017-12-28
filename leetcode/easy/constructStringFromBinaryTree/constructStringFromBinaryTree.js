/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
const tree2str = (root) => {
  if (!root) return '';
  if (!root.left && !root.right) return `${root.val}`;
  if (!root.left && root.right) return `${root.val}()(${tree2str(root.right)})`;
  if (root.left && !root.right) return `${root.val}(${tree2str(root.left)})`;
  return `${root.val}(${tree2str(root.left)})(${tree2str(root.right)})`;
};
