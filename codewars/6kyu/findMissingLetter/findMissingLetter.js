const findMissingLetter = (arr) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let missingLetter;
  
  for (let i = 0; i < arr.length - 1; i++) {
    const alphabetIndex = alphabet.indexOf(arr[i]);
    const shouldBeNext = alphabet[alphabetIndex + 1];
    
    if (arr[i + 1] !== shouldBeNext) {
      missingLetter = shouldBeNext;
    }
  }
  
  return missingLetter;
};
