const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var ground;



function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(400,800,800,20);
  for (var k = 0; k <=width; k = k + 80) 
  { divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight)); } 
  //plinkos green stationary balls for four rows on the top for 
  for (var j = 75; j <=width; j=j+50) 
  { plinkos.push(new Plinko(j,75)); } 
  for (var j = 100; j <=width; j=j+50) 
  { plinkos.push(new Plinko(j,175)); } 
  for (var j = 75; j <=width; j=j+50) 
  { plinkos.push(new Plinko(j,275)); } 
  for (var j = 100; j <=width; j=j+50) 
  { plinkos.push(new Plinko(j,375)); }
}

function draw() {
  background();  
  Engine.update(engine);
  ground.display();
  if(frameCount%80 === 0) 
  { particles.push(new Particle(random(width/2-30,width/2+30),10,10)); } 
  for (var i = 0; i < plinkos.length; i++) 
  { plinkos[i].display(); } 
  for (var j = 0; j < divisions.length; j++) 
  { divisions[j].display(); } 
  for (var k = 0; k < particles.length; k++) 
  { particles[k].display(); }
  drawSprites();
}