var value1 = 255;
var value2 = 128;

let rad = 100;
let rad2 = 20;


let x1pos, y1pos;
let x2pos, y2pos;
let x3pos, y3pos;
let x4pos, y4pos;
let x5pos, y5pos;


//작은 원
let x6pos, y6pos;
let x7pos, y7pos;
let x8pos, y8pos;
let x9pos, y9pos;
let x10pos, y10pos;
let x11pos, y11pos;

//움직임
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

//작은 원 움직임
let x6speed = 1
let y6speed = 1
let x7speed = 1
let y7speed = 1
let x8speed = 1
let y8speed = 1

let x9speed = 1
let y9speed = 1
let x10speed = 1
let y10speed = 1
let x11speed = 1
let y11speed = 1

//이동방향
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

//작은 원 이동방향
let x6direction = 3;
let y6direction = -2;
let x7direction = -4;
let y7direction = -7;
let x8direction = -2;
let y8direction = -4;

let x9direction = 1;
let y9direction = -4;
let x10direction = -2;
let y10direction = -5;
let x11direction = -3;
let y11direction = -1;




function setup(){
  createCanvas(800,800);
  frameRate(30);
  ellipseMode(RADIUS);
  
  //큰 원
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
 
  
  //작은원
  x6pos = width/2;
  y6pos = height/2;
  x7pos = width/4;
  y7pos = height/4;
  x8pos = width/3;
  y8pos = height/3;
  
  x9pos = width/2;
  y9pos = height/2;
  x10pos = width/4;
  y10pos = height/4;
  x11pos = width/3;
  y11pos = height/3;
  
  
}

function draw(){
  background(255);
  noStroke();
  
  
  //큰 원 색상
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
  
  
  //작은 원 
  fill(value1);
  noStroke();
  ellipse (x6pos, y6pos, rad2, rad2);
  ellipse (x7pos, y7pos, rad2, rad2);
  ellipse (x8pos, y8pos, rad2, rad2);
  ellipse (x9pos, y9pos, rad2, rad2);
  ellipse (x10pos, y10pos, rad2, rad2);
  ellipse (x11pos, y11pos, rad2, rad2);
  
  
  
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
  
  //작은원
  x6pos = x6pos + x6speed * x6direction ;
  y6pos = y6pos + y6speed * y6direction ;
  x7pos = x7pos + x7speed * x7direction ;
  y7pos = y7pos + y7speed * y7direction ;
  x8pos = x8pos + x8speed * x8direction ;
  y8pos = y8pos + y8speed * y8direction ;
  
  x9pos = x9pos + x9speed * x9direction ;
  y9pos = y9pos + y9speed * y9direction ;
  x10pos = x10pos + x10speed * x10direction ;
  y10pos = y10pos + y10speed * y10direction ;
  x11pos = x11pos + x11speed * x11direction ;
  y11pos = y11pos + y11speed * y11direction ;
  
  
  
  
  
  
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
  
  //작은 원
  
  if (x6pos > width - rad2 || x6pos < rad2){
    x6direction *= -1 ;
  }
  if (y6pos > height - rad2 || y6pos < rad2){
    y6direction *= -1;
  }
   if (x7pos > width - rad2 || x7pos < rad2){
    x7direction *= -1 ;
  }
  if (y7pos > height - rad2 || y7pos < rad2){
    y7direction *= -1;
  }
     if (x8pos > width - rad2 || x8pos < rad2){
    x8direction *= -1 ;
  }
  if (y8pos > height - rad2 || y8pos < rad2){
    y8direction *= -1;
  }
  
  
  
  
  if (x9pos > width - rad2 || x9pos < rad2){
    x9direction *= -1 ;
  }
  if (y9pos > height - rad2 || y9pos < rad2){
    y9direction *= -1;
  }
   if (x10pos > width - rad2 || x10pos < rad2){
    x10direction *= -1 ;
  }
  if (y10pos > height - rad2 || y10pos < rad2){
    y10direction *= -1;
  }
     if (x11pos > width - rad2 || x11pos < rad2){
    x11direction *= -1 ;
  }
  if (y11pos > height - rad2 || y11pos < rad2){
    y11direction *= -1;
  }
}

function mouseClicked(){
    if(value1 == 255 ){
      value1 = 0;
    }else{
      value1 = 255;
    }
}