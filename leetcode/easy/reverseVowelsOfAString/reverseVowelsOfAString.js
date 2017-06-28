/**
 * @param {string} s
 * @return {string}
 */
const isVowel = letter => /[aeiou]/i.test(letter);

const reverseVowels = s => {
  s = s.split('');
  let pointer1 = 0;
  let pointer2 = s.length - 1;
  
  while(pointer1 <= pointer2) {
    if (!isVowel(s[pointer1]) && !isVowel(s[pointer2])) {
      pointer1++;
      pointer2--;
    } else if (isVowel(s[pointer1]) && !isVowel(s[pointer2])) {
      pointer2--;
    } else if (!isVowel(s[pointer1]) && isVowel(s[pointer2])) {
      pointer1++;
    } else if (isVowel(s[pointer1]) && isVowel(s[pointer2])) {
      [s[pointer1], s[pointer2]] = [s[pointer2], s[pointer1]];
      pointer1++;
      pointer2--;
    }
  }
  
  return s.join('');
};
