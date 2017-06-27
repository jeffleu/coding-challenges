/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = (nums, r, c) => {
  const originalCount = nums.reduce((total, row) => total + row.length, 0);
  const newCount = r * c;
  if (newCount !== originalCount) return nums;
  
  const numArray = nums.reduce((output, row) => output.concat(row), []);
  
  const result = [];
  for (let i = 0; i < r; i++) {
    result[i] = [];
    for (let j = 0; j < c; j++) {
      result[i][j] = numArray.shift();
    }
  }
  return result;
};
