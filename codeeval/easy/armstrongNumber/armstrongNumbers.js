var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    const inputArray = line.split('');
    const result = inputArray.reduce((total, num) => {
      return total += Math.pow(Number(num), inputArray.length);
    }, 0);
        
    (result === Number(line)) ? console.log('True') : console.log('False');
  }
});