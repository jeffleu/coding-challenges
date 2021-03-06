/************************************************************************
  
  1.1: IS UNIQUE
  Implement an algorithm to determine if a string has all
  unique characters. What if you cannot use additional data structures?

  Hints: #44, #117, #132

************************************************************************/

const isUnique = (str) => {
  if (/[A-Z]/.test(str)) str = str.toLowerCase();
  if (/[ ]/.test(str)) str = str.split(' ').join('');
  str = str.split('').sort();
	
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const nextChar = str[i + 1];
    if (char === nextChar) return false;
  }
	
  return true;
};

const isUniqueAnswer1 = isUnique('Elisa');
const isUniqueAnswer2 = isUnique('Jeff');
console.log(`isUnique - expected ${isUniqueAnswer1} to equal true:`, isUniqueAnswer1 === true);
console.log(`isUnique - expected ${isUniqueAnswer2} to equal false:`, isUniqueAnswer2 === false);

/************************************************************************
  
  1.2: CHECK PERMUTATIONS
  Given two strings, write a method to decide if one 
  is a permutation of the other.

  Hints: #1, #84, #122, #131

************************************************************************/

const checkPermutations = (str1, str2) => {
  const storage = {};
  for (let i = 0; i < str1.length; i++) {
    !storage.hasOwnProperty(str1[i]) ? storage[str1[i]] = 1 : storage[str1[i]]++;
  }
  
  for (let j = 0; j < str2.length; j++) {
    const char = str2[j];
    
    if (storage[char]) {
      storage[char]--;
    } else {
      return false;
    }
  }
  
  return true;
};

const checkPermutationsAnswer1 = checkPermutations('abcd', 'bad');
const checkPermutationsAnswer2 = checkPermutations('abcd', 'cat');
console.log(`checkPermutations - expected ${checkPermutationsAnswer1} to equal true:`, checkPermutationsAnswer1 === true);
console.log(`checkPermutations - expected ${checkPermutationsAnswer2} to equal false:`, checkPermutationsAnswer2 === false);

/************************************************************************
  
  1.3: URLIFY
  Write a method to replace all spaces in a string with '%20'. 
  You may assume that the string has sufficient space at the end to hold 
  the additional characters, and that you are given the "true" length of 
  the string.

  Input: 'Mr John Smith'
  Output: 'Mr%20John%20Smith'

  Hints: #53, #118

************************************************************************/

const urlify = (str) => str.split(' ').join('%20');

const urlifyAnswer1 = urlify('Mr John Smith');
console.log(`urlify - expected '${urlifyAnswer1}' to equal 'Mr%20John%20Smith':`, urlifyAnswer1 === 'Mr%20John%20Smith');

/************************************************************************
  
  1.4: PALINDROME PERMUTATION
  Given a string, write a function to check if it is a permutation of a
  palindrome. A palindrome is a word or phrase that is the same forwards
  and backwards. A permutation is a rearrangement of letters. The
  palindrome does not need to be limited to just dictionary words.
  
  Input: 'Tact Coa'
  Output: true (permutations: "taco cat", "atco eta", etc.)
  
  Hints: #106, #121, #134, #136
  
************************************************************************/

const permutationsOfPalindrome = (str) => {
  if (/[A-Z]/.test(str)) str = str.toLowerCase();
  if (/[ ]/.test(str)) str = str.split(' ').join('');
  
  const storage = {};
  
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    !storage.hasOwnProperty(letter) ? storage[letter] = 1 : storage[letter]++;
  }
  
  let hasOddNumber = false;
  for (let key in storage) {
    const count = storage[key];
    
    if (count % 2 !== 0) {
      if (!hasOddNumber) {
        hasOddNumber = true;
      } else {
        return false;
      }
    }
  }
  
  return true;
};

const permutationsOfPalindromeAnswer1 = permutationsOfPalindrome('Tact Coa');
const permutationsOfPalindromeAnswer2 = permutationsOfPalindrome('Arc Care');
const permutationsOfPalindromeAnswer3 = permutationsOfPalindrome('Esgm Tohin');
console.log(`permutationsOfPalindrome - expected ${permutationsOfPalindromeAnswer1} to equal true:`, permutationsOfPalindromeAnswer1 === true);
console.log(`permutationsOfPalindrome - expected ${permutationsOfPalindromeAnswer2} to equal true:`, permutationsOfPalindromeAnswer2 === true);
console.log(`permutationsOfPalindrome - expected ${permutationsOfPalindromeAnswer3} to equal false:`, permutationsOfPalindromeAnswer3 === false);

/************************************************************************
  
  1.5: ONE AWAY
  There are 3 types of edits that can be performed on strings: insert,
  remove or replace a character. Given two strings, write a function to
  check if they were one edit (or zero edits) away.
  
  EXAMPLE
  pale, ple -> true
  pales, pale -> true
  pale, bale -> true
  pale, bake -> false
  
  Hints: #23, #97, #130
  
************************************************************************/

const oneAway = (str1, str2) => {
  const sorted = [str1, str2].sort((a, b) => a.length - b.length);
  const set = new Set(sorted[0].split(''));
  
  let numAway = 0;
  for (let i = 0; i < sorted[1].length; i++) {
    if (!set.has(sorted[1][i])) {
      numAway++;
    }
  }
  
  return numAway === 1;
};

