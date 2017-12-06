/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums => {
  let result = -Infinity;
  
  for (let i = 0; i < nums.length; i++) {
    let currentSum = nums[i];
    if (currentSum > result) result = currentSum;
      
    for (let j = i + 1; j < nums.length; j++) {
      currentSum += nums[j];
      if (currentSum > result) result = currentSum;
    }
  }
  
  return result;
};
