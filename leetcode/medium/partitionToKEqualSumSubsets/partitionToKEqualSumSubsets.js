/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

/*
Runtime: 72 ms, faster than 58.40% of JavaScript online submissions for Partition to K Equal Sum Subsets.
Memory Usage: 38.6 MB, less than 25.00% of JavaScript online submissions for Partition to K Equal Sum Subsets.
*/

const canPartitionKSubsets = (nums, k) => {
  const total = nums.reduce((sum, num) => sum + num, 0);
  if (total % k !== 0) return false; // if total doesn't divide evenly by k, equal subsets isn't possible
  const target = total / k; // amount each subset should sum up to
  const visited = new Set(); // keep track of indexes visited

  const canPartition = (start, numberOfSubsets, currentSum) => {
    // BASE CASE
    if (numberOfSubsets === 1) return true;
    if (currentSum === target) return canPartition(0, numberOfSubsets - 1, 0); // if currentSum = target, call recursive function decrementing numberOfSubsets
    if (currentSum > target) return false; // if currentSum > target, the current subset sum is too large, so return false
    for (let i = start; i < nums.length; i++) {
      if (!visited.has(i)) { // if the current index has not been visited
        visited.add(i); // add index to visited set
        if (canPartition(i + 1, numberOfSubsets, currentSum + nums[i])) return true; // call recursive function with next index and updated currentSum
        visited.delete(i); // remove index for backtracking
      }
    }
    return false;
  }
  return canPartition(0, k, 0);
};
