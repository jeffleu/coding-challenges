/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = nums => {
    const obj = {};
    
    nums.forEach(num => {
        if (!obj[num]) {
            obj[num] = 1;
        } else {
            obj[num]++;
        }
    });
    
    const output = [];
    for (let key in obj) {
        if (obj[key] === 1) output.push(Number(key));
    }
    return output;
};
