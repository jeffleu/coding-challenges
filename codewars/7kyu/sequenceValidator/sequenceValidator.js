function validateSequence(x) {
  let difference = x[1] - x[0];
  
  for (let i = 0; i < x.length; i++) {
    if (i !== x.length - 1) {
      if (x[i] + difference !== x[i + 1]) {
        return false;
      }
    }
  }
  
  return true;
}