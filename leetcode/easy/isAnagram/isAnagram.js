/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const sorted1 = str1.split('').sort().join('');
  const sorted2 = str2.split('').sort().join('');

  for (let i = 0; i < sorted1.length; i++) {
    if (sorted1[i] !== sorted2[i]) return false;
  }
  
  return true;
};
