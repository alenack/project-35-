var balloon,balloonImage1,balloonImage2;
var background;
// create database and position variable here
var database;
var position;

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage2);
  balloon.scale=0.5;

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

/*  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    updateHeight(-10,0);
    //write code to move air balloon in left direction
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    updateHeight(10,0);
    //write code to move air balloon in right direction
  }
  else if(keyDown(UP_ARROW)){
    updateHeight(0,-10);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale = balloon.scale -0.01;
    //write code to move air balloon in up direction
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    updateHeight(0,+10);
    //write code to move air balloon in down direction
  }*/
  if(keyDown(LEFT_ARROW)){
   // balloon.addAnimation("hotAirBalloon",balloonImage2);
	//writePosition(-3,0);
  balloon.x = balloon.x - 10;
  }
  else if(keyDown(RIGHT_ARROW)){
   // balloon.addAnimation("hotAirBalloon",balloonImage2);
   // writePosition(3,0);
   balloon.x = balloon.x + 10;
  }
  else if(keyDown(UP_ARROW)){
    //balloon.addAnimation("hotAirBalloon",balloonImage2);
  //  writePosition(0,-3);
  balloon.y = balloon.y - 10;
	balloon.scale = balloon.scale - 0.01;
	
  }
  else if(keyDown(DOWN_ARROW)){
  //  balloon.addAnimation("hotAirBalloon",balloonImage2);
   // writePosition(0,+3);	
   balloon.y = balloon.y + 10;
	balloon.scale = balloon.scale + 0.01;
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function updateHeight(x,y){
  database.ref('balloon/position').set({
    'x' : balloon.x + x,
    'y' : balloon.y + y
  })
}

function readHeight(data){
  position = data.val();
  balloon.x = position.x;
  balloon.y = position.y;
}

function showError(){
  console.log("error in writing to the database");
}
