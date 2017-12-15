/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElement = (findNums, nums) => {
  return findNums.map(n => {
    const nIndex = nums.indexOf(n);
    for (let i = nIndex + 1; i < nums.length; i++) {
      if (nums[i] > n) return nums[i];
    }
    return -1;
  });
};