const oneAwayAnswer1 = oneAway('pale', 'ple');
const oneAwayAnswer2 = oneAway('pales', 'pale');
const oneAwayAnswer3 = oneAway('pale', 'bale');
const oneAwayAnswer4 = oneAway('pale', 'bake');
const oneAwayAnswer5 = oneAway('ple', 'pale');
console.log(`oneAway - expected ${oneAwayAnswer1} to equal true:`, oneAwayAnswer1 === true);
console.log(`oneAway - expected ${oneAwayAnswer2} to equal true:`, oneAwayAnswer2 === true);
console.log(`oneAway - expected ${oneAwayAnswer3} to equal true:`, oneAwayAnswer3 === true);
console.log(`oneAway - expected ${oneAwayAnswer4} to equal false:`, oneAwayAnswer4 === false);
console.log(`oneAway - expected ${oneAwayAnswer5} to equal true:`, oneAwayAnswer5 === true);

/************************************************************************
  
  1.6: STRING COMPRESSION
  Implement a method to perform basic string compression using the counts
  of repeated characters. If the "compressed" string would not become
  smaller than the original string, your method should return the
  original string. You can assume the string has only uppercase and
  lowercase letters.
  
  Input: 'aabcccccaaa'
  Output: 'a2b1c5a3'
  
  Hints: #92, #110
  
************************************************************************/

const compressString = (str) => {
  let count = 0;
  let compressed = '';
  
  for (let i = 0; i < str.length; i++) {
    count++;
    if (str[i] !== str[i + 1]) {
      compressed += `${str[i]}${count}`;
      count = 0;
    }
  }
  
  return compressed.length < str.length ? compressed : str;
};

const compressStringAnswer1 = compressString('aabcccccaaa');
const compressStringAnswer2 = compressString('abc');
console.log(`compressString - expected '${compressStringAnswer1}' to equal 'a2b1c5a3':`, compressStringAnswer1 === 'a2b1c5a3');
console.log(`compressString - expected '${compressStringAnswer2}' to equal 'abc':`, compressStringAnswer2 === 'abc');

/************************************************************************
  
  1.7: ROTATE MATRIX
  Given an image represented by an NxN matrix, where each pixel in the
  image is 4 bytes, write a method to rotate the image by 90 degrees. Can
  you do this in place?
  
  Hints: #51, #100
  
************************************************************************/

const rotateMatrix = (matrix) => {
  const n = matrix.length;
  
  for (let x = 0; x < n; x++) {
    for (let y = x; y < n-1-x; y++) {
      [
        matrix[x][y],
        matrix[y][n-1-x],
        matrix[n-1-x][n-1-y],
        matrix[n-1-y][x], 
      ] = [
        matrix[y][n-1-x],
        matrix[n-1-x][n-1-y],
        matrix[n-1-y][x],
        matrix[x][y],
      ];
    }
  }
  
  return matrix;
};

const rotateMatrixAnswer = rotateMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]);
rotateMatrixAnswer.forEach(row => console.log(row));

/************************************************************************
  
  1.8: ZERO MATRIX
  Write an algorithm such that if an element in an MxN matrix is 0, its 
  entire row and column are set to 0.
  
  Hints: #17, #74, #102
  
************************************************************************/

const zeroMatrix = (matrix) => {
  const zeroCoordinates = [];
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c] === 0) zeroCoordinates.push([r, c]);
    }
  }
  
  while(zeroCoordinates.length) {
    const coord = zeroCoordinates.shift();
    const row = coord[0];
    const col = coord[1];
    
    // Set column to zeroes
    for (let r = 0; r < matrix.length; r++) {
      if (matrix[r][col] !== 0) matrix[r][col] = 0;
    }
    
    // Set row to zeroes
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[row][c] !== 0) matrix[row][c] = 0;
    }
  }
  
  return matrix;
};

const zeroMatrixAnswer1 = zeroMatrix([[1,2,3], [4,5,6], [7,8,0]]);
zeroMatrixAnswer1.forEach(row => console.log(row));
const zeroMatrixAnswer2 = zeroMatrix([[1,2,3,4],[5,6,0,8],[7,6,5,4]]);
zeroMatrixAnswer2.forEach(row => console.log(row));

/************************************************************************
  
  1.9: STRING ROTATION
  Assume you have a method isSubstring which checks if one word is a 
  substring of another. Given two strings, sl and s2, write code to check
  if s2 is a rotation of sl using only one call to isSubstring (e.g.,
  "waterbottle" is a rotation of"erbottlewat").
  
  Hints: #34, #88, #104
  
************************************************************************/

const stringRotation = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  
  for (let i = 1; i < str1.length; i++) {
    const left = str1.substring(0, i);
    const right = str1.substring(i);
    if (right + left === str2) return true;
  }
  
  return false;
};

const stringRotationAnswer1 = stringRotation('waterbottle', 'erbottlewat');
const stringRotationAnswer2 = stringRotation('waterbottle', 'bottlewat');
const stringRotationAnswer3 = stringRotation('something', 'thingsome');
const stringRotationAnswer4 = stringRotation('something', 'thingsom');
console.log(`expected ${stringRotationAnswer1} to equal true:`, stringRotationAnswer1 === true);
console.log(`expected ${stringRotationAnswer2} to equal false:`, stringRotationAnswer2 === false);
console.log(`expected ${stringRotationAnswer3} to equal true:`, stringRotationAnswer3 === true);
console.log(`expected ${stringRotationAnswer4} to equal false:`, stringRotationAnswer4 === false);

