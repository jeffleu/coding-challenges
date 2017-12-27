/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {boolean}
 */
const isSameTree = (t1, t2) => {
  if ((t1 && !t2) || (!t1 && t2)) return false;
  if (!t1 && !t2) return true;
  if (t1.val !== t2.val) return false;
  return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right);
};
