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
 * @return {boolean}
 */

/*
Runtime: 72 ms, faster than 22.74% of JavaScript online submissions for Symmetric Tree.
Memory Usage: 38.8 MB, less than 10.00% of JavaScript online submissions for Symmetric Tree.
*/

const flipTree = root => {
  if (!root) return;
  [root.left, root.right] = [root.right, root.left];
  flipTree(root.left);
  flipTree(root.right);
  return root;
};

const isSymmetric = root => {
  if (!root || (!root.left && !root.right)) return true;
  if ((root.left && !root.right) || (!root.left && root.right)) return false;
  const queue = [root.left, flipTree(root.right)];
  while(queue.length) {
    const left = queue.shift();
    const right = queue.shift();
    if (!left && !right) continue;
    if (left && right && left.val !== right.val) return false;
    if (left && !right) return false;
    if (!left && right) return false;
    queue.push(left.left, right.left, left.right, right.right);
  }
  return true;
};
