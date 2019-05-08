var spot ={
    x: 100,
    y: 50
  }
  var col = {
    r: 255,
    g: 255,
    b: 255
  }
  
  function setup() {
      createCanvas(720, 400);
      background(50);
     fill(66,244,220);
     noStroke();
      
    }
      
    function draw() {
      fill(col.r,col.g,col.b);
      rect(spot.x, spot.y, 70,70);
      col.r = random(0,255);
      col.g = 30;
      col.b = random(255);
      spot.x = random(0,width);
      spot.y = random(0,height);
      fill (col.r,col.g, col.b);
       noStroke();
       fill(255);
       textSize(35);
       text('MERRY CHRISTMAS!!', 200, 100);
       fill(255);
       text('HAPPY NEW YEAR!!', 300,200);
      
    }
    