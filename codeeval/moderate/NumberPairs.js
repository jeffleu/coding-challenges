var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var numbers = ((line.split(';')[0]).split(',')).map(Number);
    var equals = Number(line.split(';')[1]);
        
    // find pairs that equal x
    var pairs = [];

    for (var i = 0; i < numbers.length; i++) {
      for (var j = 0; j < numbers.length; j++) {
        if (i !== j) {
          if (numbers[i] + numbers[j] === equals) {
            pairs.push([numbers[i], numbers[j]]);
          }
        }
      }
    }
    
    // grab first half of pairs array (second half are duplicates in reverse)
    var outputArray = [];
    for (var x = 0; x < (pairs.length/2); x++) {
      outputArray.push(pairs[x]);
    }
    
    // generate output string
    var result = '';
        
    for (var y = 0; y < outputArray.length; y++) {
      for (var z = 0; z < outputArray[y].length; z++) {
        if (z === 0) {
          result += outputArray[y][z] + ',';
        } else if (y === outputArray.length - 1) {
          result += outputArray[y][z];
        } else {
          result += outputArray[y][z] + ';';
        }
      }
    }
        
    if (result.length > 0) {
      console.log(result);
    } else {
      console.log('NULL');
    }
    
  }
});