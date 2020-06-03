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
 * @return {TreeNode}
 */
const getMaxDepth = (node, depth = 0) => {
  if (!node) return depth;
  const left = getMaxDepth(node.left, depth + 1);
  const right = getMaxDepth(node.right, depth + 1);
  return Math.max(left, right);
};

const subtreeWithAllDeepest = root => {
  if (!root || (!root.left && !root.right)) return root;
  
  let node = root;
  while(node) {
    const left = getMaxDepth(node.left);
    const right = getMaxDepth(node.right);
    // Traverse tree, following greater depth path, until both left and right depths are the same
    if (left > right) {
      node = node.left;
    } else if (left < right) {
      node = node.right;
    } else {
      return node;
    }
  }
};
