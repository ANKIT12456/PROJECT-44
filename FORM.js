class FORM{

    constructor(){
        //CREATING THE INPUT BOX
        this.input = createInput("ENTER  YOUR  NAME  HERE");

        //CREATING THE PLAY BUTTON
        this.button = createButton('PLAY |>');

        //CREATING THE RESET BUTTON
        this.reset=createButton('*LOG-OFF*');

        //CREATING THE TITLE
        this.title = createElement('h2');

        this.store=createButton('STORE');
        this.gunshop=createButton("GUNSHOP");
        this.canteen=createButton('CANTEEN');
     }

     //HIDE FUNCTION TO HIDE THE ELEMENTS
     hide() {
         this.button.hide();
         this.input.hide();
         this.title.hide();
     }

     display(){

        //POSITIONING THE INPUT BOX AND DESIGNING IT
         this.input.position(50,50);
         this.input.style("width",'300px');
         this.input.style("height",'60px');
         this.input.style('font-size','20px');
         this.input.style('color','red');
         this.input.style('background',"black");

         //POSITIONING THE PLAY BUTTON AND DESIGNING IT
         this.button.position(400,50);
         this.button.style("width",'100px');
         this.button.style("height",'60px');
         this.button.style('font-size','20px');
         this.button.style("color",'yellow');
         this.button.style('background','black');

         //POSITIONING THE RESET BUTTON AND DESIGNING IT
         this.reset.position(1000,20);
         this.reset.style("width",'100px');
         this.reset.style("height",'60px');
         this.reset.style("font-size",'20px');
         this.reset.style("color",'yellow');
         this.reset.style('background','black');

         //FUNCTION TO TELL WHAT TO DO WHEN PLAY BUTTON IS PRESSED
        this.button.mousePressed(() => {

            //HIDING THE INPUT AND PLAYBUTTON
            this.input.hide();
            this.button.hide();

            //UPDATING THE PLAYER NAME,PLAYER COUNT ETC TO THE DATABASE
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            //CHANGING THE BG IMAGE
            background(bgimg6);

            //CREATING THE STORE BUTTON
            /*strokeWeight(25);
            stroke("black");*/
            this.store.position(100,700);
            this.store.style("width",'150px');
            this.store.style("height",'100px');
            this.store.style("font-size",'20px');
            this.store.style("color",'yellow');
            this.store.style('background','black');
            /*rectMode(CENTER);
            rect(100,700,120,120);*/

            //CREATING THE GUNSHOP BUTTON
            /*strokeWeight(25);
            stroke("black");*/
            this.gunshop.position(250,700);
            this.gunshop.style("width",'150px');
            this.gunshop.style("height",'100px');
            this.gunshop.style("font-size",'20px');
            this.gunshop.style("color",'yellow');
            this.gunshop.style('background','black');
           /* rectMode(CENTER);
            rect(400,700,170,120);*/

            //CREATING THE CANTEEN BUTTON
            this.canteen.position(400,700);
            this.canteen.style("width",'150px');
            this.canteen.style("height",'100px');
            this.canteen.style("font-size",'20px');
            this.canteen.style("color",'yellow');
            this.canteen.style('background','black');

            this.islands=createButton("MAPS");
            this.islands.position(550,700);
            this.islands.style("width",'150px');
            this.islands.style("height",'100px');
            this.islands.style("font-size",'20px');
            this.islands.style("color",'yellow');
            this.islands.style('background','black');


            coinbar=createSprite(800,-55);
            coinbar.addImage(coinbarimg);
            coinbar.scale=0.4;
            text(health,50,50);

            energybar=createSprite(460,75);
            energybar.addImage(energybarimg);
            energybar.scale=0.4;
            text(leaf,200,50);

            healthbar=createSprite(630,135);
            healthbar.addImage(healthbarimg);
            healthbar.scale=0.4;
            fill("red");
            text("diamond",100,50);

            leafbar=createSprite(270,20);
            leafbar.addImage(leafbarimg);
            leafbar.scale=0.4;
            console.log(live);

            /*this.store.mousePressed(() => {
                character=new CHARACTER();
                character.display();
            })*/

            this.store.mousePressed(() => {
                character=new CHARACTER();
                character.display();
            })

            this.gunshop.mousePressed(()=>{
                gunshop=new GUNSHOP();
                gunshop.display();
            })

            this.canteen.mousePressed(()=>{
                food=new FOOD ();
                food.display();
            })

            this.islands.mousePressed(()=>{
                map=new MAP();
                map.display();
            })
        });

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        })
     }
}