/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums, index = 0, arr = [], result = []) => {
  if (!result.length) result.push([]);
    
  for (let i = index; i < nums.length; i++) {
  	const temp = arr.concat(nums[i]);
  	result.push(temp);
  	subsets(nums, i + 1, temp, result);
  }

  return result;
};
