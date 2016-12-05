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