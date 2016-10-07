/************************************************************************
  
  Is Unique: Implement an algorithm to determine if a string has all
  unique characters. What if you cannot use additional data structures?

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