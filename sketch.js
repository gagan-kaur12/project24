
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,bl,b2,b3, ball, world,engine,gameState;
function preload()
{
	
}

function setup() {
	createCanvas(800, 470);
  rectMode(CENTER);
gameState = "start";
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,90)
b1 = new Box(650,420,180,20);
b2 = new Box(550,370,20,100);
b3 = new Box(750,370,20,100);
ball = new Ball(50,450);
	Engine.run(engine);
  
}


function draw() {
  if(gameState === "start"){
    
    background("black");
    textSize(30);
    fill("red");
   
    text("Throw waste in the justbin ",50,200);
    textSize(25);
    fill("yellow");
   
    text("Press up arrow to start and throw trash in dustbin",50,230);

    if(keyCode ===UP_ARROW){
      gameState = "play"
    }
  }
  if(gameState ==="play"){
    rectMode(CENTER);
    background(0);
    ground.display();
    
    b1.display();
    b2.display();
    b3.display();
    
    ball.display();
    
   }
  }
 

function keyPressed(){
  if(keyCode === UP_ARROW && gameState === "play"){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:12,y:-13});
  }
}



