/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
  const sorted = nums.sort((a, b) => a - b);
  let result;
  let smallestDiff;
  
  for (let i = 0; i < sorted.length; i++) {
    const a = sorted[i];
    let start = i + 1;
    let end = sorted.length - 1;
    
    while(start < end) {
      const b = sorted[start];
      const c = sorted[end];
      const sum = a + b + c;
      const diff = sum > target ? sum - target : target - sum;
      
      if (result === undefined || diff < smallestDiff) {
        result = sum;
        smallestDiff = diff;
      } else if (diff === 0) {
        return sum;
      }
      
      if (sum > target) end--;
      if (sum < target) start++;
    }
  }
  
  return result;
};
