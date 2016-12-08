var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var output = '';
    const longestWord = line.split(' ').reduce((longest, word) => {
      return (longest.length >= word.length) ? longest : word;
    });
        
    for (var i = 0; i < longestWord.length; i++) {
      if (i === 0) {
        output += `${longestWord[i]} `;
      } else if (i === 1) {
        output += `*${longestWord[i]} `;
      } else if (i === 2) {
        output += `**${longestWord[i]} `;
      } else if (i === 3) {
        output += `***${longestWord[i]} `;
      } else if (i === 4) {
        output += `****${longestWord[i]} `;
      } else if (i === 5) {
        output += `*****${longestWord[i]} `;
      } else if (i === 6) {
        output += `******${longestWord[i]} `;
      } else if (i === 7) {
        output += `*******${longestWord[i]} `;
      } else if (i === 8) {
        output += `********${longestWord[i]} `;
      } else if (i === 9) {
        output += `*********${longestWord[i]} `;
      } else if (i === 10) {
        output += `**********${longestWord[i]} `;
      }
    }
        
    console.log(output);
  }
});