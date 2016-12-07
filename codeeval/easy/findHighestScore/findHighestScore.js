var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    var playerScores = [];
    line.split(' | ').forEach(function(n) {
	  playerScores.push(n.split(' ').map(Number));
    });

    var gameScores = [];
    var numGames = playerScores[0].length;
    for (var i = 0; i < numGames; i++) {
	  gameScores.push([]);
    }

    playerScores.forEach(function(player) {
	  for (var j = 0; j < player.length; j++) {
		gameScores[j].push(player[j]);
	  }
    });

    var highScores = '';

    gameScores.forEach(function(game) {
	  var highScore = game.reduce(function(max, num) {
		if (max > num) { return max; } 
		else if (max === num) { return max; } 
		else { return num; }
	  });
	
	  highScores += highScore + ' ';
    });

    console.log(highScores.trim());      
  }
});