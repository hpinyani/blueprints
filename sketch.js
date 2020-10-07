const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var box1;
var box3;
var box7;

function setup(){
var canvas=createCanvas(400,400)
engine=Engine.create()
world=engine.world
box1=new Box(200,200,15,15)
box3=new Box(280,290,25,65)
box7=new Box(400,285,54,27)
}
    
function draw(){
background("blue")
Engine.update(engine)
box1.display()
box3.display()
box7.display()
}