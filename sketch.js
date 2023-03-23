var monsta_1 , monsta_2 , monsta_3 , monst_4;
var monsta_5 ;
var monsters_running
var monstersImg;
var spooky_forest, spooky_Img
var cactus, invisibleGround , ground




function preload(){
  monsta_1=loadImage("assets/monsta 1.png")
  monsta_2=loadImage("assets/monsta 2.png")
  monsta_3=loadImage("assets/monsta 3.png")
  monsta_4=loadImage("assests/monsta 4.png")
  monsta_5=loadImage("assets/monsta 5.png")
  monsters_running= loadAnimation("assets/monsta 1.png","assets/monsta 2.png", "assets/monsta 3.png", "assets/monsta 4.png", "assets/monsta 5.png")
  spooky_Img=loadImage("assets/spooky forest.png")
  cactus=loadImage("assets/Cactus.jpg")
  ground=loadImage("assets/ground.jpg")
}







function setup() {
  createCanvas(1600,550);
  monstersImg=createSprite(400, 470, 90, 50);
  cactusImg=createSprite(800,470,70,50);
  cactusImg.addImage(cactus) 
  monstersImg.addAnimation("monsters", monsters_running) 
  invisibleGround=createSprite(1500,540,1500,10);
  invisibleGround.visible=false;
}

function draw() {
  background(spooky_Img);  

  if(keyDown("up_arrow") ){
      monstersImg.velocityY=-10
  } 
  monstersImg.velocityY = monstersImg.velocityY + 0.6 ;
  monstersImg.collide(invisibleGround);

  



  drawSprites();
}
