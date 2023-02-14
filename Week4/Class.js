class myHero {
constructor(name, type, height, weapon, clothesColor,x,y,idleAnimation){
this.name = name
this.type = type
this.height = height
this.weapon = weapon
this.clothesColor = clothesColor
this.idleAnimation = idleAnimation
}

getX()
{
    return this.x;
}

setX(x)
{
    this.x = x;
}
draw(i){
    Image(this.character[r], this.x,this.y,this.height);
}
animte()
{

    for(var j = 0; j < this.idleAnimation.length; j++) {
        person = loadimage(this.idleAnimation[j]);
        this.character[j] = person;
    }
}

}
