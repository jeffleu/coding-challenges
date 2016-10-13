/*
  Given an array of integers, every element appears twice except for one. Find that single one.

  Note:
  Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

const singleNumber = (nums) => {
  let obj = {};
  
  nums.forEach(num => {
    (!obj[num]) ? obj[num] = 1 : obj[num]++;
  });
  
  for (let key in obj) {
    if (obj[key] === 1) {
      return Number(key);
    }
  }
};