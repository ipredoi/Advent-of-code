let input = [
  "............#....#.............",
  "...........##....#......#..#..#",
  "......#.......#......#.........",
  "..#.#....#....#.............##.",
  "..#........####....#...#.......",
  "..##.....#.#.#..#.........#....",
  "...#.#..#..#....#..#..#........",
  "#.......#.........#....##.###..",
  "......##..#.#...#.......#.#....",
  "................##.........#.##",
  "..##..........#...#.........#.#",
  "..........#...##...............",
  "#...#......#..#.#..#...##..#...",
  "..##....#.......#......#..#....",
  "....#......#......#....#.......",
  ".........#.....#..#............",
  ".#...#.#.........#........#....",
  "#..........####.....#..........",
  "......##.....#....#..#........#",
  "#......#......#...........#....",
  "....#.........#....#...#..#..#.",
  ".#........#......#.#.....#.....",
  "..#.#.#..........#....#.......#",
  "......#.#........##....##....##",
  ".....#.#..#...#................",
  "......#......##...............#",
  "..#..##.............#...##.....",
  "......##......##..#......#.....",
  "....#.............#..##.....##.",
  "........#...............##.....",
  "..#......#.##..#...#....#...#..",
  "#......#.......#.............#.",
  ".....#....##..............#....",
  "#.#.........#....#..##....#....",
  ".#...#...#....#.#............#.",
  "...#...#.#..##.##.......##.....",
  "......#..#....##..#.#..#..#....",
  ".......##..#..#......#..#.....#",
  ".##..#......#..........#....#..",
  ".....#................#..#....#",
  "........#..#....#.......#....#.",
  "..#......#.......#......#....#.",
  "....#...#.##........##....#....",
  ".....#........#...........#....",
  "...#....##..........#..#...#.#.",
  "...#.......#......#...##...#...",
  ".#.....#........#........#.#..#",
  ".#.........#..##.....#.......#.",
  "....#..#....#.......#......#...",
  ".#.#...##..##................##",
  "......#.#...#.......#....#....#",
  "........#....#..#.....#......#.",
  ".......#..........#......#.....",
  "...............................",
  "..#..#####..#..#..........#.#..",
  ".....#....##................#.#",
  ".................##............",
  ".#...#...#..#...........#...##.",
  "..#..#.#...........#.....##....",
  ".#.......#.....#..##..#.#....#.",
  "..........#.#......##...##.....",
  "........##..#......##...#......",
  "#......................#.......",
  "............#.....#....#.#...#.",
  "#......#..........##..#........",
  ".........#.......#...#.#.......",
  "...........##....#........#....",
  "#........#.....#...#........##.",
  ".#......##......#.##.......#..#",
  ".....#......#.#......#.......#.",
  ".....#.#.........#.............",
  "...........#..#....#.....#.#...",
  "...#............#...#..........",
  "..#..#...#.....................",
  "......#..#...#....#............",
  ".#.#.#........#..#...#.........",
  "..........#........#..#........",
  "..............#...#....#.......",
  "..#....#....##.......#...#.##..",
  ".#.........#...#......#........",
  "..#......#...#.........##.#...#",
  "...#.....#...#..#.............#",
  ".##........#.#.#.............#.",
  "..#.............#..#.#...#....#",
  "#...#.........#......#......#..",
  ".......##..#.#..........#...#..",
  ".......#.............#..#.#....",
  ".#..#....#.#...................",
  "....##...#..#....#..#..........",
  "....#.#............#...........",
  "###........##..#.#..#..........",
  ".#.#.#.......#...........#..#.#",
  "..........##..#.............#..",
  ".#...........#......#.#..#..##.",
  "...###......#.##........#.....#",
  "....#..#..#...#................",
  "...#.....#........#............",
  "....#...#...#..#..##.##.......#",
  "#.......#......#....#.......#..",
  "#.............#...#............",
  "##......#..#...#....##.#...#...",
  ".##....................#....#..",
  "..#.....#....#.#....#......#...",
  ".......#..#..#............#...#",
  ".#.....#.......#..#..#..#......",
  "......##.......................",
  "#..#...#.#.#....#.....#..#.....",
  "...................#...#...#...",
  "........#....##..#....#........",
  "##......#.#......##.###........",
  ".........#...##................",
  ".......#...#...#.......##......",
  "....#.......#......#.........##",
  "....#....#.#..#.....#..........",
  "...........#.......#........#..",
  "..#.........###.#........#.....",
  ".......#...........#.#.....##..",
  "..#...#..#..........#..........",
  "..........#.#....#.............",
  ".##....#........##.............",
  ".............#.#####........#.#",
  ".................##...#........",
  "##...#.#.......##........#.....",
  ".#...#...#..#..#....#....#.....",
  "..#...#........#..#............",
  "##...#.#........#......##.#..##",
  ".##......#..............##.#..#",
  ".........#...#............#...#",
  "....#..#....#...........#......",
  "........#..#....#...##...#.....",
  "..#..............#...#.#.....#.",
  ".#.......#.#.....#..###.......#",
  "...................#.......#...",
  "........##.....#..#.......##...",
  ".....#....................#...#",
  "...#.#....#............#.#.....",
  "#.......#.......#....#.........",
  "..#...............#............",
  "##...#...#...#..............#..",
  "...#..........#..#....##.......",
  "#............##.##......#.#.#..",
  ".#...........#.........#....##.",
  "..##....##.#....#.#.#.##...##.#",
  "........#.#.#.............#....",
  ".#...........#....##...#...#.#.",
  ".##...#.................#......",
  "....#.#..#....................#",
  ".##......#........#..#.........",
  "...#...............#...........",
  ".#.#..##..##.#........#........",
  "...........#....#.#.#......#...",
  "...................#........#.#",
  "..#............#...#.#........#",
  "....#....#.#.##......#...#.....",
  "..................#............",
  "..........................#....",
  "........#......................",
  "......#.#...#.#..##......#.#.#.",
  ".........#...#..#..............",
  "..#.......#..........##..#.....",
  ".........#............#........",
  "......#..#..#...###....#....#..",
  "#..#..............##.###..##..#",
  ".#..................#.....#...#",
  "........#........#........#....",
  ".........#........#.##......#..",
  "..#.....#.#..###...#....#......",
  "..#................##....#.....",
  "..#.#....##.....#......##...#..",
  "...#.......#........##.........",
  "#........#...#.#..........##..#",
  "................#...#.#.....#..",
  ".........#..#..#.#..#.#...#....",
  "##....#...##.........#.#...#.##",
  "....#..#.....##.....#.....##...",
  "................#............#.",
  "..#..#...#.....#......#.....##.",
  "....#.......#...#...#...#..#...",
  "....#..##....#.###.#...#..#....",
  "#..##.....#.....#.##..##...##.#",
  ".............###..........#....",
  "..................#.....###....",
  "..........#....#...#......#....",
  "...#..##.......#......#.#...#..",
  "..#.......................##.#.",
  "..#..#..#....#......#...#...##.",
  "#.............#................",
  "..........#.#.#.........#.#....",
  ".....##..#......##.#...........",
  ".#.#.#.#....#.#...#.....#.#...#",
  "......#.....##..............##.",
  "#..#.......##..##..............",
  "#..#..#................###.....",
  ".....#......#.........#........",
  "#...........#........#.#.......",
  "#........#.#...#....#....###..#",
  "###..#.#...........#.##.....#.#",
  "..#..........#..#............#.",
  "...#....#.......#..#.....###...",
  ".#....#.##.#..###..............",
  ".....#.##.##.......###.##...#.#",
  "..#..##.......###..............",
  ".#.........###..#..............",
  "..................###.....#..#.",
  "#....#....#.........#.....#....",
  ".........#.#..#....#.....#.....",
  "....##.......##.......#.#......",
  ".....#...#.##.....#............",
  "....#.#.#.......#..............",
  ".##..#.#..#.......##...........",
  "....#....##..#.....##.......#.#",
  ".....##....#..#.#........#.....",
  "........#.#.#....#....##...#..#",
  "..#......#.#.#..#.##....#.#.#..",
  "..#...#........#..#..........#.",
  ".........#...................#.",
  "........#.....##..#....#....#..",
  "#..............#..........#....",
  "#........#.#...........#.#.....",
  "..#......................#.#..#",
  ".........#.#.....#.#..........#",
  "......#....#.#.##........#.....",
  ".#....##......##..#...#.......#",
  "..#........#...#.##....#..#.#..",
  ".......#.....#..........#.....#",
  ".........#.#..#.........#....#.",
  "..........#.##.........##..#...",
  "......#.#..#.....#.#..........#",
  "......#.#.#..#..#.#............",
  "...##.#..#..............#....#.",
  "#..........#...................",
  ".#....#..#.#.......#........#..",
  "...#...#......#....#......#....",
  "..#.#.......#.......#.......#.#",
  "...#.#...#........#.....#......",
  "#.......#..#...................",
  "#..#..#.............#..#..#..#.",
  "#.......................#....##",
  ".#.........#....#....#.........",
  "...............#...#..#....#..#",
  "#.....#.#...#.#.....#..........",
  "....##.#..#...#.#....###...#.#.",
  ".................#....#........",
  "####.......##...##.......#.##..",
  "#..#....#....##............#...",
  "..##......#..#........#........",
  "....#..#..........#......#...##",
  "..#.#.............#...........#",
  "#...............#...#.......#.#",
  "#..#.........#.##.#.......#...#",
  "......#.....#.............#...#",
  "......#.##.........##...#......",
  "..#......##.#........#.......#.",
  "#..#.........#.##..............",
  "..#....#...#...#..#.....#.#....",
  "................#.......#......",
  "#.....#..............##....#.##",
  "##.....#...#.#.....#..##...#...",
  "#.#............##..........#..#",
  "..#.##......#..#....#..........",
  "....##.#....#.......##.....#...",
  "......#.#....###...#...........",
  "..................#......#....#",
  "..............##...............",
  "......#..#....#.....#..........",
  ".......#........#...#..........",
  "..#......#......##..#.##..#....",
  "..#.#...#...............#......",
  "....#.#.............#.#......#.",
  "....#.#.....#......#..#.......#",
  "........................#..#...",
  ".................#...........#.",
  "#......#......#.#.#.....##.....",
  "..#....##...#.....##.#.....#..#",
  "....#.........#....#.##.#.#....",
  "..#....###.....................",
  ".....#.#....#......#....##....#",
  "#.......#...#......##.......#..",
  "#....#.........##.....#........",
  "#.....#...........#..#.....#...",
  ".................#.....#..##..#",
  "..#...#......####...##.........",
  "...............................",
  "#........#.....#...............",
  ".#.........#....#.#......##....",
  "...#..........#.........#.#.#.#",
  "......##......#....###........#",
  ".....................#.#.#.....",
  "......#..#..#.......#...#......",
  "...##.#.............#.#.......#",
  "..#.#...#..#....#.....#.....#..",
  "..#..#.....................#..#",
  "........#....#..........#..#...",
  "#.##....#..#.#..#............#.",
  "..............###.............#",
  ".#.#..........#.#....#...#....#",
  "....#..........#.#..#......#...",
  ".........##.#...#..............",
  "..................#.....#.#....",
  ".#....#.......#.##.#.........#.",
  ".##..#...#......#..#...........",
  ".#.........#..........#.#......",
  "#.#......#.#.#.#.......#...#.#.",
  ".......#....#.#......#......#..",
  "...#..#....#.#..#..##...##.....",
  "#.#.#.......#....#.........##..",
  "#..#....#........###....#.#....",
  "....#..#.........#....#...#....",
  "...#.#.#.#..#..##.....#.##.....",
  ".......#.......#...............",
  "#.#.#......##....#.............",
  "...#.##........#.....#...##.#..",
  "...#.#.###..........#.......#..",
  ".....#...#.......#.........#...",
  "............#..#...#..##.......",
  "...#....#..##.##..........#.##.",
  "..................#........#...",
  "....#.##.#.##........#.#.......",
  ".#...........##.....##.......#.",
  "#...#.........#.....##.........",
  "#..#....#.#.........#..........",
  "..#......#.#.#......#.....#..#.",
  "..##......#..............#.....",
];

