/**
 * @param {number[]} nums
 * @return {number}
 */

/*
Runtime: 108 ms, faster than 88.61% of JavaScript online submissions for Array Partition I.
Memory Usage: 39.2 MB, less than 11.11% of JavaScript online submissions for Array Partition I.
*/

const arrayPairSum = nums => {
  nums = nums.sort((a, b) => a - b);
  let result = 0;
  for (let i = 0; i < nums.length; i += 2) result += nums[i];
  return result;
};
