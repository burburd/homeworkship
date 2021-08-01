var sea,seaImage,seaInv;
var ship,ship_Image;

function preload(){
  seaImage = loadImage("sea.png");
  ship_Image = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(50,160,20,50);
  sea.addImage("sea",seaImage)
  sea.x = sea.width /2;
  sea.velocityX = -4
  
  seaInv = createSprite(50,170,20,50);
  seaInv.visible = false;
  ship = createSprite(340,280,20,20);
  ship.addAnimation("ship",ship_Image);
  ship.scale = 0.3;
  ship.velocityX=-2;
}



function draw() {
  background("blue");
 //console.log(ship.x)
 drawSprites();
 
 
  

}

