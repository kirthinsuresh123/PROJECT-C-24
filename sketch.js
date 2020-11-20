
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,dustbin;
var pac,pacImage;
var boxposition;
var dustbinObj,paperObject,groundObject;

function preload()
{
pacImage = loadImage("PAC.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	dustbinObj = new dustbin(1200,650);
	paperObject = new paper(200,450,40);
	groundObject = new ground(width/2,670,width,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
 dustbinObj.display();
 paperObject.display();
 groundObject.display();
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}

