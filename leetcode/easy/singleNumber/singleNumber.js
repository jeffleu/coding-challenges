/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  const numCount = {};
  
  for (let i = 0; i < nums.length; i++) {
    if (!numCount.hasOwnProperty(nums[i])) {
      numCount[nums[i]] = 1;
    } else {
      delete numCount[nums[i]];
    }
  }
  
  return Number(Object.keys(numCount)[0]);
};
