var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    const lineArray = line.split('');
    var countLowercase = 0;
    var countUppercase = 0;
    lineArray.forEach(char => {
      (char === char.toLowerCase()) ? countLowercase++ : countUppercase++;
    });

    const lowercasePercent = ((countLowercase / lineArray.length) * 100).toFixed(2);
    const uppercasePercent = ((countUppercase / lineArray.length) * 100).toFixed(2);

    console.log(`lowercase: ${lowercasePercent} uppercase: ${uppercasePercent}`);
  }
});