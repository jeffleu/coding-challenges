/**
 * @param {string[]} words
 * @return {string[]}
 */
const keyboardRows = {
  q: 1,
  w: 1,
  e: 1,
  r: 1,
  t: 1,
  y: 1,
  u: 1,
  i: 1,
  o: 1,
  p: 1,
  a: 2,
  s: 2,
  d: 2,
  f: 2,
  g: 2,
  h: 2,
  j: 2,
  k: 2,
  l: 2,
  z: 3,
  x: 3,
  c: 3,
  v: 3,
  b: 3,
  n: 3,
  m: 3
};

const findWords = words => {
  return words.filter(word => {
    word = word.toLowerCase();
    let currentRow;
    
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      const row = keyboardRows[letter];
      
      if (currentRow === undefined) {
        currentRow = row;
      } else if (currentRow !== row) {
        return false;
      }
    }
    
    return true;
  });
};
