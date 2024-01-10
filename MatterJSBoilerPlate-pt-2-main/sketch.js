
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;
var block1, block2;

var rotator1, rotator2, rotator3;

var angle1=60;
var angle2=100;
var angle3=150;

var particle1, particle2, particle3, particle4, particle5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	var plane_options={
		isStatic: true
	}
	var particle_options = {
		restitution:0.7,
		friction:1.0
	}




	plane=Bodies.rectangle(400, 690, 800, 20, plane_options);
	World.add(world,plane);
	fill("brown");

	block1=Bodies.rectangle(90, 350, 150, 20, plane_options);
	World.add(world,plane)
	fill("brown")

	block2=Bodies.rectangle(600, 350, 150, 20, plane_options);
	World.add(world,plane)
	fill("brown")


	rotator1=Bodies.rectangle(250,200,150,20,plane_options);
	World.add(world,plane);
	fill("brown")

	
	rotator2=Bodies.rectangle(250,200,150,20,plane_options);
	World.add(world,plane);
	fill("brown")

	rotator3=Bodies.rectangle(250,200,150,20,plane_options);
	World.add(world,plane);
	fill("brown")

	particle1 = Bodies.circle(200,10,10,particle_options);
	World.add(world,particle1)

	particle2 = Bodies.circle(300,10,10,particle_options);
	World.add(world,particle2)

	particle3 = Bodies.circle(400,10,10,particle_options);
	World.add(world,particle3)

	particle4 = Bodies.circle(500,10,10,particle_options);
	World.add(world,particle4)

	particle5 = Bodies.circle(600,10,10,particle_options);
	World.add(world,particle5)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  
	Engine.update(engine);

	rect(plane.position.x, plane.position.y, 800, 20);
	rect(block1.position.x, block1.position.y, 150, 20);
	rect(block2.position.x, block2.position.y, 150, 20);

ellipse(particle1.position.x,particle1.position.y,10)

	ellipse(particle2.position.x,particle2.position.y,10)
	ellipse(particle3.position.x,particle3.position.y,10)
	ellipse(particle4.position.x,particle4.position.y,10)
	ellipse(particle5.position.x,particle5.position.y,10)



	Matter.Body.rotate(rotator1,angle1)
	push();
	translate(rotator1.position.x,rotator1.position.y);
	rotate(angle1);
	rect(0,0,150,20);
	pop();
	angle1 +=0.2;

	Matter.Body.rotate(rotator2,angle2)
	push();
	translate(rotator2.position.x,rotator2.position.y);
	rotate(angle2);
	rect(0,0,150,20);
	pop();
	angle2 +=1.7;

	Matter.Body.rotate(rotator3,angle3)
	push();
	translate(rotator3.position.x,rotator3.position.y);
	rotate(angle3);
	rect(0,0,150,20);
	pop();
	angle3 +=1.9;

	
  drawSprites();
 
}



