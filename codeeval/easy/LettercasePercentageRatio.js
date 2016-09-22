var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    var lineArray = line.split('');
    var countLowercase = 0;
    var countUppercase = 0;
    lineArray.forEach(function(char) {
      if (char === char.toLowerCase()) {
        countLowercase++;
      } else {
        countUppercase++;
      }
    });

    var lowercasePercent = ((countLowercase / lineArray.length) * 100).toFixed(2);
    var uppercasePercent = ((countUppercase / lineArray.length) * 100).toFixed(2);

    console.log('lowercase: ' + lowercasePercent + ' uppercase: ' + uppercasePercent);
  }
});