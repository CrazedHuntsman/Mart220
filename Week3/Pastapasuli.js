      var timerValue = 20;
      var startButton;
      var timerX = 20;
      var timerY = 40;
      var timerC = 130;
      var counter = 0;

      let img1;
      let img2;
      let img3;
      let myFont1;
      let myFont2;

      function preload(){
        img1 = loadImage('Images\alfredo.jpg')
            img2 = loadImage('Images\fettuccine.jpg')
            img3 = loadImage('Images\pasta.jpg')
            myfont1 = loadFont('fonts\Abel-Regular.ttf')
            myfont2 = loadFont('fonts\MokayaFreeVertion-Regular.ttf')
      }

      function setup(){
        createCanvas (500,500);
        setInterval(displayCounter, 50);
      }

      function draw(){
        background(220);
        drawCounter();
        image(img1,timerX,timerY,100,100);
        image(img2,300,300);
        image(img3,250,400);

        movement();

        textFont(myFont1);
        textSize(15);
        fill(300,100,100);
        text('Damian Beardslee', 250, 400);
        textFont(myFont2);
        textSize(20);
        text('Extra Cheesy Alfredo',10,30);
      }

      function movement(){
        if(timerValue >= 20){
          timerX++;
          timerY--;
        }
      }
