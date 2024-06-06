function setup() {
  createCanvas(1000, 800);
  background(0);
  update();
}

function draw() {}

function update() {
  background(0);

  let x1 = random(0, width / 2);
  let x2 = random(x1, width);
  let x3 = random(x2, width);
  let x4 = random(x3, width);

  let y1 = random(0, height / 2);
  let y2 = random(y1, height);
  let y3 = random(y2, height);
  let y4 = random(y3, height);

  let latoOrr1 = x1;
  let latoOrr2 = x2 - x1;
  let latoOrr3 = x3 - x2;
  let latoOrr4 = width - x3;

  let latoVert1 = y1;
  let latoVert2 = y2 - y1;
  let latoVert3 = y3 - y2;
  let latoVert4 = height - y3;

  let posX = [0, x1, x2, x3];
  let posY = [0, y1, y2, y3];
  let latoX = [latoOrr1, latoOrr2, latoOrr3, latoOrr4];
  let latoY = [latoVert1, latoVert2, latoVert3, latoVert4];

  let array1 = [
    "rgb(255,0,0)",
    "rgb(255,200,0)",
    "rgb(0,100,170)",
    "rgb(0,0,0)",
    "rgb(255,255,255)",
  ];

  for (let indexX = 0; indexX < posX.length; indexX++) {
    for (let indexY = 0; indexY < posY.length; indexY++) {
      randomFill = round(random(0, 4));
      console.log(randomFill);
      fill(array1[randomFill]);
      strokeWeight(10);
      rect(posX[indexX], posY[indexY], latoX[indexX], latoY[indexY]);
    }
  }
}
