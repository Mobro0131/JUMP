const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Bounds = Matter.Bounds
const Render = Matter.Render

var bgimage
var punk
var engine, world;
var flag=0

function preload() {
  
bgimage=loadImage("Images/wall1.png")


}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine)
    // var render = Render.create({ element: document.body, engine: engine, options: { width: 800, height: 600, hasBounds: true, showAngleIndicator: true } });
    // Render.run(render);

    ground= new Ground(0,displayHeight,3000,250)
    punk= new Punk(300,260,100,100)
    //scale
    block1= new Block(600,800,200,100)
    block1.debug=true
    block2= new Block(600,400,200,100)
    block3= new Block(300,600,200,100)
    block4= new Block(200,200,200,100)
    block5= new Block(1000,600,200,100)
    block6= new Block(1200,200,200,100)

    arrow1= new Arrow(0,500,)
    var collision = Matter.SAT.collides(punk.body,block1.body)
    console.log(collision)
}   

function draw(){
    background(bgimage);
    Engine.update(engine);
    


    textSize(30)
    fill('red')
    text("press space to start",600,100)
    
    
    
    ground.display()
    punk.display() 
    block1.display() 
    block2.display() 
    block3.display() 
    block4.display() 
    block5.display() 
    block6.display() 
//     engine.render.bounds.min.x=centerX+punk.bounds.min.x
//     engine.render.bounds.max.x = centerX + punk.bounds.min.x + initialEngineBoundsMaxX 
//     // Follow Hero at Y-axis
//      engine.render.bounds.min.y = centerY + punk.bounds.min.y 
//      engine.render.bounds.max.y = centerY + punk.bounds.min.y + initialEngineBoundsMaxY 
//      // Update Mouse 
//      Mouse.setOffset(mouseConstraint.mouse, engine.render.bounds.min);
 }


function keyPressed(){
    flag=0
if(keyCode===87){
    Matter.Body.setVelocity(punk.body,{x:0,y:-10})
    flag=1
}

if(keyCode===65){
    Matter.Body.setVelocity(punk.body,{x:-7,y:0})
    flag=1
}

if(keyCode===68){
    Matter.Body.setVelocity(punk.body,{x:7,y:0})
    flag=1
}




}

