/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

/*
Runtime: 68 ms, faster than 55.96% of JavaScript online submissions for Maximum Difference Between Node and Ancestor.
Memory Usage: 39 MB, less than 33.33% of JavaScript online submissions for Maximum Difference Between Node and Ancestor.
*/

const maxAncestorDiff = root => {
  if (!root) return 0;
  let result = 0;

  const helper = (node, max, min) => {
    if (!node) {
      result = Math.max(result, max - min);
      return;
    }
    max = Math.max(max, node.val);
    min = Math.min(min, node.val);
    helper(node.left, max, min);
    helper(node.right, max, min);
  };
  helper(root, root.val, root.val);

  return result;
};
