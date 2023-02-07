var cx = 200;
var cy = 150;
var cr = 30;
var x=100;
var y=120;
function setup()
{
  createCanvas(400, 400);
  fill(300,100,200);
for(var i = 0; i < 5; i++){
  circle(cx,cy,cr);
  cx+=100;
  cy+=150;
  }
  function mouseClicked()
  {
    circle(mouseX,mouseY,30);
    x = mouseX;
    y = mouseY;
  }
    fill(100,200,100);
  square(120,140,30);
    if(keyIsPressed)
    {
      if(key == 'a')
        {
          x-=5;
        }
      else if(key == 'd')
        {
          x+=5;
        }
      else if(key == 'w')
        {
          y-=5;
        }
      else if(key == 's')
        {
          y+=5;
        }
}
}
function draw() { background(220);
  fill(260,300,300);
  circle(200,200,300);
  fill(300,250,250);
  circle(200,200,250);
  fill(250,240,240);
  circle(210,195,220);
  circle(206,190,220);
  fill(300,250,150);
  circle(200,200,230);
  fill(300,230,120);
  rect(130,150,10,130);
  rect(140,130,10,130);
  rect(150,120,10,130);
  rect(160,130,10,130);
  rect(170,140,10,130);
  rect(180,140,10,130);
  rect(180,270,100,10);
  rect(150,280,100,10);
  rect(160,120,100,10);
  rect(180,130,100,10);
  rect(200,140,10,130);
  rect(220,150,10,130);
  rect(235,150,10,130);
  rect(245,130,10,130);
  rect(255,140,10,130);
  fill(300,220,170);
  rect(255,130,10,20);
  rect(240,155,10,20);
  rect(220,185,20,10);
  rect(240,220,20,10);
  rect(190,220,20,10);
  rect(190,180,20,10);
  rect(150,190,10,20);
  rect(190,130,10,20);
  rect(140,120,10,20);
  rect(140,160,10,20);
  rect(130,200,10,20);
  rect(130,240,20,10);
  rect(200,250,20,10);
  rect(190,270,10,20);
  rect(170,230,20,10);
  textSize(15);
fill(300,100,100);
text('Damian Beardslee', 250, 400);
textSize(20)
text('Extra Cheesy Alfredo',10,30)
}