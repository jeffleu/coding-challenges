/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
  const storage = {};
  for (let i = 0; i < nums.length; i++) {
    !storage[nums[i]] ? storage[nums[i]] = 1 : storage[nums[i]]++;
  }
  
  for (let num in storage) {
    if (storage[num] > nums.length / 2) return Number(num);
  }
};