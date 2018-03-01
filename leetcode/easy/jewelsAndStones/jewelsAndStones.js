/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = (J, S) => {
  const jewels = new Set(J.split(''));
  let result = 0;
  
  for (let i = 0; i < S.length; i++) {
    const char = S[i];
    if (jewels.has(char)) result++;
  }
  
  return result;
};
