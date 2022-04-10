let rad = 100;
let x1pos, y1pos;
let x2pos, y2pos;
let x3pos, y3pos;
let x4pos, y4pos;
let x5pos, y5pos;

let x1speed = 5
let y1speed = 5

let x2speed = 5
let y2speed = 5

let x3speed = 4
let y3speed = 4

let x4speed = 3
let y4speed = 3

let x5speed = 4
let y5speed = 4


let x1direction = 1;
let y1direction = 1;
let x2direction = 1;
let y2direction = -1;
let x3direction = 2;
let y3direction = -3;
let x4direction = 5;
let y4direction = -1;
let x5direction = 2;
let y5direction = -2;



function setup(){
  createCanvas(800,800);
  noStroke();
  frameRate(30);
  ellipseMode(RADIUS);
  x1pos = width/2;
  y1pos = height/2;
  x2pos = width/3;
  y2pos = height/3;
  x3pos = width/4;
  y3pos = height/4;
  x4pos = width/6;
  y4pos = height/6;
  x5pos = width/2;
  y5pos = height/2;
 
}

function draw(){
  background(220);
  
  let from = color(255,150,0);
  let to = color(0, 150, 255);
  let pct = map(x1pos, rad, width-rad, 0, 1);
  let c = lerpColor(from, to, pct);
  fill(c)
  ellipse (x1pos, y1pos, rad, rad);
  
  let from2 = color(205,150,0);
  let to2 = color(0, 100, 255);
  let pct2= map(x2pos, rad, width-rad, 0, 1);
  let d = lerpColor(from2, to2, pct2);
  fill(d)
  ellipse (x2pos, y2pos, rad, rad);
  
  let from3 = color(25,150,0);
  let to3 = color(0, 10, 205);
  let pct3= map(x3pos, rad, width-rad, 0, 1);
  let e = lerpColor(from3, to3, pct3);
  fill(e)
  ellipse (x3pos, y3pos, rad, rad);
  
  
  let from4 = color(0,20,50);
  let to4 = color(0, 60, 15);
  let pct4= map(x4pos, rad, width-rad, 0, 1);
  let f = lerpColor(from4, to4, pct4);
  fill(f)
  ellipse (x4pos, y4pos, rad, rad);
  
  let from5 = color(95,110,0);
  let to5 = color(0, 10, 140);
  let pct5= map(x5pos, rad, width-rad, 0, 1);
  let g = lerpColor(from5, to5, pct5);
  fill(g)
  ellipse (x5pos, y5pos, rad, rad);
  
  
  
  
  x1pos = x1pos + x1speed * x1direction ;
  y1pos = y1pos + y1speed * y1direction ;
  x2pos = x2pos + x2speed * x2direction ;
  y2pos = y2pos + y2speed * y2direction ;
  x3pos = x3pos + x3speed * x3direction ;
  y3pos = y3pos + y3speed * y3direction ;
  x4pos = x4pos + x4speed * x4direction ;
  y4pos = y4pos + y4speed * y4direction ;
  x5pos = x5pos + x5speed * x5direction ;
  y5pos = y5pos + y5speed * y5direction ;
  
  
  
  
  
  
  if (x1pos > width - rad || x1pos < rad){
    x1direction *= -1 ;
  }
  if (y1pos > height - rad || y1pos < rad){
    y1direction *= -1;
  }
  
  
  if (x2pos > width - rad || x2pos < rad){
    x2direction *= -1 ;
  }
  if (y2pos > height - rad || y2pos < rad){
    y2direction *= -1;
  }
  
   if (x3pos > width - rad || x3pos < rad){
    x3direction *= -1 ;
  }
  if (y3pos > height - rad || y3pos < rad){
    y3direction *= -1;
  }
  
   if (x4pos > width - rad || x4pos < rad){
    x4direction *= -1 ;
  }
  if (y4pos > height - rad || y4pos < rad){
    y4direction *= -1;
  }
  
   if (x5pos > width - rad || x5pos < rad){
    x5direction *= -1 ;
  }
  if (y5pos > height - rad || y5pos < rad){
    y5direction *= -1;
  }
}