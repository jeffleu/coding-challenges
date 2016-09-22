var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var inputArray = line.split(' ');
    var outputArray = [];
        
    inputArray.forEach(function(word) {
      var num1 = word[0];
      var num2 = word[word.length - 1];
      var flipped = '';
          
      flipped += word[0] = num2;
      flipped += word.slice(1, word.length - 1);
      flipped += word[word.length - 1] = num1;
          
      outputArray.push(flipped);
    });
        
    var output = '';
        
    outputArray.forEach(function(word) {
      output += word + ' ';
    });
        
    console.log(output.trim());
  }
});