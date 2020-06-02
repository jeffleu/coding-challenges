/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const listToArray = head => {
  const result = [];
  while(head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
};

const arrayToTree = (arr, start = 0, end = arr.length - 1) => {
  if (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const root = new TreeNode(arr[mid]);
    root.left = arrayToTree(arr, start, mid - 1);
    root.right = arrayToTree(arr, mid + 1, end);
    return root;
  }
  return null;
};

const sortedListToBST = head => {
  const arr = listToArray(head);
  return arrayToTree(arr);
};
