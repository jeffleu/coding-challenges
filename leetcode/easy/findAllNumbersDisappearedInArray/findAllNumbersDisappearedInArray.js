/**
 * @param {number[]} nums
 * @return {number[]}
 */

const findDisappearedNumbers = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    while(nums[i] !== i + 1 && nums[nums[i] - 1] !== nums[i]) {
      const correctIndex = nums[i] - 1;
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
    }
  }  
    
  return nums.reduce((output, n, i) => {
    return i + 1 !== n ? output.concat(i + 1) : output;
  }, []);
};
