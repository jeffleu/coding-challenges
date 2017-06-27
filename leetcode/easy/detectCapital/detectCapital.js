/**
 * @param {string} word
 * @return {boolean}
 */
const isCap = letter => /[A-Z]/.test(letter);

const detectCapitalUse = word => {
  if (word.toUpperCase() === word || word.toLowerCase() === word) return true;
  
  for (let i = 0; i < word.length; i++) {
    if (i !== 0 && isCap(word[i])) return false;
  }
  
  return true;
};
