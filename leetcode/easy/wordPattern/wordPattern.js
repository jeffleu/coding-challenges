/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
const wordPattern = (pattern, str) => {
  const words = str.split(' ');
  if (words.length !== pattern.length) return false;
  const storage = {};
  const usedWords = new Set();
  
  for (let i = 0; i < pattern.length; i++) {
    const letter = pattern[i];
    const word = words[i];
    
    if (!storage.hasOwnProperty(letter) && !usedWords.has(word)) {
      storage[letter] = word;
      usedWords.add(word);
    } else if (storage[letter] !== word) {
      return false;
    }
  }
  
  return true;
};
