function sortArray(array) {
  if (array.length === 0) { return array; }
  
  let indexOfOddNums = [];
  let oddNums = [];

  array.forEach((char, index) => {
    if (char % 2 !== 0) {
      indexOfOddNums.push(index);
      oddNums.push(char);
    }
  });
  
  oddNums = oddNums.sort((a, b) => a - b);
  indexOfOddNums.forEach(n => { array[n] = oddNums.shift() });
  return array;
}