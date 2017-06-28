/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
const wordPattern = (pattern, str) => {
  const wordsArray = str.split(' ');
  if (pattern.length !== wordsArray.length) return false;
  const storage = {};
  const usedWords = new Set();
  
  for (let i = 0; i < pattern.length; i++) {
  	const currentLetter = pattern[i];
  	const currentWord = wordsArray[i];
  	if (!storage[currentLetter] && !usedWords.has(currentWord)) {
  		storage[currentLetter] = currentWord;
  		usedWords.add(currentWord);
  	}
  	
  	if (storage[currentLetter] !== currentWord) return false;
  }
  
  return true;
};
