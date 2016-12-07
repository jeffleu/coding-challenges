var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    if (line < 0 || line > 100) {
      console.log('This program is for humans');
    } else if (line === 0 || line === 1 || line === 2) {
      console.log('Still in Mama\'s arms');
    } else if (line <= 4) {
      console.log('Preschool Maniac');
    } else if (line <= 11) {
      console.log('Elementary school');
    } else if (line <= 14) {
      console.log('Middle school');
    } else if (line <= 18) {
      console.log('High school');
    } else if (line <= 22) {
      console.log('College');
    } else if (line <= 65) {
      console.log('Working for the man');
    } else if (line <= 100) {
      console.log('The Golden Years');
    } 
  }
});
