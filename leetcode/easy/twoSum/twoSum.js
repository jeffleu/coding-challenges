/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const storage = {};
  
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    
    if (!storage.hasOwnProperty(nums[i])) {
      storage[diff] = i;
    } else {
      return [storage[nums[i]], i];
    }
  }
  
  return [];
};
