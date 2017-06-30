/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = nums => {
  for (let i = 0; i < nums.length; i++) {
    const indexOfFirstZero = nums.indexOf(0);

    if (nums[i] !== 0 && indexOfFirstZero !== -1 && indexOfFirstZero < i) {
      [nums[i], nums[indexOfFirstZero]] = [nums[indexOfFirstZero], nums[i]];
    }
  }
};
