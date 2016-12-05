function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays === null || arrayOfArrays.length === 0 || arrayOfArrays.includes(null)) { return 0; }
  
  let arrayLengths = arrayOfArrays.map(n => n.length).sort((a, b) => a - b);

  if (arrayLengths.includes(0)) { return 0; }

  for (let i = arrayLengths[0]; i <= arrayLengths[arrayLengths.length - 1]; i++) {
    if (arrayLengths.indexOf(i) === -1) { return i; } 
  }
}