let inconsolata
let button
let len = 100

function preload() {
  inconsolata = loadFont('Inconsolata-Regular.ttf')
}

function setup() {
  resetSketch()
  var button = createButton("Reset")
  button.position(width/35,height/45)
  button.mousePressed(resetSketch)
  
  noLoop()
}

function resetSketch() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
  textFont(inconsolata)
  textSize(22)
  textAlign(CENTER, BOTTOM)
  
  draw()
}

function draw() {
  background(249, 176, 229)
  
  translate(width/2, height/2 + 250)
  
  branch(len)

  text('Recursive trees', width/2.5, height/7)
  text('Author: yre5tra', width/2.5, height/9)
}

function branch(len) {
  push()
  if (len > 10) {
    strokeWeight(map(len, 10, 100, 1, 15))
    stroke(70, 40, 20)
    line(0, 0, 0, -len)
    translate(0, -len)
    rotate(random(-20, -30))
    branch(len * random(0.7, 0.9))
    rotate(random(50, 60))
    branch(len * random(0.7, 0.9))
  } else {
    var r = 220 + random(-20, 20)
    var g = 120 + random(-20, 20)
    var b = 170 + random(-20, 20)
    fill(r, g, b, 150)
    noStroke()
    
    beginShape()
    for (var i = 45; i < 135; i++) {
      var rad = 15
      var x = rad*cos(i)
      var y = rad*sin(i)
      vertex(x, y)
    }
    for (var i = 135; i > 40; i--) {
      var rad = 15
      var x = rad*cos(i)
      var y = rad*sin(-i) + 20
      vertex(x, y)
    }
    endShape(CLOSE)
  }
  pop()
}