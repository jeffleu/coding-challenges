/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = nums => {
  let result = 0;
  let currentCount = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) currentCount++;
    if (nums[i + 1] === undefined && currentCount > result) result = currentCount;
    if (nums[i] === 0) {
      if (currentCount > result) result = currentCount;
      currentCount = 0;
    }
  }
  
  return result;
};
