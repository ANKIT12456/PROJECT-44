class GUNSHOP{
    constructor(){
        this.previous=createButton('<-');
    }

    display(){
        background(bgimg8);

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
        stroke('black');

            gun1=createSprite(160,325);
            gun1.addImage(gun1img);
            gun1.scale=1.1;
            rectMode(CENTER);
            fill("yellow");
            rect(150,250,150,200);

            
            gun2=createSprite(175,475);
            gun2.addImage(gun2img);
            fill("red");
            rectMode(CENTER);
            rect(150,450,150,200);

            gun3=createSprite(145,675);
            gun3.addImage(gun3img);
            gun3.scale=0.8;
            fill("green");
            rectMode(CENTER);
            rect(150,650,150,200);
            
            head1=createSprite(385,185);
            head1.addImage(head1img);
            head1.scale=0.85;
            fill("yellow");
            rectMode(CENTER);
            rect(350,250,150,200);

            head2=createSprite(370,385);
            head2.addImage(head2img);
            head2.scale=0.85;
            fill("red");
            rectMode(CENTER);
            rect(350,450,150,200);

            head3=createSprite(350,595);
            head3.addImage(head3img);
            head3.scale=0.8;
            fill("green");
            rectMode(CENTER);
            rect(350,650,150,200);

            gun4=createSprite(570,290);
            gun4.addImage(gun4img);
            fill("yellow");
            rectMode(CENTER);
            rect(550,250,150,200);

            gun5=createSprite(560,390);
            gun5.addImage(gun5img);
            fill("red");
            rectMode(CENTER);
            rect(550,450,150,200);

            gun6=createSprite(560,630);
            gun6.addImage(gun6img);
            gun6.scale=0.8;
            fill("green");
            rectMode(CENTER);
            rect(550,650,150,200);

            head4=createSprite(760,260);
            head4.addImage(head4img);
            head4.scale=0.8;
            fill("yellow");
            rectMode(CENTER);
            rect(750,250,150,200);

            head5=createSprite(750,460);
            head5.addImage(head5img);
            head5.scale=0.8;
            fill("red");
            rectMode(CENTER);
            rect(750,450,150,200);

            head6=createSprite(770,610);
            head6.addImage(head6img);
            head6.scale=0.6;
            fill("green");
            rectMode(CENTER);
            rect(750,650,150,200);

            bow=createSprite(1005,245);
            bow.addImage(bowimg);
            fill("yellow");
            rectMode(CENTER);
            rect(950,250,150,200);

            arrow=createSprite(1025,375);
            arrow.addImage(arrowimg);
            fill("red");
            rectMode(CENTER);
            rect(950,450,150,200);

            bucket=createSprite(1060,645);
            bucket.addImage(bucketimg);
            bucket.scale=1.2;
            fill("green");
            rectMode(CENTER);
            rect(950,650,150,200);

            
            this.previous.mousePressed(()=>{
                background(bgimg6);
                gun1.visible=false;
                gun2.visible=false;
                gun3.visible=false;
                gun4.visible=false;
                gun5.visible=false;
                gun6.visible=false;
                head1.visible=false;
                head2.visible=false;
                head3.visible=false;
                head4.visible=false;
                head5.visible=false;
                head6.visible=false;
                bow.visible=false;
                arrow.visible=false;
                bucket.visible=false;

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