const addDigits = function(num) {
  let output = num;
  
  let sum = function() {
    let arr = output.toString().split('').map(Number);
    output = arr.reduce((memo, val) => memo + val);
  };
  
  while (output >= 10) {
    sum();
  }
  
  return output;
};