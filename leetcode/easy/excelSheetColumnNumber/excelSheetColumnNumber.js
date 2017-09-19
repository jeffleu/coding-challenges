/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = s => {
  let result = 0;
    
  for (let i = 0; i < s.length; i++) {
    result = result * 26 + (s.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
  }
    
  return result;
};
