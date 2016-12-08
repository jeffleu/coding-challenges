var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    const numbers = [];
    (line.split(' : ')[0]).split(' ').forEach(n => {
      numbers.push(+n);
    });
        
    const numsToSwitch = [];
    line.split(' : ')[1].split(', ').forEach(combo => {
      numsToSwitch.push(combo.split('-'));
    });
        
    numsToSwitch.forEach(pair => {
      const num1 = numbers[pair[0]];
      const num2 = numbers[pair[1]];
      numbers[pair[0]] = num2;
      numbers[pair[1]] = num1;
    });
       
    const output = numbers.reduce((total, n) => total + `${n} `, '');
    console.log(output.trim());
  }
});