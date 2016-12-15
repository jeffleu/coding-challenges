var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    const labels = [];

    line = line.split(' ').forEach(str => {
      if (str.includes('label')) {
        labels.push(+line[i - 1].slice(0, line[i - 1].indexOf(',')));
      }
    });
  
    const total = labels.reduce((total, n) => total + n, 0);
    console.log(total);
  }
});