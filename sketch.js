const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;
var holder,ball,ground;
var stand1,stand2, stand3;
var ball;
var slingObj;
var slingShot;
var polygon_img;
var ponto = 0


function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  stand3 = new Stand(700, 350, 150, 10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //stand2 - bottom
  block17 = new Block(610, 175,30,40)
  block18 = new Block(640, 175, 30, 40);
  block19 = new Block(670,175,30,40);
  block20= new Block(700,175,30,40);
  block21 = new Block(730,175,30,40);
  block22 = new Block(760, 175,30,40);
  block23 = new Block(790,175,30,40);
  //stand2 - mid
  block24 = new Block(640, 135,30,40);
  block25 = new Block(670,135, 30,40);
  block26 = new Block(700,135,30,40);
  block27 = new Block(730,135,30,40);
  block28 = new Block(760,135,30,40);
  //stand2 - mid2
  block29 = new Block(670,95,30,40);
  block30 = new Block(700, 95,30,40);
  block31 = new Block(730,95,30,40);
  //stand2 - top
  block32 = new Block(700,55,30,40)

  //stand 3 - bottom
  block33 = new Block(665, 325, 30,40);
  block34 = new Block(695,325, 30,40)
  block35 = new Block(725, 325, 30, 40)
  //stand3 - top
  block36 = new Block(695, 285, 30,40)

  ball = new Polygon(10, 0, 20);

  slingObj = new Sling(ball.body, {x: 100, y: 200});



  

}
function draw() {
  background(56,44,44); 

 
  textSize(20);
  fill("lightyellow");

  ground.display();
  stand1.display();
  stand2.display();
  stand3.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  //blocos do stand2
  fill('blue')
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  fill('red');
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  fill('green');
  block29.display();
  block30.display();
  block31.display();
  fill('purple');
  block32.display();

  //blocos do stand3
  fill('orange');
  block33.display();
  block34.display();
  block35.display();
  fill('black');
  block36.display();


  ball.display();

  slingObj.display();

 

}


function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY})
}


function mouseReleased(){
  slingObj.fly();
}
