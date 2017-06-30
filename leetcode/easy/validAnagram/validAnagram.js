/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  
  const letterCount = {string1: {}, string2: {}};
  for (let i = 0; i < str1.length; i++) {
    !letterCount['string1'][str1[i]] ? letterCount['string1'][str1[i]] = 1 : letterCount['string1'][str1[i]]++;
    !letterCount['string2'][str2[i]] ? letterCount['string2'][str2[i]] = 1 : letterCount['string2'][str2[i]]++;
  }
  
  for (let key in letterCount['string1']) {
    if (!letterCount['string2'][key] || letterCount['string1'][key] !== letterCount['string2'][key]) {
      return false;
    }
  }
  
  return true;
};
