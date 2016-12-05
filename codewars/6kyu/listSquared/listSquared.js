function getSumOfSquaredDivisors(n) {
  if (n === 1) { return 1; }
  
  let divisors = [];
  
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) { divisors.push(i); }
  }

  return divisors.map(n => n * n).reduce((total, n) => total += n, 0);
}

function listSquared(m, n) {
  let results = [];

  for (let i = m; i <= n; i++) {
    if (Math.sqrt(getSumOfSquaredDivisors(i)) % 1 === 0) {
      results.push([i, getSumOfSquaredDivisors(i)]);
    }
  }
  
  return results;
}