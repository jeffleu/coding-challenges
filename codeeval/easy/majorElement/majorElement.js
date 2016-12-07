var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var inputArray = line.split(',');

    var myObj = inputArray.reduce(function(obj, num) {
      if (!obj[num]) {
        obj[num] = 1;
      } else {
        obj[num]++;
      }
          
      return obj;
    }, {});
        
    var findElement = function() {
      var output = 'None';
          
      for (var key in myObj) {
        if (myObj[key] > inputArray.length / 2) {
          output = Number(key);
          break;
        }
      }
      
      return output;
    };
        
    console.log(findElement());
  }
});