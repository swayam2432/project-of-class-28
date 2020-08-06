
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var treeImage;
var ground;
var boy, boyImage;
var stone;
var launcher;
var mango;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;
var mango7;
var mango8;
var mango9;
var mango10;
var mango11;
var mango12;
var mango13;
var mango14;
var mango15;
var mango16;
var mango17;


function preload() {
	boyImage = loadImage("boy.png");
	treeImage = loadImage("tree.png");

}

function setup() {
	createCanvas(1600, 1200);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree = Bodies.rectangle(1200, 710, 10, 10, { isStatic: true });
	World.add(world, tree);

	ground = new Ground(800, 1190, width, 100);

	var option = {
		isStatic: true
	}
	boy = Bodies.rectangle(350, 1000, 1, 1, option);
	World.add(world, boy);

	stone = new Stone(190, 870, 70);
	launcher = new SlingShot(stone.body, { x: 190, y: 870 });

	mango = new Mango(width / 2, height / 2, 10);
	mango2 = new Mango(1135, 375, 10);
	mango3 = new Mango(1324, 349, 10);
	mango4 = new Mango(957, 485, 10);
	mango5 = new Mango(1057, 615, 10);
	mango6 = new Mango(1136, 511, 10);
	mango7 = new Mango(1330, 490, 10);
	mango8 = new Mango(915, 622, 10);
	mango9 = new Mango(1213, 420, 10);
	mango10 = new Mango(1221, 597, 10);
	mango11 = new Mango(1330, 588, 10);
	mango12 = new Mango(1450, 390, 10);
	mango13 = new Mango(1490, 500, 10);
	mango14 = new Mango(1550, 600, 10);
	mango15 = new Mango(1222, 255, 10);
	mango16 = new Mango(990, 350, 10);
	mango17 = new Mango(850, 470, 10);
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("black");

	imageMode(CENTER);
	image(treeImage, tree.position.x, tree.position.y, 1000, 1100);

	ground.display();

	imageMode(CENTER);
	image(boyImage, boy.position.x, boy.position.y, 550, 550);

	stone.display();
	launcher.display();



	detectCollision(stone, mango);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
	detectCollision(stone, mango7);
	detectCollision(stone, mango8);
	detectCollision(stone, mango9);
	detectCollision(stone, mango10);
	detectCollision(stone, mango11);
	detectCollision(stone, mango12);
	detectCollision(stone, mango13);
	detectCollision(stone, mango14);
	detectCollision(stone, mango15);
	detectCollision(stone, mango16);
	detectCollision(stone, mango17);

	mango.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	mango13.display();
	mango14.display();
	mango15.display();
	mango16.display();
	mango17.display();


	drawSprites();

}

function mouseDragged() {
	Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
	launcher.fly();
}

function keyPressed() {
	if (keyCode === 32) {
		Body.setPosition(stone.body, { x: 190, y: 870 });
		launcher.attach(stone.body);
	}
}

function detectCollision(lstone, lmango) {
	var mangoBodyPosition = lmango.body.position;
	var stoneBodyPosition = lmango.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if (distance <= lstone.radius + lmango.radius) {
		Body.setStatic(lmango.body,false);
	}
	
}