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

const getDepth = (root) => {
  if (!root) return 0;
  return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
};

const diameterOfBinaryTree = (root) => {
  if (!root) return 0;
  let result = 0;
  const queue = [root];
  
  while(queue.length) {
    const current = queue.shift();
    const left = getDepth(current.left);
    const right = getDepth(current.right);
    if (left + right > result) result = left + right;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  
  return result;
};
