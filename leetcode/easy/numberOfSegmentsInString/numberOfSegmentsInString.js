/**
 * @param {string} s
 * @return {number}
 */
const countSegments = (s) => {
  let result = 0;
  
  for (let i = 0; i < s.length; i++) {
    if ((s[i] === ' ' && s[i - 1] !== ' ' && s[i - 1] !== undefined) || (i === s.length - 1 && s[i] !== ' ')) result++;
  }
  
  return result;
};
