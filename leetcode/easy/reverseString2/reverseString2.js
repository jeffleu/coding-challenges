const reverse = str => str.split('').reverse().join('');

const reverseStr = (s, k) => {
  let currentStr = '';
  let currentCount = 0;
  let reverseSection = true;
  let result = '';

  for (let i = 0; i < s.length; i++) {
    const currentLetter = s[i];
    currentCount++;
    currentStr += currentLetter;

    if (currentCount === k || i === s.length - 1) {
      result += reverseSection ? reverse(currentStr) : currentStr;
      reverseSection = !reverseSection;
      currentCount = 0;
      currentStr = '';
    }
  }

  return result;
};
