class Game{

    constructor()
    {

    }


    getState()
    {
        var gameStateRef=database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameState=data.val()
        })    
    }

    update(state)
    {
      database.ref('/').update({
          gameState:state
          
         
      })
    }
  async  start()
{if(gameState===0)
    {    player=new Player();
       // player.getCount();
       var playerCountRef=await database.ref('playerCount').once("value")
    
       if(playerCountRef.exists()){
           playerCount=playerCountRef.val()
           player.getCount();
       }
        form=new Form();
        form.display()
    }
    car1=createSprite(100,200);
    car2=createSprite(300,200);
    car3=createSprite(500,200);
    car4=createSprite(700,200);

    cars=[car1,car2,car3,car4]
}
play()
{
    form.formHide();
    textSize(30);
    text("GAME START",120,100);
player.getPlayerInfo();

if(allPlayers!=undefined)
{
    background(rgb("198,135,163"))
    var x=0
    var y
    var index=0
    

    for(var plr in allPlayers)
    {y=height-allPlayers[plr].distance
        index=index+1;
        x=x+200

        cars[index-1].x=x
        cars[index-1].y=y

        if (index===player.index)
        {
            cars[index-1].shapeColor="red"
            camera.position.x=width/2
            camera.position.y=cars[index-1].y
        }
        else
        {
          cars[index-1].shapeColor="white"
        }
        



       /* if(plr==="player"+player.index)
        {fill("red")}
        else
        {fill("black")}
        textSize(15)
        text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,ypos)
        ypos+=30 */
    }
}

    if(keyIsDown(UP_ARROW))
    {
        player.distance+=50;
        player.update()
    }
    drawSprites()  
}
}
