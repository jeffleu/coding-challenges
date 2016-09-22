var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    line = line.split(' ').map(Number);

    var output = '';
    var count = 0;

    for (var i = 0; i < line.length; i++) {
	  count++;
	
 	  if (line[i] !== line[i + 1]) {
		output += count + ' ' + line[i] + ' ';
		count = 0;
	  }

    }

    console.log(output);
   
  }
});