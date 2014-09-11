function setup() {
  createCanvas(640, 480);

  noFill();

  stroke(255,0,0);
}

function draw() {

  background(179, 212, 101);

for (var x = 1; x <= 8; x++)
  {
  ellipse(x * 70, x * 20 + 100, 40, 50);
  }

var size = Math.abs(mouseX - 320)
ellipse(320, 240, mouseX, mouseY);

 }

