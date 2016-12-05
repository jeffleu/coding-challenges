const powersOfTwo = (n) => {
  let result = [];
  let squared = 1;
  
  for (let i = 0; i <= n; i++) {
    (i === 0) ? result.push(1) : result.push(squared *= 2);
  }

  return result;
}