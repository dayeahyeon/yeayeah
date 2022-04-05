let d = 100;
let th = 1;

let d1 = 100;
let th1 = 1;

let posX = new Array(100);
let posY = new Array(100);
let posVX = new Array(100);
let posVY = new Array(100);


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  background(60);
  ellipseMode(CENTER)
  
   for (let j=0; j<10; j++) {
    posX[j] = width*2;
    posY[j] = height*2;
    posVX[j] = 0;
    posVY[j] = 0;
   }
}

function draw() {
  
  for (i=0; i<50; i++)
  stroke(255-i, i)
  translate(width/2, height/2);
  fill(255-i, i)
  
  
  th = th + 0.2
  let x1 = d * cos(th);
  let y1 = d * sin(th);
  
  line(x1, y1, 0, 0)
 
  
  translate(width/5, height/5);
  
  
  th = th + 0.8
  let x2 = d * cos(th)/1.5;
  let y2 = d * sin(th)/1.5;
  
  line( x2, y2, 0, 0)
  
  
  translate(width/6, height/6);
  
  
  th = th + 2
  let x3 = d * cos(th)/2;
  let y3 = d * sin(th)/2;
  
  line( x3, y3, 0, 0)
  
  
  translate(width/-1.7, height/-1.7);
  
  
  th = th + 1
  let x4 = d * cos(th)*1.2;
  let y4 = d * sin(th)*1.2;
  
  line(x4, y4, 0, 0)
  
 th1 = th1 + 0.3
  let x5 = d1 * cos(th1);
  let y5 = d1 * sin(th1);
  
   for (let j=4; j>=0; j--) {
    posX[j] = posX[j-1];
    posY[j] = posY[j-1];
    
    
  }
    for (let j=100; j>=0; j--) {
    posVX[j] = posVX[j-1];
    posVY[j] = posVY[j-1];
    }
  
  
  posX[0] = d*cos(th)*3
  posY[0] = th1 + 2.3
  
  posVX[0] = mouseX/2
  posVY[0] = mouseY/2
  
  
    for (let j=10; j>=0; j--) {
 stroke(0, 30)
   noFill();
    ellipse(posX[j], posY[j], j, j+j*60);
      ellipse(posVX[j],posVY[j], j+j*5, j+j*5);
    
    
  }
  
  
}

