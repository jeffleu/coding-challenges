var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var array = line.split(', ');
    var kids = {};

    array.forEach(function(prop) {
      var propValue = prop.split(": "); // ['Vampires', 3];
      kids[propValue[0]] = propValue[1];
    });

    var vampiresGet = 3 * kids['Vampires'];
    var zombiesGet = 4 * kids['Zombies'];
    var witchesGet = 5 * kids['Witches'];
    var numKids = Number(kids['Vampires']) + Number(kids['Zombies']) + Number(kids['Witches']   );

    var totalCandyPerKid = Math.floor(((vampiresGet + zombiesGet + witchesGet) * kids['Houses']) / numKids);

    console.log(totalCandyPerKid);
  }
});
