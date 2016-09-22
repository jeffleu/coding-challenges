var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var numbers = [];
    (line.split(' : ')[0]).split(' ').forEach(function(num) {
      numbers.push(Number(num));
    });
        
    var numsToSwitch = [];
    (line.split(' : ')[1]).split(', ').forEach(function(combo) {
      numsToSwitch.push(combo.split('-'));
    });
        
    numsToSwitch.forEach(function(pair) {
      var num1 = numbers[pair[0]];
      var num2 = numbers[pair[1]];
          
      numbers[pair[0]] = num2;
      numbers[pair[1]] = num1;
    });
        
    var output = '';
    numbers.forEach(function(number) {
      output += number + ' ';
    });
        
    console.log(output.trim());
  }
});