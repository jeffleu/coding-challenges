/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = s => {
  const words = s.split(' ');
  return words.map(word => word.split('').reverse().join('')).join(' ');
};
