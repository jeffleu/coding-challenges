/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  const result = [];
  let runningProduct = 1;
  
  for (let i = 0; i < nums.length; i++) {
    result[i] = runningProduct;
    runningProduct *= nums[i];
  }
  
  runningProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= runningProduct;
    runningProduct *= nums[i];
  }
  
  return result;
};
