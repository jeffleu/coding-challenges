/**
 * @param {number[]} ages
 * @return {number}
 */

/*
Runtime: 80 ms, faster than 50.62% of JavaScript online submissions for Friends Of Appropriate Ages.
Memory Usage: 38.8 MB, less than 33.33% of JavaScript online submissions for Friends Of Appropriate Ages.
*/

const numFriendRequests = ages => {
  const freq = new Array(121).fill(0);
  for (let i = 0; i < ages.length; i++) freq[ages[i]]++;

  let result = 0;
  for (let i = 0; i < freq.length; i++) {
    for (let j = 0; j < freq.length; j++) {
      if (willFriend(i, j)) {
        result += freq[i] * freq[j];
        if (i === j) result -= freq[i];
      }
    }
  }
  return result;
};

const willFriend = (B, A) => B <= 0.5 * A + 7 || B > A ? false : true;
