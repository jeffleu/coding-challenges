const getLetterCount = (str) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const letterCount = {};
  
  str.split('').forEach(char => {
    if (alphabet.includes(char)) {
      (!letterCount[char]) ? letterCount[char] = 1 : letterCount[char]++;
    }
  });
  
  return letterCount;
};

const createString = (largerString, letter, count) => {
  let output = `${largerString}:`;
  for (let i = 0; i < count; i++) { output += letter }
  return output;
};

const removeDups = (arr) => {
  const noDups = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      noDups.push(arr[i]);
    }
  }
  
  return noDups;
};

const removeCapitals = (str) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let output = '';
  
  for (let i = 0; i < str.length; i++) {
    if (!alphabet.includes(str[i])) {
      output += str[i];
    }
  }
  
  return output;
};

const mix = (s1, s2) => {
  s1 = removeCapitals(s1);
  s2 = removeCapitals(s2);
  const s1LetterCount = getLetterCount(s1);
  const s2LetterCount = getLetterCount(s2);
  let s1Count = 0;
  let s2Count = 0;

  let largest = [];
  
  // Remove letters that only show up once
  for (let letter in s1LetterCount) {
    (s1LetterCount[letter] === 1) ? delete s1LetterCount[letter] : s1Count++;
  }
  
  for (let letter in s2LetterCount) {
    (s2LetterCount[letter] === 1) ? delete s2LetterCount[letter] : s2Count++;
  }
  
  // Save all largest letter counts
  for (let letter in s1LetterCount) {
    if (!s2LetterCount[letter]) {
      largest.push(createString(1, letter, s1LetterCount[letter]));
    } else {
      if (s1LetterCount[letter] > s2LetterCount[letter]) {
        largest.push(createString(1, letter, s1LetterCount[letter]));
      } else if (s2LetterCount[letter] > s1LetterCount[letter]) {
        largest.push(createString(2, letter, s2LetterCount[letter]));
      } else {
        largest.push(createString('=', letter, s1LetterCount[letter]));
      }
    }
  }
    
  for (let letter in s2LetterCount) {
    if (!s1LetterCount[letter]) {
      largest.push(createString(2, letter, s2LetterCount[letter]));
    } else {
      if (s1LetterCount[letter] > s2LetterCount[letter]) {
        largest.push(createString(1, letter, s1LetterCount[letter]));         
      } else if (s2LetterCount[letter] > s1LetterCount[letter]) {
        largest.push(createString(2, letter, s2LetterCount[letter]));         
      } else {
        largest.push(createString('=', letter, s1LetterCount[letter]));         
      }
    }
  }
  
  const largestWithoutDups = removeDups(largest.sort());
  const separated = {};
  largestWithoutDups.sort((a,b) => b.length - a.length).forEach(str => {
    const len = str.length - 2;
    (!separated[len]) ? separated[len] = [str] : separated[len] = separated[len].concat(str);
  });
  
  let toJoin = [];
  for (let count in separated) {
    separated[count] = separated[count].sort().reverse();
    toJoin = toJoin.concat(separated[count]);
  }

  return toJoin.reverse().join('/');
};
