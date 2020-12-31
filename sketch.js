var bacground, oback, Tom, Jerry, catImg1, catImg2, catImg3, mouseImg1, mouseImg2, mouseImg3;
function preload() {
    catImg1 = loadAnimation("tomOne.png");
    catImg2 = loadAnimation("tomTwo.png" , "tomThree.png");
    catImg3 = loadAnimation("tomFour.png");
    mouseImg1 = loadAnimation("jerryOne.png");
    mouseImg2 = loadAnimation("jerryTwo.png" , "jerryThree.png");
    mouseImg3 = loadAnimation("jerryFour.png");
    oback = loadAnimation("garden.png");
}

function setup(){
    createCanvas(1000,800);
    bacground = createSprite(500,400);
    Tom = createSprite(800,600,200,200);
    Jerry = createSprite(200,600,200,200);
    Tom.addAnimation("catStart", catImg1);
    Jerry.addAnimation("mouseStart", mouseImg1);
    Jerry.changeAnimation("mouseStart");
    Tom.changeAnimation("catStart");
    Jerry.scale = 0.09
    Tom.scale = 0.09;
    bacground.scale = 1.2;
}

function draw() {
    background(255);
    bacground.addAnimation("oback", oback);
    text(mouseX + ',' + mouseY, 10, 45);
    if(Tom.isTouching(Jerry)){Tom.addAnimation("catDone", catImg3); Tom.changeAnimation("catDone"); Jerry.addAnimation("mouseDone", mouseImg3); Jerry.changeAnimation("mouseDone"); Tom.velocityX = 0;}
    Tom.collide(Jerry);
    Tom.debug = true;
    Jerry.debug = true;
    Jerry.setCollider("rectangle",0,0,800,900)
    Tom.setCollider("rectangle",0,0,800,900)
    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
    Tom.velocityX = -5;
    Tom.addAnimation("catRunning", catImg2);
    Tom.changeAnimation("catRunning");
    Jerry.addAnimation("mouseTeasing", mouseImg2);
    Jerry.changeAnimation("mouseTeasing");
    }
}