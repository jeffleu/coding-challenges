var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    const scrambled = (line.split(';')[0]).split(' ');
    const numbers = ((line.split(';')[1]).split(' ')).map(Number);
    
    for (var i = 1; i <= scrambled.length; i++) {
      if (!numbers.includes(i)) {
        numbers.push(i);
      }
    }
        
    const outputArray = [];
    for (var i = 0; i < scrambled.length; i++) {
      outputArray[numbers[i]] = scrambled[i];
    }
   
    console.log(outputArray.join(' ').trim());
  }
});