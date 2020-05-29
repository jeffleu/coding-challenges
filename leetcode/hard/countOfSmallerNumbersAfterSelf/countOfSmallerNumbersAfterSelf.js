/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
Runtime: 132 ms, faster than 60.10% of JavaScript online submissions for Count of Smaller Numbers After Self.
Memory Usage: 39.5 MB, less than 33.33% of JavaScript online submissions for Count of Smaller Numbers After Self.
*/

const countSmaller = nums => {
  if (!nums.length) return [];
  const counts = [0];
  const sorted = [nums[nums.length - 1]];
  
  // Function will do binary insertion
  const helper = target => {
    let start = 0;
    let end = sorted.length;
    while(start < end) {
      const mid = Math.floor((start + end) / 2);
      if (target > sorted[mid]) start = mid + 1;
      else end = mid;
    }
    sorted.splice(start, 0, target); // Inserts target number at start index
    return start; // Start indicates the number of numbers smaller than target
  };

  for (let i = nums.length - 2; i >= 0; i--) {
    const count = helper(nums[i]);
    counts.unshift(count);
  }
  return counts;
};
