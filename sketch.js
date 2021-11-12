function preload(){
bg=loadImage("snow1.jpg")
snowimg=loadImage("snow4.webp")
}

function setup() {
  createCanvas(1000,600);
// createSprite(400, 200, 50, 50);


}

function draw() {
  background(bg);
  if(frameCount%30===0){
  for(var i=1;i<25;i=i+1){
  
    s=new Snow()
  }
}
   
  drawSprites();

}