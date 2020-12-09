var FixedRect, rect2, movingRect1, movingRect2;


function setup() {
  createCanvas(800,400);

  FixedRect = createSprite(300,200,50,50);
  rect2 = createSprite(500,200,50,50);
  movingRect1 = createSprite(400,150,20,20);
  movingRect2 = createSprite(400,50,20,20);

  FixedRect.shapeColor = "red";
  rect2.shapeColor = "red";
  movingRect1.shapeColor = "yellow"

  movingRect1.velocityY = -5;
  movingRect2.velocityY = 5;
}

function draw() {
  background(15);

  rect2.x = mouseX;
  rect2.y = mouseY;

  if(movingRect1.x - movingRect2.x < movingRect1.width/2 + movingRect2.width/2 && movingRect2.x - movingRect1.x < movingRect2.width/2 + movingRect1.width/2) {
    movingRect1.velocityX = movingRect1.velocityX * -1;
    movingRect2.velocityX = movingRect2.velocityX * -1;
    //console.log("hi")
  }

  if(movingRect1.y - movingRect2.y < movingRect2.height/2 + movingRect1.height/2 && movingRect2.y - movingRect1.y < movingRect2.height/2 + movingRect1.height/2) {
    movingRect1.velocityY = movingRect1.velocityY * -1;
    movingRect2.velocityY = movingRect2.velocityY * -1;
    //console.log("bye")
  }


  if(FixedRect.x - rect2.x < FixedRect.width/2 + rect2.width/2 && rect2.x - FixedRect.x < rect2.width/2 + FixedRect.width/2
    && FixedRect.y - rect2.y < FixedRect.height/2 + rect2.height/2 && rect2.y - FixedRect.y < rect2.height/2 + FixedRect.height/2){
    FixedRect.shapeColor = "green";
    rect2.shapeColor = "green";
  }
  else{
    FixedRect.shapeColor = "red";
    rect2.shapeColor = "red";
  }

  drawSprites();
}