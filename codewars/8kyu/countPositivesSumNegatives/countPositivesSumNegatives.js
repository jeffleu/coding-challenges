function countPositivesSumNegatives(input) {
  if (input === undefined || input === null || input.length === 0) {
    return []; 
  } 
  
  return input.reduce((results, n) => {
    (n > 0) ? results[0]++ : results[1] += n;
    return results;
  }, [0, 0]);
}