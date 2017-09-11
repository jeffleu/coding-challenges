/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = nums => {
  if (nums === undefined || nums === null || !nums.length) return undefined;
  if (nums.length === 1) return nums.shift();
  
  let min = max = result = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    const current = nums[i];
    const prevMax = max;
    max = Math.max(Math.max(current * min, current * max), current);
    min = Math.min(Math.min(current * min, current * prevMax), current);
    result = Math.max(max, result);
  }
  
  return result;
};
