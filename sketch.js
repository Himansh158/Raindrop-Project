const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rain1 = []


function setup(){
  createCanvas(800,400);
  for(var s = 0; s < 1000; s++){
    rain1.push(new RainDrop1());
  }

}

function draw(){
  background(0);
  for(var s = 0; s < 1000; s++){
    rain1[s].display();
    rain1[s].update();
  }

 
}