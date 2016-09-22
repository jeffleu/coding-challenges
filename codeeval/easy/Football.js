var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var teams = {};

    var country = 0;
    var inputArray = (line.split(' | ')).forEach(function(arr) {
      country++;
      (arr.split(' ')).forEach(function(team) {
        if (!teams[team]) {
          teams[team] = country.toString();
        } else {
          teams[team] += ',' + country;
        }
      });
    });
        
    var output = '';
    for (var key in teams) {
      output += key + ':' + teams[key] + '; ';
    }
        
    console.log(output.trim());
  }
});