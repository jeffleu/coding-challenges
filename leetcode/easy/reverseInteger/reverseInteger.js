/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  if (x < 10 && x > -10) return x;
  const isNegative = x < 0;
  let result;
  
  if (!isNegative) {
    result = Number(`${x}`.split('').reverse().join(''));
  } else {
    x *= -1;
    result = Number(`${x}`.split('').reverse().join('')) * -1;
  }
  
  if (result > 2147483648 || result < -2147483648) return 0;
  return result;
};
