var ball;
var database,position
var gameState=0;
var form,player,game,playerCount,allPlayers,car1,car2,car3,car4,cars;

function preload()
{
    carImg1=loadImage("images/car1.png")
    carImg2=loadImage("images/car2.png")
    carImg3=loadImage("images/car3.png")
    carImg4=loadImage("images/car4.png")
    trackImg=loadImage("images/track.jpg")
}




function setup(){
    createCanvas(displayWidth,displayHeight);
   database=firebase.database();
   game=new Game();
 
   game.getState();
   game.start();





};

function draw(){
    background(255)
    if(playerCount===4){
            game.update(1);
        }
if(gameState===1)
{
    game.play();
}

if(gameState===2)
{
    game.end
}
        
}
