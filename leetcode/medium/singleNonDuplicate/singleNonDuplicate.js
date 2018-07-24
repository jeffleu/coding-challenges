/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = nums => {
  let i = 0;
  while(i < nums.length) {
    if (nums[i] === nums[i + 1]) {
      i += 2;
    } else {
      return nums[i];
    }
  }
};
