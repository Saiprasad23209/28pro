
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boyimage=loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground (400,680,800,20);
	tree= new Tree(600,400,400,600) 
	mang1=new Mango(620,300,30)
  mang2=new Mango(640,250,30)
  mang3=new Mango(550,200,30)
  mang4=new Mango(680,250,30)
  mang5=new Mango(500,300,30)
  mang6=new Mango(740,230,30)
  mang7=new Mango(780,300,30)
  mang8=new Mango(710,340,30)
  mang9=new Mango(820,330,30)
  mang10=new Mango(840,300,30)
  stone1= new Stone(100,500,30)
    launcher= new Slingshot(stone1.body,{x:150,y:520})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display()
  image(boyimage,100,440,200,300)
  tree.display()
  mang1.Display()
  mang2.Display()
  mang3.Display()
  mang4.Display()
  mang5.Display()
  mang6.Display()
  mang7.Display()
  mang8.Display()
  mang9.Display()
  mang10.Display()
  stone1.Display()
  launcher.display()
  drawSprites();
 
}

function mouseDragged() {
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
launcher.fly()
}

function collition(lstone ,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position
 
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<-lmango.r+lstone.r){
  Matter.Body
}
}
