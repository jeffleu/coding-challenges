/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const shortestDistance = (words, word1, word2) => {
  if (words.length === 2) return 1;
  let prev1;
  let prev2;
  let distance = words.length;

  words.forEach((word, index) => {
    if (word === word1) {
      prev1 = index;
    } else if (word === word2) { 
      prev2 = index;
    }

    if (prev1 !== undefined && prev2 !== undefined) {
      distance = Math.min(distance, Math.abs(prev1 - prev2));
    }
  });

  return distance;
};
