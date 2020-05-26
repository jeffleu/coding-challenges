/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

/*
Runtime: 80 ms, faster than 17.31% of JavaScript online submissions for Shortest Word Distance.
Memory Usage: 39.6 MB, less than 33.33% of JavaScript online submissions for Shortest Word Distance.
*/

const shortestDistance = (words, word1, word2) => {
  const map = words.reduce((output, word, index) => {
    if (!output.hasOwnProperty(word)) output[word] = [];
    output[word].push(index);
    return output;
  }, {});

  const arr1 = map[word1];
  const arr2 = map[word2];
  let pointer1 = 0;
  let pointer2 = 0;
  let result = Infinity;
  while(pointer1 < arr1.length && pointer2 < arr2.length) {
    const diff = Math.abs(arr1[pointer1] - arr2[pointer2]);
    result = Math.min(result, diff);
    if (pointer1 === arr1.length - 1 || arr1[pointer1 + 1] > arr2[pointer2 + 1]) {
      pointer2++;
    } else if (pointer2 === arr2.length - 1 || arr1[pointer1 + 1] < arr2[pointer2 + 1]) {
      pointer1++;
    }
  }

  return result;
};
