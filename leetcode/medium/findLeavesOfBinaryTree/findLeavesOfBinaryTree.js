/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *   this.val = val;
 *   this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

const getHeight = (node, result) => {
  if (!node) return -1;
  const leftHeight = getHeight(node.left, result);
  const rightHeight = getHeight(node.right, result);
  const level = Math.max(leftHeight, rightHeight) + 1;
  
  if (!result[level]) result[level] = [];
  result[level].push(node.val);
  node.left = node.right = null;
  
  return level;
};

const findLeaves = (root) => {
  const result = [];
  getHeight(root, result);
  return result;
};