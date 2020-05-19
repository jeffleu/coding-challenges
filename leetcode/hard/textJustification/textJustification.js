/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */

/*
Runtime: 68 ms, faster than 15.04% of JavaScript online submissions for Text Justification.
Memory Usage: 33.8 MB, less than 80.00% of JavaScript online submissions for Text Justification.
*/

const fullJustify = (words, maxWidth) => {
  const res = [[]];
  res[0].letters = 0;
  for (let word of words) {
    let row = res[res.length - 1];
    if (row.length && row.letters + row.length + word.length > maxWidth) {
      res.push([]);
      row = res[res.length - 1];
      row.letters = 0;
    }
    row.push(word);
    row.letters += word.length;
  }

  for (let r = 0; r < res.length; r++) {
    const row = res[r];
    if (row.length === 1 || r === res.length - 1) {
      res[r] = row.join(' ') + ' '.repeat(maxWidth - row.letters - row.length + 1);
      continue;
    }
    let line = row[0];
    const spaces = maxWidth - row.letters;
    const minSpaces = ' '.repeat(Math.floor(spaces / (row.length - 1)));
    const addSpace = spaces % (row.length - 1);
    for (let w = 1; w < row.length; w++) {
      line += minSpaces + (w <= addSpace ? ' ' : '') + row[w];
    }
    res[r] = line;
  }
  return res;
};
