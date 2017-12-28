/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = (nums) => {
  const sorted = nums.sort((a, b) => a - b);
  const beginning = nums[nums.length - 1] * nums[0] * nums[1];
  const end = nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];
  return Math.max(beginning, end);
};
