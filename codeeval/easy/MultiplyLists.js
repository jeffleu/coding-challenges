var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var list1 = (line.split(' | ')[0]).split(' ');
    var list2 = (line.split(' | ')[1]).split(' ');
    var output = '';
        
    for (var i = 0; i < list1.length; i++) {
      output += (list1[i] * list2[i]) + ' ';
    }
        
    console.log(output);
  }
});