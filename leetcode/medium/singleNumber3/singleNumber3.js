/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = (nums) => {
  const storage = {};
  
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    
    if (!storage.hasOwnProperty(n)) {
      storage[n] = 1;
    } else {
      delete storage[n];
    }
  }
  
  return Object.keys(storage).map(Number);
};
