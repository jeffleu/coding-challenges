/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const averageOfLevels = (root, depth = 0, result = []) => {
  if (!root) return;
  if (!result[depth]) result[depth] = [];
  result[depth].push(root.val);
  
  averageOfLevels(root.left, depth + 1, result);
  averageOfLevels(root.right, depth + 1, result);
  
  return result.map(levels => {
    const sum = levels.reduce((output, n) => output + n, 0);
    return sum / levels.length;
  });
};
