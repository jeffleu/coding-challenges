/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
  let result = 0;
  let currentCount = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentCount++;
    } else {
      result = Math.max(result, currentCount);
      currentCount = 0;
    }
  }
  
  return Math.max(result, currentCount);
};
