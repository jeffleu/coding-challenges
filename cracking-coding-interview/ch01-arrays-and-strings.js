/************************************************************************
  
  1.1: IS UNIQUE
  Implement an algorithm to determine if a string has all
  unique characters. What if you cannot use additional data structures?

  Hints: #44, #117, #132

************************************************************************/

const isUnique = (str) => {
  let letters = str.split(' ').join('').toLowerCase().split('').sort();
  
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i + 1]) { return false }
  }
  
  return true;
};

isUnique('Elisa'); // true
isUnique('Jeff'); // false

/************************************************************************
  
  1.2: CHECK PERMUTATIONS
  Given two strings, write a method to decide if one 
  is a permutation of the other.

  Hints: #1, #84, #122, #131

************************************************************************/

const permutations = (str1, str2) => {
  let combos = [];
  
  const findCombo = (currentCombo, indexesUsed) => {
    currentCombo = currentCombo || '';
    indexesUsed = indexesUsed || [];
    
    // Base case
    if (currentCombo.length === str2.length) {
      combos.push(currentCombo);
      return;
    }
    
    // Recursive case
    for (let i = 0; i < str1.length; i++) {
      if (!indexesUsed.includes(i)) {
        findCombo(currentCombo + str1[i], indexesUsed.concat(i));
      }
    }
  };
  
  findCombo();
  
  return combos.includes(str2);
};

permutations('abcd', 'bad'); // true
permutations('abcd', 'cat'); // false

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

urlify('Mr John Smith'); // 'Mr%20John%20Smith'

/************************************************************************
  
  1.4: PALINDROME PERMUTATION
  Given a string, write a function to check if 
  it is a permutation of a palindrome. A palindrome is a word or phrase 
  that is the same forwards and backwards. A permutation is a 
  rearrangement of letters. The palindrome does not need to be limited 
  to just dictionary words.

  Input: 'Tact Coa'
  Output: true (permutations: "taco cat", "atco eta", etc.)

  Hints: #106, #121, #134, #136

************************************************************************/

const permutationOfPalindrome = (str) => {
  str = str.split(' ').join('').toLowerCase();
  const combos = [];
  
  const findCombos = (currentCombo, indexesUsed) => {
    currentCombo = currentCombo || '';
    indexesUsed = indexesUsed || [];
    
    // Base case
    if (currentCombo.length === str.length) {
      combos.push(currentCombo);
      return;
    }
    
    // Recursive case
    for (let i = 0; i < str.length; i++) {
      if (!indexesUsed.includes(i)) {
        findCombos(currentCombo + str[i], indexesUsed.concat(i));
      }
    }
  };
  
  findCombos();
  
  return combos.reduce((isPalindrome, combo) => {
    const reversed = combo.split('').reverse().join('');
    return (isPalindrome === true || combo === reversed) ? true : false;
  }, false);
};

permutationOfPalindrome('Tact Coa'); // true
permutationOfPalindrome('Tact CoaZ'); // false

/************************************************************************
  
  1.5: ONE AWAY
  There are 3 types of edits that can be performed on strings:
  insert, remove or replace a character. Given two strings, write a 
  function to check if they were one edit (or zero edits) away.

  EXAMPLE
  pale, ple -> true
  pales, pale -> true
  pale, bale -> true
  pale, bake -> false

  Hints: #23, #97, #130

************************************************************************/



/************************************************************************
  
  1.6: STRING COMPRESSION
  Implement a method to perform basic string 
  compression using the counts of repeated characters. If the
  "compressed" string would not become smaller than the original string,
  your method should return the original string. You can assume the
  string has only uppercase and lowercase letters.

  Input: 'aabcccccaaa'
  Output: 'a2b1c5a3'

  Hints: #92, #110

************************************************************************/



/************************************************************************
  
  1.7: ROTATE MATRIX
  Given an image represented by an NxN matrix, where each
  pixel in the image is 4 bytes, write a method to rotate the image by
  90 degrees. Can you do this in place?
  
  Hints: #51, #100

************************************************************************/



/************************************************************************
  
  1.8: ZERO MATRIX
  Write an algorithm such that if an element in an MxN matrix is 0, its 
  entire row and column are set to 0.

  Hints: #17, #74, #102

************************************************************************/



/************************************************************************
  
  1.9: STRING ROTATION
  Assume you have a method isSubstring which checks if one word is a
  substring of another. Given two strings, sl and s2, write code to 
  check if s2 is a rotation of sl using only one call to isSubstring 
  (e.g., "waterbottle" is a rotation of"erbottlewat").

  Hints: #34, #88, #104

************************************************************************/