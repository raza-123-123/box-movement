var box;
function setup() {
  createCanvas(800,800);
  box=createSprite(200,150,125,100);
}

function draw() 
{
  background(30);
  if(keyDown("right")){
box.position.x=box.position.x+5;
  } 
  if(keyDown("left")){
    box.position.x=box.position.x-5;
  }

  if(keyDown("up")){
    box.position.y=box.position.y-5;
  }

  if(keyDown("down")){
    box.position.y=box.position.y+5;
  }
drawSprites();
}




