/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const sum = (arr) => arr.reduce((total, n) => total + n, 0);

const combinationSum = (nums, target, currentIndex = 0, currentNums = [], result = []) => {
  const total = sum(currentNums);
  if (total === target) {
    return result.push(currentNums);
  } else if (total > target) {
    return;
  }
  
  for (let i = currentIndex; i < nums.length; i++) {
    combinationSum(nums, target, i, currentNums.concat(nums[i]), result);
  }

  return result;
};
