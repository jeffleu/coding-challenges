var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    const output = line.split('').reduce((str, letter, index) => {
      return (index === 0 || line[index - 1] === ' ') ? str + letter.toUpperCase() : str + letter;
    }, '');

    console.log(output);
  }
});