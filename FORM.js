class FORM{

    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.reset=createButton('RESET');
        this.title = createElement('h2');

        this.coinbutton1=createButton("RS.200/-");
     }
     hide() {
         this.button.hide();
         this.input.hide();
         this.title.hide();
     }

     display(){
         this.input.position(400,300);
         this.button.position(450,350);
         this.reset.position(900,20);
         this.reset.style("width",'100px');
         this.reset.style("height",'100px');
         this.reset.style("font-size",'20px');
         this.title.html("SHOOTING DESIRE");
         this.title.position(250,100);
         this.title.style("font-size",'50px');
         this.title.style("color","green");
         
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            this.title.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            background(bgimg1);

            dress1=createSprite(200,200);
            dress1.addImage(dress1img);
            dress1.scale=0.3;
            this.coinbutton1.position(165,277);
            rectMode(CENTER);
            rect(200,200,150,200);

        });
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        })
     }
}