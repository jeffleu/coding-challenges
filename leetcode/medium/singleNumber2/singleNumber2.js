/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
    const obj = {};
    
    nums.forEach(num => {
        (!obj[num]) ? obj[num] = 1 : obj[num]++;
    });
    
    for (let key in obj) {
        if (obj[key] === 1) return Number(key);
    }
};
