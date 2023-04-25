var pumpkin = [];
pumpkin[0] = hero1 = new myHero (churm,rogue,52,dagger,green);
pumpkin[1] = hero2 = new myHero (roln,paladin,60,greatsword);
var idlemyHero;
var walkmyHero;
var turkeydinner;

var counter = 0;

var i = 0;

function preload(){
background01 = loadImage("./assests/background01.png");
turkeydinner = loadImage("./assets/turkey/turkeymeal.jpg");
idleAnimation = loadStrings("./assets/idle/idle.txt");
walkAnimation = loadStrings("./assets/walk/walk.txt")
}

function setup() {
    createCanvas(800,600);
    image(background01,0,0,512,512);
    setInterval(displayCounter, 50);
    idlemyHero = new myHero(idleAnimation,250,100,150,150);
    idlemyHero.animate();
    image{turkeydinner,500,500,30,30};

    walkmyHero = new myHero(walkAnimation,250,100,150,150);
    walkmyHero.animate();
}

function draw() {
    background(background01,512,512);
    image{turkeydinner,500,500,30,30};

    movementT();

    drawCounter();

}

function movementT(){
    if(key == 'd'){
        walkmyHero.draw(i);
        walkmyHero.setX(walkmyHero.getx()+3);
        idlemyHero.setX(idlemyHero.getX()+3);
    }
    else if(key == 'a'){
        walkmyHero.draw(i);
        walkmyHero.setX(walkmyHero.getX()-3);
        idlemyHero.setX(idlemyHero.getX()-3);
    }

    else{
        idlemyHero.draw(i);
    }

}

function drawCounter() {
    textSize(45);
    text(counter,500,100);
}
function displayCounter(){
    counter++;

    i++;
    if (i > 5) {
        i=0;
    }
}