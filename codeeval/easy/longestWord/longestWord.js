var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    const longestWord = line.split(' ').reduce((longest, word) => {
      return (longest.length >= word.length) ? longest : word;
    });

    console.log(longestWord);
  }
});