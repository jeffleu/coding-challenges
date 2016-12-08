var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    var distances = [];
    line.split(';').forEach(distance => {
      distances.push(+distance.split(',')[1]);
    });
        
    distances.pop();
    var sorted = distances.sort((a, b) => a - b);
        
    var outputArray = [];
    for (var i = 0; i < sorted.length; i++) {
      (i === 0) ? outputArray.push(sorted[i]) : outputArray.push(sorted[i] - sorted[i - 1]);
    }
        
    var output = '';
    for (var j = 0; j < outputArray.length; j++) {
      (j === outputArray.length - 1) ? output += outputArray[j] : output += `${outputArray[j]},`;
    }
        
    console.log(output);
  }
});