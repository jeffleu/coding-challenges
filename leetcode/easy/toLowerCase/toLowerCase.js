/**
 * @param {string} str
 * @return {string}
 */
const toLowerCase = str => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    result += 65 <= charCode && charCode <= 90 ? String.fromCharCode(charCode + 32) : str[i];
  }

  return result;
};
