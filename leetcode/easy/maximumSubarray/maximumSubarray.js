/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (arr) => {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(maxEndingHere + arr[i], arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  
  return maxSoFar;
};
