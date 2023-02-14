var myHero = [];
myHero[0] = hero1 = new myHero (churm,rogue,52,dagger,green);
myHero[1] = hero2 = new myHero (roln,paladin,60,greatsword);
var idlemyHero;
var walkmyHero;
var turkeydinner;

function preload(){
background01 = loadimage("../assests/background01.png");
turkeydinner = loadimage("../assets/turkey/turkeymeal.jpg");
idleAnimation = loadStrings("../assets/idle/idle.txt");
walkAnimation = loadStrings("../assets/walk/walk.txt")
}

function setup() {
    createCanvas(800,600);
    image{background01,0,0,512,512};
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