var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    const teams = {};

    var country = 0;
    (line.split(' | ')).forEach(arr => {
      country++;
      arr.split(' ').forEach(team => {
        (!teams[team]) ? teams[team] = country.toString() : teams[team] += `,${country}`;
      });
    });
        
    var output = '';
    for (var key in teams) {
      output += `${key}:${teams[key]}; `;
    }
        
    console.log(output.trim());
  }
});