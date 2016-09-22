var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line != "") {
    var lineArray = line.split(' ');
    var longestWord = lineArray.reduce(function(longest, word) {
      if (longest.length > word.length) {
        return longest;
      } else if (longest.length === word.length) {
        return longest;
      } else {
        return word;
      }
    });

    console.log(longestWord);
  }
});