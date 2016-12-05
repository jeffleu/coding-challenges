const amount = {
  penny: '$0.01',
  nickel: '$0.05',
  dime: '$0.10',
  quarter: '$0.25',
  dollar: '$1.00'
};

const changeCount = (change) => {
  let result = change.split(' ').reduce((total, n) => {
    let toAdd = amount[n];
    return total += +toAdd.slice(1);
  }, 0);
  
  return `$${result}`;
};