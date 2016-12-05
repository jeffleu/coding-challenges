function sum(array) {
  return array.reduce((total, n) => total += n, 0);
}

function chooseBestSum(t, k, ls) {
  let result = 0;
  
  const getSum = (distances, index) => {
    distances = distances || [];
    index = index || 0;
    
    // Base case
    if (distances.length === k) {
      if (sum(distances) > result && sum(distances) <= t) {
        result = sum(distances);
      }
      return;
    }
    
    // Recursive case
    for (let i = index; i < ls.length; i++) {
      getSum(distances.concat(ls[i]), i + 1);
    }
  };
  
  getSum();
  
  return (result === 0) ? null : result;
}