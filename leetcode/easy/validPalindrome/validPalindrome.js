/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = s => {
  if (s.length <= 1) return true;

  let str = '';
  for (let i = 0; i < s.length; i++) {
    if (/[0-9a-z]/i.test(s[i])) str += s[i].toLowerCase();
  }
  const reverse = str.split('').reverse().join('');
  return str === reverse;
};
