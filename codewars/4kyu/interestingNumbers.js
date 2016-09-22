/*
  Description:
  "7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and then promptly forgets. Who doesn't like catching those one-off interesting mileage numbers?
  Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).

  It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.

  Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.

  "Interesting" Numbers

  Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

  Any digit followed by all zeros: 100, 90000
  Every digit is the same number: 1111
  The digits are sequential, incementing†: 1234
  The digits are sequential, decrementing‡: 4321
  The digits are a palindrome: 1221 or 73837
  The digits match one of the values in the awesomePhrases array
  † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
  ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.
  So, you should expect these inputs and outputs:

  // "boring" numbers
  isInteresting(3, [1337, 256]);    // 0
  isInteresting(3236, [1337, 256]); // 0

  // progress as we near an "interesting" number
  isInteresting(11207, []); // 0
  isInteresting(11208, []); // 0
  isInteresting(11209, []); // 1
  isInteresting(11210, []); // 1
  isInteresting(11211, []); // 2

  // nearing a provided "awesome phrase"
  isInteresting(1335, [1337, 256]); // 1
  isInteresting(1336, [1337, 256]); // 1
  isInteresting(1337, [1337, 256]); // 2
  Error Checking

  A number is only interesting if it is greater than 99!
  Input will always be an integer greater than 0, and less than 1,000,000,000.
  The awesomePhrases array will always be provided, and will always be an array, but may be empty. (Not everyone thinks numbers spell funny words...)
  You should only ever output 0, 1, or 2.
*/

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