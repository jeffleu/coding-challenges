/**
 * @param {string[]} strings
 * @return {string[][]}
 */

/*
Runtime: 64 ms, faster than 76.79% of JavaScript online submissions for Group Shifted Strings.
Memory Usage: 38.3 MB, less than 100.00% of JavaScript online submissions for Group Shifted Strings.
*/

const groupStrings = strings => {
  const map = {}; // Stores combinations
  const aCode = 'a'.charCodeAt(0); // 'a' charCode (97)
  const zCode = 'z'.charCodeAt(0); // 'z' charCode (122)

  for (let i = 0; i < strings.length; i++) { // Loop through strings
    const str = strings[i];
    let key = ''; // key will be a property in map with value as an array to store combinations
    while(key.length !== str.length) { // While key isn't finished being constructed
      const steps = str.charCodeAt(0) - aCode; // Steps for first char to reach 'a'
      for (let j = 0; j < str.length; j++) { // Loop through string
        let charCode = str.charCodeAt(j) - steps; // Get new charCode by subtracting steps
        if (charCode < aCode) charCode = zCode + 1 - (aCode - charCode); // If we go past 'a', move to end of alphabet
        key += String.fromCharCode(charCode); // Add current character to key
      }
    }
    if (!map.hasOwnProperty(key)) map[key] = []; // If map doesn't have key property, add it and set value to empty array
    map[key].push(str); // Add current string to array
  }

  const result = [];
  for (let key in map) result.push(map[key]); // Loop through map and push all arrays to result
  return result;
};
