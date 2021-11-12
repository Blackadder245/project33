class Snow{
constructor(){
this.snow=createSprite(random(50,950),-10)
this.snow.addImage(snowimg)
this.snow.scale=0.1
this.snow.velocityY=3
}
}