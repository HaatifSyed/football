
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var goalpost,goalpost_img;
var field;
var crowd,crowd_img;
var goalkeeper,goalkeeper_img;
var ball,ball_img;
var wall1,wall2;
var balls = [];

function preload() {

goalpost_img = loadImage("goal_post.png");
crowd_img = loadImage("crowd.jpg")
goalkeeper_img = loadImage("goalkeeper.png");
ball_img = loadImage("ball.png");

}
function setup() {
const canvas =  createCanvas(500,700);

  engine = Engine.create();
  world = engine.world; 

 

field = new Ground(250,450,500,700)

crowd = createSprite(250,10,300,100)
crowd.addImage(crowd_img)
crowd.scale = 2.5

goalpost = createSprite(255,100,30,30)
goalpost.addImage(goalpost_img)
goalpost.scale = 0.8


goalkeeper = createSprite(250,160,30,30)
goalkeeper.addImage(goalkeeper_img)
goalkeeper.scale = 0.5;
goalkeeper.velocityX = -2

wall1 = createSprite(60,160,20,80)
wall1.visible = false;
wall2 = createSprite(440,160,20,80)
wall2.visible = false;


}




function draw() {
  background("white");
  Engine.update(engine);
  field.show();  
  
           

  if(goalkeeper.isTouching(wall1)){
    goalkeeper.velocityX = 2
  }

  if(goalkeeper.isTouching(wall2)){
    goalkeeper.velocityX = -2 
  }

  
 drawSprites();
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    var ball = new Soccer(250,250);
    balls.push(ball);
    ball.display()
  }
}
