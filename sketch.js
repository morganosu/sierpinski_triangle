function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0);
  fill(255,255,255)
  triangle(500, 0, 0, 1000, 1000, 1000);
  fill(0,0,0)
  triangle(250, 500, 750, 500, 500, 1000);
}
