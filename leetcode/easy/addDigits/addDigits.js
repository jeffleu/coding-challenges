/**
 * @param {number} num
 * @return {number}
 */
const addDigits = (num) => {
  let str = num.toString();
  
  while(str.length > 1) {
    str = str.split('').map(Number).reduce((output, n) => output + n, 0).toString();
  }
  
  return Number(str);
};
