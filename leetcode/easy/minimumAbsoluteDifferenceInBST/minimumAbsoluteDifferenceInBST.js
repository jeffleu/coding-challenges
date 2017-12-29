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
const getNodeValues = (root, result = []) => {
  if (!root) return result;
  result.push(root.val);
  getNodeValues(root.left, result);
  getNodeValues(root.right, result);
  return result;
};

const getMinimumDifference = (root) => {
  const nodeValues = getNodeValues(root).sort((a, b) => a - b);
  let result = Infinity;
  
  for (let i = 0; i < nodeValues.length - 1; i++) {
    const diff = nodeValues[i + 1] - nodeValues[i];
    if (diff < result) result = diff;
  }
  
  return result;
};
