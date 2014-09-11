function setup() {
  createCanvas(640, 480);

  background(179, 212, 101);
 
  noFill();

  stroke(255,0,0);

  var x;

  x = 1;
  ellipse(x * 100,100,50,50);
  
  x = 2;
  ellipse(x * 200,100,50,50);
  
  x = 3;
  ellipse(x * 300,100,50,50);
}
