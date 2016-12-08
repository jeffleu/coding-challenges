var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    const inputArray = line.split(',');

    var myObj = inputArray.reduce((obj, num) => {
      (!obj[num]) ? obj[num] = 1 : obj[num]++;
      return obj;
    }, {});
        
    var output = 'None';
    for (var key in myObj) {
      if (myObj[key] > inputArray.length / 2) {
        output = +key;
        break;
      }
    }
        
    console.log(output);
  }
});