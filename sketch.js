//Amish Ranpariya
//May 4,2020
//javascript,p5.js

var x, y, sx,
  sy,
  r = 25;

function setup() {
  createCanvas(600, 600);
  //starting position
  x = int(random(r, width - r));
  y = int(random(r, height - r));
  //starting velocity
  sy = random(5, 20);
  sx = random(5, 20);
  background(random(0,255),random(0,255),random(0,255));
}

function draw() {
  ellipse(x, y, r);
  //for edges
  if (x >= width - r / 2.0 || x - r / 2.0 <= 0){
    sx *=-1;
  }
  if(y >= height - r / 2.0 || y - r / 2.0 <= 0){
    sy *=-1;
  }
  //adding the speed every frame
  x += sx;
  y += sy;

}
