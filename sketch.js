// declaring variables
var garden,gardenImage;
var tom, tomImage1,tomImage2,tomImage3;
var jerry, jerryImage1,jerryImage2,jerryImage3;


function preload() {
    //loading the images
    gardenImage = loadImage("images/garden.png");
    tomImage1 = loadAnimation("images/tomOne.png");
    tomImage2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImage3 = loadAnimation("images/tomFour.png");

    jerryImage1 = loadAnimation("images/jerryOne.png");
    jerryImage2 = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImage3 = loadAnimation("images/jerryFour.png");
}

function setup(){
    createCanvas(1000,630);

    //create tom and jerry sprites here
    tom = createSprite(870,530);
    tom.addAnimation("tomSleeping",tomImage1);
    tom.scale = 0.2;

    jerry = createSprite(200, 530);
    jerry.addAnimation("jerryStanding", jerryImage1);
    jerry.scale = 0.15;
}

function draw() {

    background(gardenImage);
    //condition to evalute if tom and jerry collide

     

    drawSprites();
}