//PART 1

function checkTheTrees1() {
  let squareCounter = 0;
  let treeCounter = 0;
  let currentRow = 0;

  input.forEach((row, index) => {
    let fullRow = row.repeat(Math.ceil((input.length * 3) / input[0].length));

    if (fullRow.charAt(squareCounter, squareCounter + 1) === "#") {
      console.log(
        `tree hit row:${index};`,
        `current square ${squareCounter};`,
        `current row ${currentRow};`
      );
      treeCounter++;
      console.log(treeCounter);
    }
    currentRow++;
    squareCounter += 3;
  });
  return (document.getElementById(
    "task1"
  ).innerText = `Task1 Result :${treeCounter} `);
}

//PART 2

function checkTheTrees2() {
  let slopes = [
    { right: 1, down: 1 },
    { right: 3, down: 1 },
    { right: 5, down: 1 },
    { right: 7, down: 1 },
    { right: 1, down: 2 },
  ];

  total = 1;
  slopes.forEach((slope) => {
    let squareCounter = 0;
    let treeCounter = 0;
    let currentRow = 0;
    input.forEach((row, index) => {
      if (index % slope.down === 0) {
        let fullRow = row.repeat(
          Math.ceil((input.length * slope.right) / input[0].length)
        );

        if (fullRow.charAt(squareCounter, squareCounter + 1) === "#") {
          console.log(
            `tree hit row:${index};`,
            `current square ${squareCounter};`,
            `current row ${currentRow};`
          );
          treeCounter++;
          //console.log(treeCounter);
        }
        currentRow++;
        squareCounter += slope.right;
      }
    });
    console.log(treeCounter);
    total *= treeCounter;
  });

  return (document.getElementById(
    "task2"
  ).innerText = `Task1 Result :${total} `);
}

checkTheTrees1(input);
checkTheTrees2(input);
