const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  bg=loadImage("snow3.jpg")
}
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  for(var i=0;i<800;i=i+10){
    snow=new Snow(i,20,40)
  }

}

function draw() {
  background(bg);  
  Engine.update(engine)
  //if(frameCount%60===0){
    snow.display(); 
  //}
}