/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  const result = [nums[0], Math.max(nums[0], nums[1])];

  for (let i = 2; i < nums.length; i++) {
    result[i] = Math.max(nums[i] + result[i - 2], result[i - 1]);
  }
    
  return result[result.length - 1];
};
