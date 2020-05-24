/*
Runtime: 208 ms, faster than 38.71% of JavaScript online submissions for Shortest Word Distance II.
Memory Usage: 49.9 MB, less than 100.00% of JavaScript online submissions for Shortest Word Distance II.
*/

class WordDistance {
  constructor(words) {
    this.map = {};
    for (let i = 0; i < words.length; i++) {
      if (!this.map.hasOwnProperty(words[i])) this.map[words[i]] = [];
      this.map[words[i]].push(i);
    }
  }

  shortest(word1, word2) {
    const arr1 = this.map[word1];
    const arr2 = this.map[word2];
    console.log(arr1)
    let pointer1 = 0;
    let pointer2 = 0;
    let result = Infinity;
    while(pointer1 < arr1.length && pointer2 < arr2.length) {
      const diff = Math.abs(arr1[pointer1] - arr2[pointer2]);
      result = Math.min(result, diff);
      if (pointer1 === arr1.length - 1) {
        pointer2++;
      } else if (pointer2 === arr2.length - 1) {
        pointer1++;
      } else if (arr1[pointer1 + 1] < arr2[pointer2 + 1]) {
        pointer1++;
      } else if (arr1[pointer1 + 1] > arr2[pointer2 + 1]) {
        pointer2++;
      }
    }
    return result;
  }
}
