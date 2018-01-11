/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = (nums) => {
  let small = Infinity;
  let big = Infinity;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= small) {
      small = nums[i];
    } else if (nums[i] <= big) {
      big = nums[i];
    } else {
      return true;
    }
  }
  
  return false;
};
