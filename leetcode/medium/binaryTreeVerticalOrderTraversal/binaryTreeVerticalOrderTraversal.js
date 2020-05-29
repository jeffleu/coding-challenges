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
 * @return {number[][]}
 */
const verticalOrder = root => {
  if (!root) return [];
  const map = {};

  root.col = 0; // Add additional key 'col' to keep track of node's column number
  const queue = [root]; // Start queue off with root node
  while(queue.length) { // While queue is not empty
    const node = queue.shift(); // Grab next node from queue
    if (!map.hasOwnProperty(node.col)) map[node.col] = []; // If map doesn't have node.col property, add it and set value to empty array
    map[node.col].push(node.val); // Add node value to array
    if (node.left) { // If left node is not null
      node.left.col = node.col - 1; // Add col property to left node
      queue.push(node.left); // Push left node to queue
    }
    if (node.right) { // If right node is not null
      node.right.col = node.col + 1; // Add col property to right node
      queue.push(node.right); // Push right node to queue
    }
  }

  const result = [];
  const sortedKeys = Object.keys(map).map(Number).sort((a, b) => a - b); // Grab all keys from map, convert to number and sort in ascending order
  sortedKeys.forEach(key => result.push(map[key])); // Loop through each array and push to result
  return result;
};
