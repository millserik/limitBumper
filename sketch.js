function preload(){
  bumper = loadImage('bumpSwitch.png');
  limit = loadImage('limitSwitch.png');
}

function setup() {
  createCanvas(600, 272);
  time = 0;
  mins = 0;
  g = 0;

}

function draw() {
  background(0);
  

  image(bumper,490,42,95,70)
  image(limit,490,122,95,70)
  
  noStroke()
  fill(3,190,252)
  rect(0,0,480,32)

  textSize(20)
  stroke(0)
  fill(0)
  text('Limit and Bumper',8,24)
  time = time + deltaTime;
  out_time = floor(time/1000)
  if(out_time == 60){
    mins = mins + 1
    time = 0
    out_time = 0
  }
  if(out_time < 10){
    print_time = '0'+ out_time
  } else{
    print_time = out_time
  }
  text(mins + ':' + print_time,240,24)

  
  stroke(255)
  fill(255)
  text('BOTH',510,240)
  

      
      if(g== 1){
        fill(5,176,48) //green for bump
      } else if(g==2){
        fill(36,63,214) //blue for limit
      } else if(g==3){
        fill(184,36,26) //red for both
      } else {
        fill(0) // black
      }
      
      rect(0,32,480,240)
}


function mousePressed(){
  if (mouseX > 480 && mouseX < 600){
    if(mouseY < 112 && mouseY > 32){
       g = 1
    } else if(mouseY < 192 && mouseY > 112){
      g = 2
    } else if(mouseY < 272 && mouseY > 192){
      g = 3
    } else{
      g = 0
    }
  }
}

function mouseReleased(){
  g = 0

}