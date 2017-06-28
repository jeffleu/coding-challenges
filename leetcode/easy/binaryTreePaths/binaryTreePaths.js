/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = (root, currentPath = '', paths = []) => {
  if (!root) return paths;
  if (!root.left && !root.right) paths.push(currentPath + root.val);
  if (root.left) binaryTreePaths(root.left, `${currentPath}${root.val}->`, paths);
  if (root.right) binaryTreePaths(root.right, `${currentPath}${root.val}->`, paths);
  return paths;
};
