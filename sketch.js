function setup() {
    createCanvas(600, 600);
    background('yellow');
  }
  
  function draw() {
    
    fill("red");
    stroke('black')
    
    //console.log(mouseIsPressed);
    if(mouseIsPressed){
      rect(mouseX, mouseY, 20, 35);
            }
    
    
  }