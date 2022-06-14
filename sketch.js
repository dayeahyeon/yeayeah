var musculus;
let capture;
let cScale = 16;


var x = 10;
var y = 10;

function setup() {
  
  
  createCanvas(800, 600);
  colorMode(HSB);
  
  pixelDensity(1);
  capture = createCapture(VIDEO);
  capture.size(width / cScale, height / cScale);
  
  
}

function draw() {
  background(0);
  capture.loadPixels();
  if (musculus === 'screen1') {
    screen1();
  } else if (musculus === 'screen2') {
    screen2();
  }
    else if (musculus === 'screen3') {
    screen3();
  }
}
  
function keyTyped() {
  if (key === 'a') {
    musculus = 'screen1';
  } else if (key === 'c') {
    musculus = 'screen2';
  } else if (key === 'b'){
    musculus = 'screen3';
    }
}
  
function screen1() {
  
  noStroke();
  for(y=10;y<=790;y=y+20){
	for(x=10;x<=590;x=x+20){
    }
  }
  
  let ratioX = width/capture.width;
  let ratioY = height/capture.height;
  
  for (let y = 0; y < capture.height; y++){
    for (let x = 0; x< capture.width; x++){
      let idx = (capture.width - x + 1 + (y * capture.width))*4
      
      let r = capture.pixels[idx + 0];
      let g = capture.pixels[idx + 1];
      let b = capture.pixels[idx + 2];
      let bright = (r + g + b) / 3
      let w = map(bright, 0, 225, 0, cScale);
      
      noStroke();
      
      fill(random(mouseX),random(mouseY),100, 50);
      ellipseMode(CENTER)
      ellipse(x * ratioX + random(-40), y * ratioY + random(-5), w, w)
    }
  }
}


function screen2() {
  background(0);
  capture.loadPixels();
  
  let ratioX = width/capture.width;
  let ratioY = height/capture.height;
  
  let gradient = drawingContext.createLinearGradient(20,20,ratioX, ratioY);
  drawingContext.fillStyle = gradient;
  noStroke();
  for(y=10;y<=700;y=y+20){
	for(x=10;x<=500;x=x+20){
    }
  }
   

  
  for (let y = 0; y < capture.height; y++){
    for (let x = 0; x< capture.width; x++){
      let idx = (capture.width - x + 1 + (y * capture.width))*4
      
      let r = capture.pixels[idx + 0];
      let g = capture.pixels[idx + 1];
      let b = capture.pixels[idx + 2];
      let bright = (r + g + b) / 3
      let w = map(bright, 0, 225, 0, cScale);
      
      noStroke();
      
      fill((x+mouseY),(y+mouseX),(x*y));
      ellipseMode(CENTER)
      ellipse(x * ratioX + random(-5), y * ratioY + random(-40), w, w)
    }
  }
}

function screen3() {
   noStroke();
  for(y=10;y<=790;y=y+20){
	for(x=10;x<=590;x=x+20){
    }
  }
  
  let ratioX = width/capture.width;
  let ratioY = height/capture.height;
  
  for (let y = 0; y < capture.height; y++){
    for (let x = 0; x< capture.width; x++){
      let idx = (capture.width - x + 1 + (y * capture.width))*4
      
      let r = capture.pixels[idx + 0];
      let g = capture.pixels[idx + 1];
      let b = capture.pixels[idx + 2];
      let bright = (r + g + b) / 3
      let w = map(bright, 0, 225, 0, cScale);
      
      noStroke();
      
      fill(random(255))
      ellipseMode(CENTER)
      ellipse(x * ratioX + random(-40), y * ratioY + random(-40), w, w)
    }
  }
  
}
 
  
