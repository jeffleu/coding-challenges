const { data } = require('./inputData');

const getChecksum = ids => {
  ids = ids.split('\n');
  let two = 0;
  let three = 0;

  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    const letterCount = {};

    for (let j = 0; j < id.length; j++) {
      const letter = id[j];
      letterCount[letter] = !letterCount.hasOwnProperty(letter) ? 1 : letterCount[letter] + 1;
    }

    let twoAdded = false;
    let threeAdded = false;

    for (let key in letterCount) {
      const count = letterCount[key];
      if (count === 2 && !twoAdded) {
        two++;
        twoAdded = true;
      } else if (count === 3 && !threeAdded) {
        three++;
        threeAdded = true;
      }
    }
  }

  return two * three;
};

const getCorrectBoxLetters = ids => {
  ids = ids.split('\n');
  
  for (let i = 0; i < ids.length - 1; i++) {
    const currentId = ids[i];

    for (let j = i + 1; j < ids.length; j++) {
      const nextId = ids[j];
      let differCount = 0;
      let differIndex;

      for (let letterIndex = 0; letterIndex < currentId.length; letterIndex++) {
        if (differCount < 2 && currentId[letterIndex] !== nextId[letterIndex]) {
          differCount++;
          differIndex = letterIndex;
        }
      }

      if (differCount === 1) return currentId.slice(0, differIndex) + currentId.slice(differIndex + 1);
    }
  }
};

console.log(`Part 1: ${getChecksum(data)}`);
console.log(`Part 2: ${getCorrectBoxLetters(data)}`);
