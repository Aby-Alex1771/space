// Variables 
var bg,bgImg;
var ss,ssImg;
var alien,alien1,alien2,alien3,alien4,alien5,alien6,alien7;
var score=0;
var gameState="play";
var alienGroup,laserGroup;
var laser;
var edges;

function preload(){
  
    // Loading Images
    bgImg=loadImage("assets/bg4.webp");
    ssImg=loadImage("assets/ss2.png");
  
    alien1=loadImage("assets/alien1.png");
    alien2=loadImage("assets/alien2.png");
    alien3=loadImage("assets/alien3.png");
    alien4=loadImage("assets/alien4.png");
    alien5=loadImage("assets/alien5.png");
    alien6=loadImage("assets/alien6.png");
    alien7=loadImage("assets/alien7.png");
  
    }

    function setup(){

        createCanvas(1600,700) 
        bg = createSprite(800,350,1600,700);
  bg .addImage(bgImg);
// Sapceship Sprite
ss=createSprite(100,350);
ss.addImage(ssImg);

  
    }
    


function draw(){
    background(0) 


    if (gameState==="play"){

        // Moving the spaceship upwards
        if(keyDown(UP_ARROW)){
          ss.y-=5;
        }
    
       // Moving the spaceship downwards
        if(keyDown(DOWN_ARROW)){
          ss.y+=5;
    
        }
    
    }
    drawSprites()
  }
  