var musculus;
let point = [];
let number = 0;
let interval = 0;
let mode = 1;

function preload() {
  image1 = loadImage ("image1.png")
  image2 = loadImage ("image2.png")
  image3 = loadImage ("image3.png")
}


function setup() { 
  createCanvas(800,800);
  frameRate(10);
  noStroke();
  image1.resize(width,height);
  image2.resize(width,height);
  image3.resize(width,height);
  resetBG();
}

function draw() {
  
  
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

function resetBG() {
  
  switch (mode) {
    case 1:
      screen1();
      break;
    case 2:
      screen2();
      break;
    case 3:
      screen3();   
      break;
    default:
      //  
  }
}

function mouseDragged() {
   interval++
   if(interval >= 5){
       let h = (mode-1)*80 + 80;
      splash(mouseX, mouseY, random(h, h+100));
      interval = 0;
   }
}


function splash(x,y,hue) {
  fill(RGB,200,230,360);
  push();
  translate(x,y);
  let dropNum = random(50,300);
  for(let i = 0; i < dropNum; i++){
    let size = pow(random(1), 20);
    let distance = sq((1.0 - pow(size, 2)) * random(1));
    let dia = map(size, 0, 1, 1, 50);
    let dx = map(distance, 0, 1, 0, 200) * cos(random(2*PI));
    let dy = map(distance, 0, 1, 0, 200) * sin(random(2*PI));

    ellipse(dx, dy, dia, dia);
    if(dia>5){
      point.push([x+dx, y+dy, dia, hue]);
    }
  }
  pop();
}


function screen1() {
  
  for(let i = 0; i < point.length; i++){
    
    fill(point[i][3],100,10,300);
    
    ellipse(point[i][0], point[i][1], point[i][2], point[i][2]);
    point[i][1] += point[i][2]/4;
    point[i][2] *= (51-point[i][2])/50;
    if(point[i][2]<1.0001)point.splice(i,1);
    
  }
  
  for (let i=0;i<600;i++){

	let x = int(random(width));
	let y = int(random(height));
	let col =image1.get(x,y);
	noStroke();
	fill(col,10);
		push();
		let angle = 30
		translate(x,y);
		rotate(radians(angle));
		rect(0,0,1,random(1,100));
		pop();
 }
}

function screen2() {
  
  for(let i = 0; i < point.length; i++){
    fill(point[i][3], 200,300,100);
    ellipse(point[i][0], point[i][1], point[i][2], point[i][2]);
    point[i][1] += point[i][2]/4;
    point[i][2] *= (51-point[i][2])/50;
    if(point[i][2]<1.0001)point.splice(i,1);
    
  }
    
   for (let i=0;i<300;i++){

	let x = int(random(width));
	let y = int(random(height));
	let col =image2.get(x,y);
	noStroke();
	fill(col,10);
		push();
		let angle = 60
		translate(x,y);
		rotate(radians(angle));
		rect(0,0,1,random(1,100));
		pop();
 }
}

function screen3() {
  
  for(let i = 0; i < point.length; i++){
    
    fill(point[i][3],10,80,200);
    ellipse(point[i][0], point[i][1], point[i][2], point[i][2]);
    point[i][1] += point[i][2]/4;
    point[i][2] *= (51-point[i][2])/50;
    if(point[i][2]<1.0001)point.splice(i,1);
    
  }
  
   for (let i=0;i<600;i++){

	let x = int(random(width));
	let y = int(random(height));
	let col =image3.get(x,y);
	noStroke();
	fill(col,10);
		push();
		let angle = 90
		translate(x,y);
		rotate(radians(angle));
		rect(0,0,1,random(1,100));
		pop();
 }
}