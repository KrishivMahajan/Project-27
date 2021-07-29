
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var b1,b2,b3,b4,b5;
var r1,r2,r3,r4,r5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof=new Roof(400,250,230,20);

	b1=new Bob(320,575,40);
	b2=new Bob(360,575,40);
	b3=new Bob(400,575,40);
	b4=new Bob(440,575,40);
	b5=new Bob(480,575,40);

	r1=new Rope(b1.body,roof.body,-80);
	r2=new Rope(b2.body,roof.body,-40);
	r3=new Rope(b3.body,roof.body,0);
	r4=new Rope(b4.body,roof.body,40);
	r5=new Rope(b5.body,roof.body,80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
roof.display();
r1.display();
r2.display();
r3.display();
r4.display();
r5.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-50,y:-45})
	}
}



