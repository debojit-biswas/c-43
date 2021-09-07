class  Form
{
    constructor()
    {
        this.title=createElement('h2')
        //this.title.html("Car Racing Game")
       // this. input=createInput("Name");
       this. input=createInput("").attribute("placeholder","Name")
        this. button =createButton("Play")
        this. greeting =createElement('h2') 
        this.resetbutton=createButton('RESET')
    }


    formHide()
    {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display()
    {
        //var title =createElement('h2')
       this. title.html("Car Racing Game")
        this.title.position(width/2-50,0)


this.resetbutton.position(width-100,20);


     //   var input=createInput("Name");
      this.  input.position(width/2-40,height/2-80)

     //   var button =createButton("Play")
       this. button.position(width/2+30,height/2);

      //  var greeting =createElement('h2')        

      this.  button.mousePressed(()=>{
           this.input.hide()
          this.button.hide()

            player.name=this.input.value();

            playerCount+=1
            player.index=playerCount;
            player.update()
            player.updateCount(playerCount);

            this.greeting.html("hello"+player.name)
           this.greeting.position(width/2-70,height/4)
 })
 this.resetbutton.mousePressed(()=>{

player.updateCount(0);
game.update(0);
 })




        }
}