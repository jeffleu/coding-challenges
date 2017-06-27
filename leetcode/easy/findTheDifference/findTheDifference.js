/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = (s, t) => {
  const storage = {};
  for (let i = 0; i < s.length; i++) {
    const currentLetter = s[i];
    !storage[currentLetter] ? storage[currentLetter] = 1 : storage[currentLetter]++;
  }
  
  for (let j = 0; j < t.length; j++) {
    const currentLetter = t[j];
    if (!storage[currentLetter]) {
      return currentLetter;
    } else {
      storage[currentLetter] === 1 ? delete storage[currentLetter] : storage[currentLetter]--;
    }
  }
};
