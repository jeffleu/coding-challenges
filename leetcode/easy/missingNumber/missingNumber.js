/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    while(nums[i] !== undefined && nums[i] !== i) {
      const index = nums[i];
      [nums[i], nums[index]] = [nums[index], nums[i]];
    }
  }
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === undefined) return i;
  }
    
  return nums.length;
};
