var player;
var playerAnimation;
var boundaryTop, boundaryRight, boundaryLeft, boundaryBottom;
var bullet;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9;

function preload(){

  playerAnimation = loadAnimation("image/goblinright1.png", "image/goblinright2.png", "image/goblinright3.png", "image/goblinright4.png", "image/goblinright5.png", "image/goblinright6.png");
}


function setup() {
  createCanvas(1200,600);

  player = createSprite(500, 250, 20, 40);
  player.addAnimation("zombie",playerAnimation);
  player.setCollider('rectangle',0,0,25,50);
  
  boundaryTop = createSprite(600,5,1200,10);
  boundaryTop.shapeColor = "brown";

  boundaryRight = createSprite(1195,300,10,600);
  boundaryRight.shapeColor = "brown";

  boundaryBottom = createSprite(600,595,1200,10);
  boundaryBottom.shapeColor = "brown";

  boundaryLeft = createSprite(5,300,10,600);
  boundaryLeft.shapeColor = "brown";

  wall1 = createSprite(300,300,10,200);
  wall1.shapeColor = "green";

  wall2 = createSprite(300,100,250,10);
  wall2.shapeColor = "green";  

  wall3 = createSprite(300,500,250,10);
  wall3.shapeColor = "green";  

  wall4 = createSprite(550,300,10,200);
  wall4.shapeColor = "green"; 
  
  wall5 = createSprite(800,300,10,200);
  wall5.shapeColor = "green";  

  wall6 = createSprite(800,100,250,10);
  wall6.shapeColor = "green";  

  wall7 = createSprite(800,500,250,10);
  wall7.shapeColor = "green";  

  wall8 = createSprite(1050,300,10,200);
  wall8.shapeColor = "green";  

  wall9 = createSprite(50,300,10,200);
  wall9.shapeColor = "green";  



}

function draw() {
  background('white'); 
  
  if(keyDown("up_arrow"))
  {
    player.y= player.y-5
  }

  if(keyDown("down_arrow"))
  {
    player.y= player.y+5
  }
  if(keyDown("left_arrow"))
  {
    player.x= player.x-5
  }
  if(keyDown("right_arrow"))
  {
    player.x= player.x+5
  }
  player.bounceOff(boundaryTop);
  player.bounceOff(boundaryRight);
  player.bounceOff(boundaryBottom);
  player.bounceOff(boundaryLeft);
  player.bounceOff(wall1);
  player.bounceOff(wall2);
  player.bounceOff(wall3);
  player.bounceOff(wall4);
  player.bounceOff(wall5);
  player.bounceOff(wall6);
  player.bounceOff(wall7);
  player.bounceOff(wall8);
  player.bounceOff(wall9);


  if(keyDown("space"))
  {
    releaseBullets();
  }
  drawSprites();
}

function releaseBullets()
{
  bullet = createSprite(player.x, player.y, 5, 5);
  bullet.velocityX = 4;
  bullet.shapeColor = "red";
}

 
