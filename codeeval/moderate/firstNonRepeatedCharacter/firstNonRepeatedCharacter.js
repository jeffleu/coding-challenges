var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var inputObject = line.split('').reduce((obj, value) => {
      (!obj[value]) ? obj[value] = 1 : obj[value]++;
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