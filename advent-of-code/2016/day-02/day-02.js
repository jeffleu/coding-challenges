const givenInstructions = `LLLUDRDLLULDUDLLRLUDURULDURRRRLLURLDLDDDULLDDUDLRDLRDUURRDUUDLLRUUDDLULURDLRDUUDUDRURULLLLDRULDDLRDDRDLRDDLURLDDUDLLUUDLRDDDDLULUUURRDLUUDDLULLURRRDULLUDUDRDRDDRLDLLRLRDDDRDLULLUULDLLLRRDDUURUURDLLDRRDDLRULDLLDRLLUDRRDLUUULDLURLLDDURRUULLLLLRLUDLDDLLLURRRDUDULRULULDDLLDLRDDDUULRLRDUURLURRUDDURRUUDUDLDDLDULDDDDDULRULRDLRLDLRDLDDLUDRDUUDLDUDUDLLLRLUUDRUDDDRDRURRLLLDLUULDUULRDLULLUURLDRRRLDRLUDRRURLDULULDRUDDULLLDRDLLULUDDDDRDRULDULRRRRDDRULDLRDU
DLDDRRDLLDUURRLULLLLRDRLUDURLDRRDURRRRUUDDUDRRDDDRRLDDLDDLURDLDRLUDULDUDUUDDDLLULRRLLUDULLLUULDDRDDUDUUDULURULULLDRLRUURDRDDLRRUDRUULLLLURRUDRDULDDRURRURLLLLLRLLLRLLUDUDLRDLULDUDLULLLUUDLLDDDUDUDLLRRDLRDLLLRRLRUDRDUDRURLUUURULLDDDDLLURDULURRLLLRLRRULLRRRLUUULLLLRLRDUURRDUURLLLDRDURRRULDDUDRRDLRLDLLRUDDLLUDRLLUUDRLLLLLLUDLURLLRUDRUUUULDLUDULLDDDDRLURUURDDDURRRLRLUDUUDURDDDDRRLRDLURDDLLULDRDDURLLURULUUUUURDUUULDRRLLURRRRRLDDUULLRULLDLDLDLRRRDRLDRUUD
RLDRRRURULDLUDLDUDLLDUUURRDUDDURULLRRDDULUUDRRRULRUURRRLUUULRDRUDRRLLRLURDLDRDRDLLUDRUULRUDRUDDRURLRLURRDDRRURUUDRRDDRURURUDUUUDUDRRLRDRUUURLLUUUDLRUUDDRDDDDLDRLRDUDDULDDLRLLRURLLURLDDLDLDDULLDDUUURDLRUDUUDLDURDDRUULDRDDRDDDUUUDRDRDDRRDRRDLRDRURDUDDLUUUDULLUULULULRDRUUDDURURDRRRRLUDLDUDURLDRURDLLUUUDLRRDRRURDDULULURLDUDDLUDLDDLLRLDULLULULURUURLDULUDLLUUDLDDULDRRDDUULLUDLDLLRDRDURDDURDDURLDDURUURLLRURURUDDURRDRLRLDDUUDUULRDLLURRRRULURULDUDUDDUDDRLLLDLURDUURUURLUULRRLDLULDDRLDDUURULURUDRD
URLDDRLLRRLDRLLRRURURURDDLRRRUUUURULRRUUDLUDRULLDLRUDDLULRUULDULURLLRLLUDDUDLURDRRRRLURULRURRURRULRRRULDLLDDLRLUDULUUUDDUDDRRDDDDUULRRLDRRULULRDUURRLDDRDULDURUDUDDLDLLURDDLDDRUDUUUDUUURDLDUDUUULLDLRDULRRRDLLURLDLLULRDDULULURLRLUULRLLLDDDUDLLDLURRRULRDUDDLULUDRUDDURULRLRUDDURLLURULLURDRULDUDLDULRRDLDURLUURRDDUDDUDRURUDDURRUUDURUULLLLDDRDDDDDULUUDDURRULLDRRLRRRRRDDRUUDDDURDRDRUDDUULDUDRRDRULUURLURLUDUDULDDRDULDLRUUDLLLRRLRDRDDUUULRDUDLUDLURRDUURDULDRLLDRDULDUDUULRLLDLRLDLUUDLRUULDUUULDLRLRLUULLLLRLRDUDRUUDURLDUDRRURLRUDRRLRDDLRDDLDDUDDDRLRLLRLUUURLURRRLULRLLDRLRDDRRDRL
DLLLLLLRLRDRUDLRLLRLDLRURRUURLDLDDDDDUDUULLLLRRLRRDUUDUDLULLRRDULUDLLULURLRULURUULRLURDUDLUDULULUUURLRUDULURULRURULURLRLDRRRRLUDLLDULLDDLLULUURRULRDURDUUDDDURRUDLLLLRLDLUDDULLDUDDURURURRRRULDULULUDDUUDRLRLLLDLLLUUUURUDUUDLDLLRLRDDUULLUURLDDLRRDRLULDLULRULDLDURLULUURRRUDLLRDLUDDULRULULUDDURDLUUURDUUURDUDURLUUDRLUDRULUDDRRDLUUDLLLRDDDDDDLDURDDLDRDLUUDRULLUDRDLDULLULDDRUUDRRLRURRUULLRLRDUUURRDRRDULDDULUUDDURLULRLRURLLRRR`;

const keypad1 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

const A = 'A';
const B = 'B';
const C = 'C';
const D = 'D';

const keypad2 = [
  [0,0,1,0,0],
  [0,2,3,4,0],
  [5,6,7,8,9],
  [0,A,B,C,0],
  [0,0,D,0,0]
];

const findBathroomCode = (instructions, keypad) => {
  instructions = instructions.split('\n');
  
  const currentCoordinate = (keypad.length === 3) ? [1,1] : [2,0];
  let currentNumber = keypad[currentCoordinate[0]][currentCoordinate[1]];
  const updateCurrentNumber = () => {
    currentNumber = keypad[currentCoordinate[0]][currentCoordinate[1]];
  };
  
  const move = {
    up: () => {
      if (keypad[currentCoordinate[0] - 1] && keypad[currentCoordinate[0] - 1][currentCoordinate[1]] !== 0) {
        currentCoordinate[0]--;
      }      
    },
    right: () => {
      const next = keypad[currentCoordinate[0]][currentCoordinate[1] + 1];
      if (next && next !== 0) {
        currentCoordinate[1]++;
      }
    },
    down: () => {
      if (keypad[currentCoordinate[0] + 1] && keypad[currentCoordinate[0] + 1][currentCoordinate[1]]) {
        currentCoordinate[0]++;
      }
    },
    left: () => {
      const next = keypad[currentCoordinate[0]][currentCoordinate[1] - 1];
      if (next && next !== 0) {
        currentCoordinate[1]--;
      }
    }
  };
  
  const passcode = [];
  
  instructions.forEach(line => {
    line = line.split('');
    
    line.forEach(n => {
      if (n === 'U') {
        move.up();
      } else if (n === 'R') {
        move.right();
      } else if (n === 'D') {
        move.down();
      } else if (n === 'L') {
        move.left();
      }
      updateCurrentNumber();
    });

    passcode.push(currentNumber);
  });

  return passcode.join('');
};

findBathroomCode(givenInstructions, keypad1); // 56983
findBathroomCode(givenInstructions, keypad2); // 8B8B1