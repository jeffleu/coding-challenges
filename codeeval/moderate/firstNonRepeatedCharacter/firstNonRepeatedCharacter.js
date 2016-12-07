var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var inputObject = (line.split('')).reduce(function(obj, value) {
      if (!obj[value]) {
        obj[value] = 1;
      } else {
        obj[value]++;
      }
          
      return obj;
    }, {});
        
    for (var key in inputObject) {
      if (inputObject[key] === 1) {
        console.log(key);
        break;
      }
    }
  }
});​