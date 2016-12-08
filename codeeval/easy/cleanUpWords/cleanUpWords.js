var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    const cleanUpWords = (str) => {
      var output = '';
      
      for (var i = 0; i < str.length; i++) {
        if (/^[A-Z]$/i.test(str[i])) {
          (!/^[A-Z]$/i.test(str[i + 1])) ? output += `${str[i]} ` : output += str[i]; 
        }
      }
      
      console.log(output.toLowerCase());
    };

    cleanUpWords(line);
  }
});