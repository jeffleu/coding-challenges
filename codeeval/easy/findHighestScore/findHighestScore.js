var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  if (line !== "") {
    const playerScores = [];
    line.split(' | ').forEach(n => {
      playerScores.push(n.split(' ').map(Number));
    });

    const gameScores = [];
    const numGames = playerScores[0].length;
    for (var i = 0; i < numGames; i++) {
      gameScores.push([]);
    }

    playerScores.forEach(player => {
      for (var j = 0; j < player.length; j++) {
        gameScores[j].push(player[j]);
      }
    });

    var highScores = '';
    gameScores.forEach(game => {
      const highScore = game.reduce((max, num) => (max >= num) ? max : num);
      highScores += highScore + ' ';
    });

    console.log(highScores.trim());         
  }
});