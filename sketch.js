
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){}


function setup() {
	createCanvas(500, 600);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	var ground_options = {
		isStatic : true,
	  };	
	  
	  ground = Bodies.rectangle(250, 600, 800, 20, ground_options);
	  World.add(world, ground);

	  var option1 = {
		restitution: 0.9,
		friction: 0.9,
		frictionair: 0.1,
	};

	box1 = Bodies.rectangle(20, 20, 20, 20, option1)
	World.add(world, box1);


	var option2 = {
		restitution: 0.8,
		friction: 0.9,
		frictionair: 0.6,
	};

	box2 = Bodies.circle(100, 60, 39, option2);
	World.add(world, box2);

	Engine.run(engine);
  
}


function draw() {
  background("blue");
  Engine.update(engine);
 
  rect(ground.position.x,ground.position.y,800,20);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  fill("purple")
  rect(box1.position.x,box1.position.y,20,20);
  
  fill("yellow")
  ellipse(box2.position.x, box2.position.y,39);
 
 
  drawSprites(); 
}



