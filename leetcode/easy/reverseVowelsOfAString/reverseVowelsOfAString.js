/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
  const arr = s.split('');
  const isVowel = /[aeiou]/i;
  let start = 0;
  let end = s.length - 1;
  
  while(start < end) {
    if (isVowel.test(arr[start]) && isVowel.test(arr[end])) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
    if (!isVowel.test(arr[start])) start++;
    if (!isVowel.test(arr[end])) end--;
  }
  
  return arr.join('');
};
