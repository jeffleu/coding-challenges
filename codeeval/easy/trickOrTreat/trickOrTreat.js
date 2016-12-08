var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var kids = {};

    line.split(', ').forEach(prop => {
      const propValue = prop.split(": ");
      kids[propValue[0]] = propValue[1];
    });

    const vampiresGet = 3 * kids['Vampires'];
    const zombiesGet = 4 * kids['Zombies'];
    const witchesGet = 5 * kids['Witches'];
    const numKids = +kids['Vampires'] + +kids['Zombies'] + +kids['Witches'];

    var totalCandyPerKid = Math.floor(((vampiresGet + zombiesGet + witchesGet) * kids['Houses']) / numKids);
    console.log(totalCandyPerKid);
  }
});
