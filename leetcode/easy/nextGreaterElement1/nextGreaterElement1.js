/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElement = (findNums, nums) => {
  return findNums.map(n => {
    const indexOfNum = nums.indexOf(n);
    
    let nextGreater = -1;
    for (let i = indexOfNum + 1; i < nums.length; i++) {
      if (nums[i] > n && nextGreater === -1) {
        nextGreater = nums[i];
      }
    }
    
    return nextGreater;
  });
};
