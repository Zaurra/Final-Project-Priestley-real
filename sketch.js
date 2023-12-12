let pen;
let darkMode = false
let penSize = 10;


function setup() {
  pen = new Pen();
  ellipseMode(CENTER)
  noStroke();
  createCanvas(800, 800);
  background(220);
  fill(0);
  frameRate(60);
  clearButton = createButton("Clear Canvas")
    clearButton.mousePressed(clearCanvas)
    clearButton.class('sideButton1')
  sizeUpButton = createButton("+ pen size");
    sizeUpButton.mousePressed(pen.penSizeUp)
    sizeUpButton.parent('penButtons')
    sizeUpButton.class('penButtons')
  sizeDownButton = createButton("- pen size")
    sizeDownButton.mousePressed(pen.penSizeDown)
    sizeDownButton.parent('penButtons')
    sizeDownButton.class('penButtons')
  penBlackButton = createButton("Black")
    penBlackButton.mousePressed(pen.penBlack)
    penBlackButton.parent('penButtons')
    penBlackButton.class('penButtons')
  penRedButton = createButton("Red")
    penRedButton.mousePressed(pen.penRed)
    penRedButton.parent('penButtons')
    penRedButton.class('penButtons')
  penBlueButton = createButton("Blue")
    penBlueButton.mousePressed(pen.penBlue)
    penBlueButton.parent('penButtons')
    penBlueButton.class('penButtons')
  penGreenButton = createButton("Green")
    penGreenButton.mousePressed(pen.penGreen)
    penGreenButton.parent('penButtons')
    penGreenButton.class('penButtons')
  penRanButton = createButton("Random color")
    penRanButton.mousePressed(pen.penRan)
    penRanButton.parent('penButtons')
    penRanButton.class('penButtons')
  penEraserButton = createButton("Eraser")
    penEraserButton.mousePressed(pen.penEraser)
    penEraserButton.parent('penButtons')
    penEraserButton.class('penButtons')
  ranShapeButton = createButton("Random shape")
    ranShapeButton.mousePressed(randomShape)
    ranShapeButton.parent('penButtons')
    ranShapeButton.class('penButtons')
  darkModeButton = createButton("Dark Mode (will clear your canvas)")
    darkModeButton.mousePressed(changeMode)
    darkModeButton.parent('penButtons')
    darkModeButton.class('penButtons')
  saveCanvasButton = createButton("Save Canvas")
    saveCanvasButton.mousePressed(Save)
    saveCanvasButton.class('sideButton2')
}

function draw() {
  x = mouseX
  y = mouseY
  if (mouseIsPressed === true){
    pen.drawPoint()
  }
}

class Pen{
  drawPoint(){
    if(x<width && y<height){
      ellipse(x, y, penSize)
    }
  }
  
  
  penSizeUp(){
    penSize += 10
  }
  penSizeDown(){
    penSize -= 10
  }
  
  
  penBlack(){
    if(darkMode == true){
      fill(255)
    }
    else{
      fill(0)
    }

  }
  penRed(){
    fill(255,0,0)
  }
  penGreen(){
    fill(0,255,0)
  }
  penBlue(){
    fill(0,0,255)
  }
  penRan(){
    fill(random(0,255),random(0,255),random(0,255))
  }
  penEraser(){
    if(darkMode == true){
      fill(10)
    }
    else{
      fill(220)
    }
  }
}

function mouseWheel(event) {
  print(event.delta);
  penSize -= (event.delta/10);  
  return false;
}

function clearCanvas(){
  if (darkMode == false){
    background(220)
  }
  else{
    background(10)
  }
}

function randomShape(){
shape = int(random(1,4)) 
  console.log(shape)
  if(shape == 1){
    ellipse(random(0,width), random(0,height), random(0, (height/3)))
  }
  if(shape == 2){
    rect(random(0,width),random(0,height),random(0,width/5),random(0,height/5))
  }
  if(shape == 3){
    triangle(random(0,width),random(0,height),random(0,width),random(0,height),random(0,width),random(0,height))
  }
}

function changeMode(){
  if(darkMode == false){
    darkMode = true
    background(10)
    fill(255)
  }
  else{
    darkMode = false
    background(220)
    fill(0)
  }
}

function Save(){
  saveCanvas()
}