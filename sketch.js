
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy1, boy2, tree2, tree3;
var mango1;
function preload(){
	boy1 = loadImage("pictures1/boy.png");
	tree3 = loadImage("pictures1/tree.png");
}
function setup() {
	createCanvas(1200, 700);

	//tree2 = createSprite(1000,450,400,500);
	//tree2.addImage(tree3);
	//tree2.scale = 0.4;
	//tree2.depth = mango1.depth-1;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree1 = new Tree(1000,450,4,5);
	stone1 = new Stone(250,560,30,30);
	mango1 = new Mango(1000,250,5,5);
	mango2 = new Mango(900,400,5,5);
	mango3 = new Mango(970,350,5,5);
	mango4 = new Mango(930,300,5,5);
	mango5 = new Mango(850,370,5,5);
	mango6 = new Mango(1100,300,5,5);
	mango7 = new Mango(1150,350,5,5);
	mango8 = new Mango(1050,350,5,5);
	mango9 = new Mango(1045,290,5,5);
	mango10 = new Mango(1100,390,5,5);
	ground1 = new Ground(600,690,1200,30);
	line1 = new Line(stone1.body,{x:250,y:560});
	Engine.run(engine);
  
}


function draw() {
	boy2 = createSprite(300,620,10,10);
	boy2.addImage(boy1);
	boy2.scale = 0.1;
  //Engine.update(engine);
  rectMode(CENTER);
  background(150,200,255);
  tree1.display();
  stone1.display();
  
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
  
  ground1.display();
  line1.display();
  drawSprites();
 detectCollision(stone1,mango1);
 
 detectCollision(stone1,mango2);
 detectCollision(stone1,mango3);
 detectCollision(stone1,mango4);
 detectCollision(stone1,mango5);
 detectCollision(stone1,mango6);
 detectCollision(stone1,mango7);
 detectCollision(stone1,mango8);
 detectCollision(stone1,mango9);
 detectCollision(stone1,mango10);

 textSize(25);
 fill("red");
 text("Press space to bring back your stone",200,200);
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
	line1.boom();
}

function detectCollision(lstone,lmango){
	var distance = dist(lstone.body.position.x,lstone.body.position.y, lmango.body.position.x, lmango.body.position.y);
	if(distance<=100){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone1.body, {x:250, y:560});
		line1.attach(stone1.body);
	}
}