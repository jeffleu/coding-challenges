/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => {
  nums = nums.sort((a,b) => a - b);
  let result = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      result = true;
      break;
    }
  }
  return result;
};
