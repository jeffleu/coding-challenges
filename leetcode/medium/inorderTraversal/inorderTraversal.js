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
const inorderTraversal = (root, result = []) => {
    if (!root) return result;
    if (root.left) inorderTraversal(root.left, result);
    if (root) result.push(root.val);
    if (root.right) inorderTraversal(root.right, result);
    return result;
};
