class CHARACTER{
    constructor(){

    }

    display(){
        background(bgimg7);
        form.gunshop.hide();
        form.canteen.hide();
        form.store.hide();
        form.islands.hide();

        this.previous=createButton('BACK <-');
        this.previous.position(50,20);
        this.previous.style("height",'65px');
        this.previous.style("width",'100px');
        this.previous.style("font-size","30px");
        this.previous.style("color",'yellow');
        this.previous.style('background','black');

            strokeWeight(25);
            stroke("black");
            dress1=createSprite(200,245);
            dress1.addImage(dress1img);
            dress1.scale=0.3;
            this.coinbutton1=createButton("RS.200/-");
            this.coinbutton1.position(165,327);
            this.name1=createButton("JACK-THE PIRATE");
            this.name1.position(135,140);
            rectMode(CENTER);
            rect(200,250,170,260);

            dress2=createSprite(200,545);
            dress2.addImage(dress2img);
            dress2.scale=0.3;
            this.coinbutton2=createButton("RS.200/-");
            this.coinbutton2.position(165,627);
            this.name2=createButton("FAUJI");
            this.name2.position(170,450);
            rectMode(CENTER);
            rect(200,550,170,260);

            dress3=createSprite(510,205);
            dress3.addImage(dress3img);
            dress3.scale=0.5;
            this.coinbutton3=createButton("RS.200/-");
            this.coinbutton3.position(465,327);
            rectMode(CENTER);
            rect(500,250,170,260);

            dress4=createSprite(500,545);
            dress4.addImage(dress4img);
            dress4.scale=0.3;
            this.coinbutton4=createButton("RS.200/-");
            this.coinbutton4.position(465,657);
            rectMode(CENTER);
            rect(500,550,170,260);

            dress5=createSprite(800,245);
            dress5.addImage(dress5img);
            dress5.scale=0.3;
            this.coinbutton5=createButton("RS.200/-");
            this.coinbutton5.position(765,327);
            rectMode(CENTER);
            rect(800,250,170,260);

            dress6=createSprite(800,545);
            dress6.addImage(dress6img);
            dress6.scale=0.3;
            this.coinbutton6=createButton("RS.200/-");
            this.coinbutton6.position(765,627);
            rectMode(CENTER);
            rect(800,550,170,260);

            this.previous.mousePressed(()=>{
                background(bgimg6);
                dress1.visible=false;
                dress2.visible=false;
                dress3.visible=false;
                dress4.visible=false;
                dress5.visible=false;
                dress6.visible=false;

                this.coinbutton1.hide();
                this.coinbutton2.hide();
                this.coinbutton3.hide();
                this.coinbutton4.hide();
                this.coinbutton5.hide();
                this.coinbutton6.hide();

                this.name1.hide();
                this.name2.hide();

                
                this.store=createButton('STORE');
                this.store.position(100,700);
                this.store.style("width",'150px');
                this.store.style("height",'100px');
                this.store.style("font-size",'20px');
                this.store.style("color",'yellow');
                this.store.style('background','black');

                this.gunshop=createButton("GUNSHOP");
                this.gunshop.position(250,700);
                this.gunshop.style("width",'150px');
                this.gunshop.style("height",'100px');
                this.gunshop.style("font-size",'20px');
                this.gunshop.style("color",'yellow');
                this.gunshop.style('background','black');
                
                this.canteen=createButton('CANTEEN');
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

                this.store.mousePressed(() => {
                    character=new CHARACTER();
                    character.display();

                    this.gunshop.hide();
                    this.canteen.hide();
                    this.store.hide();
                    this.islands.hide();
                })
    
                this.gunshop.mousePressed(()=>{
                    gunshop=new GUNSHOP();
                    gunshop.display();

                    this.gunshop.hide();
                    this.canteen.hide();
                    this.store.hide();
                    this.islands.hide();
                })
    
                this.canteen.mousePressed(()=>{
                    food=new FOOD ();
                    food.display();

                    this.gunshop.hide();
                    this.canteen.hide();
                    this.store.hide();
                    this.islands.hide();
                })

                this.islands.mousePressed(()=>{
                    map=new MAP ();
                    map.display();

                    this.gunshop.hide();
                    this.canteen.hide();
                    this.store.hide();
                    this.islands.hide();
                
                })



            })
    }


}