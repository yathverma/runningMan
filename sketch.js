var PLAY = 0;
var END = 1;
var gameState = 0;

var man, manImage;
var backGround, backGroundImage;
var invisGround;
var obstacle, obstacleImage, obstacleGroup;

function preload() {

  manImage = loadAnimation("man.png", "man1.png", "man2.png", "man3.png", "man4.png", "man5.png", "man6.png");

  backGroundImage = loadImage("background.jpg");

  obstacleImage = loadImage("rockOb.png");
}

function setup() {
  createCanvas(380, 400);


  backGround = createSprite(200, 200);
  backGround.addImage(" backGround", backGroundImage);
  backGround.scale = 0.6;
  backGround.velocityX=-1;
  

  man = createSprite(50, 350);
  man.addAnimation("man", manImage);
  man.setCollider("rectangle", 0, 0, 55, man.height);

  invisGround = createSprite(200, 390, 400, 5);
  invisGround.shapeColor = "green"
  invisGround.visible = false;
  //invisGround.debug=true;
  

   obstacleGroup=new Group();
}

function draw() {
  background("black");
  
  if (gameState === PLAY) {

    //console.log(man.y)
    
    if(keyDown("space") && man.y>=330){
      man.velocityY=-14;
    }
    
    
    if (backGround.x < 0) {
      backGround.x = backGround.width/5;
    }
      
    man.velocityY = man.velocityY + 0.8
    
    if (man.y<=250 && man. y>=200 && keyDown("space")){
      man.velocityY=-4;
    }
    
    if(man.isTouching(obstacleGroup)){
      gameState=END;
    }

    man.collide(invisGround);
    

    obstacle();
    
    //obstacleGroup.collide(invisGround);
    drawSprites();

  }




  if (gameState === END) {

    stroke("yellow");
    strokeWeight(10)
    fill("green");
    textSize(40);
    text("You Lost", 120, 200);


  }
}

 function obstacle(){
   
   if(frameCount%300===0){
     var obstacle=createSprite(450,360,10,10);//changed y position
     obstacle.addImage("ostacleImag", obstacleImage);
     obstacle.scale=0.2;
     obstacle.velocityX=-6;
     obstacle.setCollider("rectangle",0,0,obstacle.width-60,obstacle.height-60);
     
     obstacle.lifetime=200;
     
     obstacleGroup.add(obstacle);
   }
   
   
   
 }