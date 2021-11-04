var ash;
var bg;
var bgm
var boyImg;
var snow, snowimg, snowGroup;
var charmander, charimg;
var pikachu, pikaimg;
var friend, friendimg;


function preload(){


bg=loadImage ("snow1.jpg");
bgm=loadImage("Ash_JN.png");
charimg=loadImage("charmander.png");
pikaimg=loadImage("pikachu.webp");
snowimg=loadImage("snow4.webp");
snowGroup=createGroup();
friendimg=loadImage("Picture1.png")


}
function setup() {


  createCanvas(1360,630);

  ash=createSprite(650,420);
  ash.addImage(bgm);
  ash.scale= 1.2;

  charmander=createSprite(820,520);
  charmander.addImage(charimg);
  charmander.scale=0.4;

  pikachu=createSprite(510,480);
  pikachu.addImage(pikaimg);
  pikachu.scale=1.4; 

  friend=createSprite(980,405);
  friend.addImage(friendimg);


}

function draw() {
 background(bg);

 snowy();




  drawSprites();
}

function snowy(){
if( World.frameCount %85===0){
  snow=createSprite(200,100);
  snow.addImage(snowimg);
  snow.scale=0.2;
  snow.x=Math.round(random(0,1300));
  snow.velocityY= 1;
  snow.lifetime= 760;
  snowGroup.add(snow)
}


}