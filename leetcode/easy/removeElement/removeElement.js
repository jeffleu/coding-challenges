/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  let id = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) nums[id++] = nums[i];
  }
  
  return id;
};
