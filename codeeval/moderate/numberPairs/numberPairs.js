var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var numbers = line.split(';')[0].split(',').map(Number);
    var equals = +line.split(';')[1];
        
    // Find pairs that equal x
    var pairs = [];
    for (var i = 0; i < numbers.length; i++) {
      for (var j = 0; j < numbers.length; j++) {
        if (i !== j && numbers[i] + numbers[j] === equals) {
          pairs.push([numbers[i], numbers[j]]);
        }
      }
    }
    
    // Grab first half of pairs array (second half are duplicates in reverse)
    var outputArray = [];
    for (var x = 0; x < (pairs.length/2); x++) {
      outputArray.push(pairs[x]);
    }
    
    // Generate output string
    var output = '';
        
    for (var y = 0; y < outputArray.length; y++) {
      for (var z = 0; z < outputArray[y].length; z++) {
        if (z === 0) {
          output += outputArray[y][z] + ',';
        } else if (y === outputArray.length - 1) {
          output += outputArray[y][z];
        } else {
          output += outputArray[y][z] + ';';
        }
      }
    }
        
    (output.length > 0) ? console.log(output) : console.log('NULL');
  }
});