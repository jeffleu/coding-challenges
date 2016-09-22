var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var iterations = 0;
    
    // function to reverse original string and return it
    var reverse = function() {
      var backwards = '';
          
      for (var i = line.length - 1; i >= 0; i--) {
        backwards += line[i];
      }
          
      return backwards;
    };
    
    // updates original number with original number + reversed number    
    var add = function() {
      line = (Number(line) + Number(reverse())).toString();
    };
    
    // while original number and reversed are not equal, run add() until they are equal
    do {
      add();
      iterations++;
    } while (line !== reverse());
        
    console.log(iterations, Number(line));
  }
});