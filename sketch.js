const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var tree;
var backgroundImg;
var stone, slingShot;
var launchingForce=100;
function preload() {
    backgroundImg = loadImage("bg.png")
    boyImg = loadImage("boy.png");

}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   
    tree = new Tree(900, 300);

    mango1 = new Mango(880,240,30);
    mango2 = new Mango(1000,200,30);
    mango3 = new Mango(1030,300,30);
    mango4 = new Mango(1600,160,30);
    mango5 = new Mango(930,130,30);
    mango6 = new Mango(1020,120,30);
    mango7 = new Mango(860,260,30);
    mango8 = new Mango(900,200,30);
    mango9 = new Mango(850,150,30);
    mango10 = new Mango(840,240,30);
    
    stone = new Stone(280,300,30);

    slingshot = new SlingShot(stone.body,{x:280, y:300});
    Engine.run(engine);
}

function draw(){
    background(backgroundImg);
    image(boyImg, 250, 200,150, 400);
    Engine.update(engine);
    strokeWeight(4);
    
    ground.display();
    tree.display();

    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    mango9.display();
    mango10.display();
    
    stone.display();
   
    slingshot.display();  
    
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r)
    {
     
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

  function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:280, y:350}) 
	  slingshot.attach(stone.body);
	}
  }