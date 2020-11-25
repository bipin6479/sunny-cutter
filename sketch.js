  var sword,swordImage;
  var fruitGroup,fruits0,fruit1,fruit2,fruit3,fruit4,fruitGroup2;
  var alien,alienGroup,alienImage,alien2,alienGroup2;
  var score;
  var gameState = 1;
  var PLAY = 1;
  var END = 0;
  var GameOver,GameOverImage;
  var knifeSound,gameoverSound;

function preload(){
  
   swordImage = loadImage("sword.png");
   fruit1 = loadImage("fruit1.png");
   fruit2 = loadImage("fruit2.png");
   fruit3 = loadImage("fruit3.png");
   fruit4 = loadImage("fruit4.png");
   alienImage = loadImage("alien1.png");
   GameOverImage = loadImage ("gameover.png");
}

function setup() {
  createCanvas(600,600);

  sword = createSprite(550, 300, 10,10);
  sword.addImage("sword",swordImage);
  sword.scale = 0.7;

   fruitGroup=createGroup();
   alienGroup=createGroup();
   fruitGroup2 =createGroup ();
   alienGroup2 =createGroup ();
  
  score = 0;
}


function draw(){
  background ("cyan");
  
  if(gameState === PLAY) {
    
  fruits();
  Enemy();   
  fruits2();   
  Enemy2();
  sword.x = World.mouseX;
  sword.y = World.mouseY;
    
  
  if (sword.isTouching(fruitGroup)) {
  fruitGroup.destroyEach();  
  score=score+1;    
  }  
  
  if(sword.isTouching(alienGroup)){
  alienGroup.destroyEach();
  gameState = END;  
  }
  
  if (sword.isTouching(fruitGroup2)) {
  fruitGroup2.destroyEach();  
    score=score+1;    
  }  
  
  if(sword.isTouching(alienGroup2)){
  alienGroup2.destroyEach();
  gameState = END;  
  }  
    
  }
  else if (gameState === END) {
  sword.addImage("sword",GameOverImage) ;  
  sword.y = 300;
  sword.x = 300;     
  fruitGroup.destroyEach();  
  alienGroup.destroyEach();  
  fruitGroup2.destroyEach();  
  alienGroup2.destroyEach(); 
  }
  
  textSize(20);
  text("Score : " + score,470,30);
  
  drawSprites();
}

 

function Enemy(){
 if (World.frameCount%200===0) {
   alien = createSprite(600,200,20,20);
   alien.addImage("alien",alienImage);
   alien.y = Math.round(random(100,300));
   alien.velocityX = -(8+(score/10));
   alien.setLifetime = 50;
   
   alienGroup.add(alien);
   
}
}
 
function fruits() {
  
  if(World.frameCount % 80 === 0){
  fruits0 = createSprite(600,50,10,10);
  fruits0.scale = 0.2;
  fruitGroup.add(fruits0);
    
  var rand = Math.round(random(1,4))  ;
  switch (rand) {
      
    case 1 : fruits0.addImage(fruit1) ;
             break;
    case 2  :fruits0.addImage(fruit2);
             break;   
    case 3  :fruits0.addImage(fruit3);
             break;   
    case 4  :fruits0.addImage(fruit4);
             break;   
              
    default: break;  
    
 } 
  fruits0.y = Math.round(random(50,540)) ;
    
  fruits0.velocityX = -7;
  fruits0.lifeTime = 215;
 } 
}

function fruits2() {
  
  if(World.frameCount % 80 === 0){
  fruits01 = createSprite(0,50,10,10);
  fruits01.scale = 0.2;
  fruitGroup2.add(fruits01);
    
  var rand = Math.round(random(1,4))  ;
  switch (rand) {
      
    case 1 : fruits01.addImage(fruit1) ;
             break;
    case 2  :fruits01.addImage(fruit2);
             break;   
    case 3  :fruits01.addImage(fruit3);
             break;   
    case 4  :fruits01.addImage(fruit4);
             break;   
              
    default: break;  
    
 } 
  fruits01.y = Math.round(random(50,540)) ;
    
  fruits01.velocityX = 7;
  fruits01.lifeTime = 215;
 } 
}

function Enemy2(){
 if (World.frameCount%200===0) {
   alien2 = createSprite(0,200,20,20);
   alien2.addImage("alien",alienImage);
   alien2.y = Math.round(random(100,300));
   alien2.velocityX = (8+(score/10));
   alien2.setLifetime = 215;
   
   alienGroup2.add(alien2);
   
}
}