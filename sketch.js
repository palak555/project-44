var PLAY=1
var END=0
var gameState=1

var bg,bgImage;
var player , playerImage; 
var pillar; 


function preload(){
pillarImg=loadImage("pillar..png")
RpillarImg=loadImage("Rpillar.png")
bgImage=loadImage("bg..png")
playerImage=loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png","bird5.png","bird6.png");
gr=loadImage("ground.png")
}


function setup(){
  createCanvas(1400,600);
  background("black");

  ground=createSprite(5000,600,1200,3)

  bk=createSprite(800,290,400,200)
  bk.addImage(bgImage);
  bg=createSprite(800,290,400,200)
  bg.addImage(bgImage);
  bg.scale=1                     
  bg.velocityX=-4
  bg.x = bg.width /2;

  player=createSprite(100,500,20,50)
  player.addAnimation("running",playerImage)
  player.scale=0.3                                                                       
  player.collide(ground)
  player.setCollider("rectangle",0,0,50,player.height);
  player.debug = false


  go=createSprite(1000,600,20,20)
  go.addImage(gr)
  ground=createSprite(1600,600,20,20)
  ground.addImage(gr)
  ground.scale=1
  ground.velocityX=-4;
  ground.x=ground.width/2

  obstaclesGroup=new Group();
  obstacleGroup=new Group();
  
  
  
}

function draw(){

if(gameState===PLAY){
   if (bg.x < 0){
    bg.x = bg.width/2;
  }

  if (ground.x < 0){
    ground.x = ground.width/2;
  }


  createPillars();
  createPillar();
 // createRpillars();
  //createRpillar();

  if(keyDown("space")&& player.y >= 100) {
    player.velocityY = -6;
    }


player.velocityY = player.velocityY + 0.8
}

if(gameState===END){
   bg.velocityX=0;
   pillar.velocityX=0
   p.velocityX=0;
   player.destroy();
   text("GAME OVER",700,290)
}



  drawSprites();
}

function createPillars(){
  if(frameCount%200===0){
    var pillar=createSprite(900,30,40,10);
    pillar.y = Math.round(random(0,70));
    pillar.addImage(pillarImg);
    pillar.velocityX=-4;
    pillar.scale=1.6

    pillar.lifetime=220;
    obstaclesGroup.add(pillar)
   

  }
}

function createPillar(){
  if(frameCount%200===0){
    var p=createSprite(900,550,40,10);
    p.y = Math.round(random(570,550));
    p.addImage(pillarImg);
    p.velocityX=-4;
    p.scale=1.6

    p.lifetime=220;
    obstacleGroup.add(p)

  }
}

//function createRpillars(){
  //if(frameCount%300===0){
    //var Rpillar=createSprite(900,100,40,10);
    //Rpillar.addImage(RpillarImg);
    //Rpillar.velocityX=-4;
   // Rpillar.scale=1.6
//
  //  Rpillar.lifetime=220;


  //}
//}

//function createRpillar(){
  //if(frameCount%400===0){
    //var Rp=createSprite(900,20,40,10);
    //Rp.addImage(RpillarImg);
    //Rp.velocityX=-4;
    //Rp.scale=1.6

    //Rp.lifetime=220;

  //}
//}
























