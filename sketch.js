var Engine = Matter.Engine;
 World = Matter.World;
 Events = Matter.Events
 Bodies = Matter.Bodies;
var particle;
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var gameState="play",points=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,175));
    }
     for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }
     for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,375));
    }
}
function draw() {
  background("cyan");
  textSize(20)

  fill("red");
  text("You have 10 clicks",300,20);
  text("score:"+score,10,40);
  text(" 100 ", 20, 550);
  text(" 200 ", 100, 550);
  text(" 300 ", 180, 550);
  text(" 400 ", 260, 550);
  text(" 500 ", 340, 550);
  text(" 500 ", 420, 550);
  text(" 400 ", 500, 550);
  text(" 300 ", 580, 550);
  text(" 200 ", 660, 550);
  text(" 100 ", 740, 550);
  fill("white"); 
  Engine.update(engine);
  ground.display();
  if(gameState=="end"){
  textSize(100);
  fill("green");
  text("GAME OVER!",90,250);
  textSize(50);
  text("Press F5 to restart",90,350);
  
  }
  for (var i = 0; i < plinkos.length; i++) {  
  plinkos[i].display();  
  }
  if(particle!=null)
  {
  particle.display();
      
  if (particle.body.position.y>660)
  {
  if (particle.body.position.x < 300) 
  {
  score=score+500;      
  particle=null;
 if ( points>= 10) gameState ="end";                          
 }
 else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
  {
 score = score + 100;
 particle=null;
 if ( points>= 10) gameState ="end";

  }
  else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
  {
  score = score + 200;
  particle=null;
  if ( points>= 10)  gameState ="end";

  }      
  
}

   }
   for (var i = 0; i < divisions.length; i++) {  
    divisions[i].display();  
  }
  }
  function mousePressed()
{
  if(gameState!=="end")
  {
      points++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}

