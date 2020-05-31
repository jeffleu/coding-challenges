/**
 * @param {string} S
 * @return {string}
 */

/*
Runtime: 72 ms, faster than 15.77% of JavaScript online submissions for Goat Latin.
Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions for Goat Latin.
*/

const toGoatLatin = S => {
  const words = S.split(' ');
  for (let i = 0; i < words.length; i++) {
    let str = '';
    str = /[aeiou]/i.test(words[i][0]) ? words[i] : words[i].slice(1) + words[i][0];
    str += 'ma' + 'a'.repeat(i + 1);
    words[i] = str;
  }
  return words.join(' ');
};
