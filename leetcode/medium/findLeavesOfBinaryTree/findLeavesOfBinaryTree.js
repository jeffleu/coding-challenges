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

const findLeaves = root => {
  const result = [];
  const helper = node => {
    if (!node) return -1;
    const level = Math.max(helper(node.left), helper(node.right)) + 1;
    if (!result[level]) result[level] = [];
    result[level].push(node.val);
    return level;
  };
  helper(root);
  return result;
};
