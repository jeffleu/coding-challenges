function divisors(integer) {
  var output = [];
  
  for (var i = 2; i < integer; i++) {
    if (integer % i === 0) { output.push(i) }
  }

  return (output.length !== 0) ? output : integer + ' is prime';
}
