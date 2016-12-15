var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    const str1 = line.split(' | ')[1];
    const str2 = line.split(' | ')[0];
    var count = 0;

    for (var i = 0; i < str1.length; i++) {
      if (str2[i] !== str1[i]) {
        count++;
      }
    }

    if (count === 0) {
      console.log('Done');
    } else if (count <= 2) {
      console.log('Low');
    } else if (count <= 4) {
      console.log('Medium');
    } else if (count <= 6) {
      console.log('High');
    } else {
      console.log('Critical');
    }
  }
});
