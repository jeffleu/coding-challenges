var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    const inputArray = ((line.split(' ')).reduce((str, group) => str += group, '')).split('');
    var total = 0;
        
    for (var i = 0; i < inputArray.length; i++) {
      (i % 2 === 0) ? total += +inputArray[i] * 2 : total += +inputArray[i];
    }
        
    (total % 10 === 0) ? console.log('Real') : console.log('Fake');
  }
});