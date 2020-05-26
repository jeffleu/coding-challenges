/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */

/*
Runtime: 72 ms, faster than 17.80% of JavaScript online submissions for Nested List Weight Sum.
Memory Usage: 34.3 MB, less than 100.00% of JavaScript online submissions for Nested List Weight Sum.
*/

const depthSum = nestedList => {
  let result = 0;
  const helper = (list, depth = 1) => {
    list.forEach(nestedInt => {
      if (nestedInt.isInteger()) {
        result += nestedInt.getInteger() * depth;
      } else {
        helper(nestedInt.getList(), depth + 1);
      }
    });
  }
  helper(nestedList);
  return result;
};