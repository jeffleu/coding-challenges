var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    var inputArray = line.split(';');
    var distances = [];
    inputArray.forEach(function(distance) {
      distances.push(Number(distance.split(',')[1])); // 5453
    });
        
    distances.pop();
    var sorted = distances.sort(function(a, b) {
      return a - b;
    });
        
    var outputArray = [];
        
    for (var i = 0; i < sorted.length; i++) {
      if (i === 0) {
        outputArray.push(sorted[i]);
      } else {
        outputArray.push(sorted[i] - sorted[i - 1]);
      }
    }
        
    var output = '';
    for (var j = 0; j < outputArray.length; j++) {
      if (j === outputArray.length - 1) {
        output += outputArray[j];
      } else {
        output += outputArray[j] + ',';
      }
    }
        
    console.log(output);
  }
});