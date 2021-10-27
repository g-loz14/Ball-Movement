var box
function setup() {
  createCanvas(400,400); 
  box = createSprite(200,200,10,10)
}

function draw() 
{
  background(30);
drawSprites()
if(keyDown(UP_ARROW)){
  box.y= box.y-2
}
if(keyDown(DOWN_ARROW)){
  box.y = box.y+2
}
if(keyDown(LEFT_ARROW)){
  box.x = box.x-2
}
if(keyDown(RIGHT_ARROW)){
  box.x = box.x+2
}
}




