/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  const letters = {};
  for (let i = 0; i < magazine.length; i++) {
    const char = magazine[i];
    letters[char] = !letters.hasOwnProperty(char) ? 1 : letters[char] + 1;
  }
  
  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i];
    if (!letters.hasOwnProperty(char)) return false;
    letters[char]--;
    if (letters[char] === 0) delete letters[char];
  }
  
  return true;
};
