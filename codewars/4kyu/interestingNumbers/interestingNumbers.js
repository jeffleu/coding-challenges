function followedByZeros(num) {
  let sliced = num.toString().slice(1).split('').map(n => Number(n));

  return sliced.reduce((zeros, n) => {
    return (zeros === false) ? false : (n === 0) ? true : false;
  }, true);
}

function sameNumber(num) {
  let split = num.toString().split('').map(n => Number(n));
  
  return split.reduce((numbersSame, currentNumber) => {
    return (numbersSame === false) ? false : (currentNumber === split[0]) ? true : false;
  }, true);
}

function incrementing(num) {
  let split = num.toString().split('').map(n => Number(n));
  let result = true;
  
  for (let i = 0; i < split.length; i++) {
    let current = split[i];
    let next = split[i + 1];

    if (i !== split.length - 1) {
      if (current === 9) {
        if (next !== 0) {
          return false;
        } else if (next === 0) {
          result = true;
        }
      } else if ((current === 0 && next === 1) || (current + 1 !== next)) {
        return false;
      }
    }
  }
  
  return result;
}

function decrementing(num) {
  let split = num.toString().split('').map(n => Number(n));
  let result = true;
  
  for (let i = split.length - 1; i >= 0; i--) {
    let current = split[i];
    let previous = split[i - 1];
    
    if (i !== 0) {
      if (current === 0) {
        if (previous !== 1) {
          return false;
        } else if (previous === 1) {
          result = true;
        }
      } else if (current + 1 !== previous) {
        return false;
      }
    }
  }
  
  return result;
}

function palindrome(num) {
  let reversed = Number(num.toString().split('').reverse().join(''));
  
  return (reversed === num) ? true : false;
}

function isInteresting(number, awesomePhrases) {
  let warning = awesomePhrases.map(num => num - 1).concat(awesomePhrases.map(num => num - 2));
  
  if (number < 98) {
    return 0;
  }
  
  // Check number against awesomePhrases
  if (warning.indexOf(number) !== -1) {
    return 1;
  } else if (awesomePhrases.indexOf(number) !== -1) {
    return 2;
  }
  
  // Check number against other interesting numbers
  if (sameNumber(number) && number > 99) {
    return 2;
  } else if (sameNumber(number + 1) || sameNumber(number + 2)) {
    return 1;
  }
  
  if (followedByZeros(number + 1) || followedByZeros(number + 2)) {
    return 1;
  } else if (followedByZeros(number) && number > 99) {
    return 2;
  }
    
  if (incrementing(number + 1) || incrementing(number + 2)) {
    return 1;
  } else if (incrementing(number) && number > 99) {
    return 2;
  }
  
  if (decrementing(number + 1) || decrementing(number + 2)) {
    return 1;
  } else if (decrementing(number) && number > 99) {
    return 2;
  }
  
  if (palindrome(number + 1) || palindrome(number + 2)) {
    return 1;
  } else if (palindrome(number) && number > 99) {
    return 2;
  }
  
  return 0;
}