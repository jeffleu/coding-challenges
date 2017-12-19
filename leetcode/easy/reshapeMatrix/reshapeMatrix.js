/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = (nums, r, c) => {
  if (nums.length * nums[0].length !== r * c) return nums;
  const flattened = nums.reduce((output, row) => output.concat(row), []);
  
  const result = [];  
  for (let i = 0; i < r; i++) {
    result[i] = [];
    for (let j = 0; j < c; j++) {
      result[i][j] = flattened.shift();
    }
  }
  return result;
};
