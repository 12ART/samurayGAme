var bg_japanese;
var samurai, samurai_img;
var topRect, movingRect, bottomRect, leftRect, RightRect;
var enemy, enemy2, enemy3, enemy4;
var enemy_img, enemy2_img, enemy3_img,enemy4_img;

function preload(){
  bg_japanese= loadImage("fondo.PNG")
  samurai_img = loadAnimation("samurai1.png", "samurai2.png", "samurai3.png","samurai4.png", "samurai5.png", "samurai6.png")
  enemy_img = loadImage("enemy1.png")
  enemy2_img = loadImage("enemy2.png")
  enemy3_img = loadImage("enemy3.png")
  enemy4_img = loadImage("enemy4.png")
}

function setup() {
  createCanvas(1200,800);
  topRect = createSprite(600, 10, 1200, 30);
  topRect.visible = false

  bottomRect = createSprite(600, 780, 1200, 30);

  leftRect = createSprite(10, 400, 30, 800);
 
  rightRect = createSprite(1180, 400, 30, 800);
 
  samurai = createSprite(400, 700, 30,70);
  samurai.addAnimation("walking",samurai_img)
  
  
  enemy = createSprite(120, 700,30,30);
  enemy.addImage(enemy_img)
  enemy.velocityY = -5;
  enemy.velocityX = 10;

  enemy2 = createSprite(150, 600,30,30);
  enemy2.addImage(enemy2_img)
  enemy2.velocityY = 4;
  enemy2.velocityX = 5;

  enemy3 = createSprite(300, 700,30,30);
  enemy3.addImage(enemy3_img)
  enemy3.velocityY = -15;
  enemy3.velocityX = -20;


  enemy4 = createSprite(600, 700,30,30);
  enemy4.addImage(enemy4_img)
  enemy4.velocityY = 30;
  enemy4.velocityX = -4;

 

  //fixedRect.velocityY = +5;
}

function draw() {
  background(bg_japanese); 
 
  
  rebotting(enemy, topRect)
  rebotting(enemy, bottomRect)
  rebotting(enemy, leftRect)
  rebotting(enemy, rightRect)
    
  rebotting(enemy2, topRect)
  rebotting(enemy2, bottomRect)
  rebotting(enemy2, leftRect)
  rebotting(enemy2, rightRect)

  rebotting(enemy3, topRect)
  rebotting(enemy3, bottomRect)
  rebotting(enemy3, leftRect)
  rebotting(enemy3, rightRect)

  rebotting(enemy4, topRect)
  rebotting(enemy4, bottomRect)
  rebotting(enemy4, leftRect)
  rebotting(enemy4, rightRect)

  
  

 

  drawSprites();
}

function rebotting(spriteA, spriteB){
   //rebote Enemigos Vertical
  if (spriteA.x - spriteB.x < spriteB.width/2 + spriteA.width/2
  && spriteB.x - spriteA.x < spriteB.width/2 + spriteA.width/2) {
  spriteA.velocityX = spriteA.velocityX * (-1);
  spriteB.velocityX = spriteB.velocityX * (-1);
  }
  if (spriteA.y - spriteB.y < spriteB.height/2 + spriteA.height/2
  && spriteB.y - spriteA.y < spriteB.height/2 + spriteA.height/2){
    spriteA.velocityY = spriteA.velocityY * (-1);
    spriteB.velocityY = spriteB.velocityY * (-1);
  }
}




