function setup() {
  createCanvas(640, 480);

  background(179, 212, 101);
 
  noFill();

  stroke(255,0,0);
}

function draw() {


/*
  var x;

  x = 1;
  ellipse(x * 100,100,50,50);
  
  x = 2;
  ellipse(x * 200,100,50,50);
  
  x = 3;
  ellipse(x * 300,100,50,50);
 
 */


for (var x = 1; x <= 8; x++)
  {
  ellipse(x * 70, x * 20 + 100, 40, 50);
  }

var size = Noth.abs(mouseX - 328)

ellipse(320, 240, mouseX, mouseY);

 }

