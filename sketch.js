const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;
const Bodies=Matter.Bodies;

var bg,bgImg;
var player, shooterImg, shooter_shooting;
var alex,world,engine;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/space.jpg");

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world 

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  alex = new Alex (100,100);
  

//creating the player sprite
}

function draw() {
  background(0); 
    Engine.update(engine); 
    
    alex.display();


  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
 // player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 //player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

//drawSprites();

}
