class MAP{
    constructor(){

    }

    display(){
        background(bgimg9);

        form.gunshop.hide();
        form.canteen.hide();
        form.store.hide();
        form.islands.hide();

        this.back=createButton('BACK <-');
        this.back.position(50,20);
        this.back.style("height",'65px');
        this.back.style("width",'100px');
        this.back.style("font-size","30px");
        this.back.style("color",'orange');
        this.back.style('background','black');

        this.level1=createButton("LEVEL1");
        this.level1.position(100,150);
        this.level1.style("width",'100px');
        this.level1.style('height','100px');
        this.level1.style('color','yellow');
        this.level1.style('background','black');

        this.level2=createButton("LEVEL2");
        this.level2.position(250,150);
        this.level2.style("width",'100px');
        this.level2.style('height','100px');
        this.level2.style('color','yellow');
        this.level2.style('background','black');

        this.level3=createButton("LEVEL3");
        this.level3.position(400,150);
        this.level3.style("width",'100px');
        this.level3.style('height','100px');
        this.level3.style('color','yellow');
        this.level3.style('background','black');

        this.level4=createButton("LEVEL4");
        this.level4.position(550,150);
        this.level4.style("width",'100px');
        this.level4.style('height','100px');
        this.level4.style('color','yellow');
        this.level4.style('background','black');

        this.level5=createButton("LEVEL5");
        this.level5.position(700,150);
        this.level5.style("width",'100px');
        this.level5.style('height','100px');
        this.level5.style('color','yellow');
        this.level5.style('background','black');

        this.level6=createButton("LEVEL6");
        this.level6.position(850,150);
        this.level6.style("width",'100px');
        this.level6.style('height','100px');
        this.level6.style('color','yellow');
        this.level6.style('background','black');

        this.level7=createButton("LEVEL7");
        this.level7.position(1000,150);
        this.level7.style("width",'100px');
        this.level7.style('height','100px');
        this.level7.style('color','yellow');
        this.level7.style('background','black');

        this.level8=createButton("LEVEL8");
        this.level8.position(100,300);
        this.level8.style("width",'100px');
        this.level8.style('height','100px');
        this.level8.style('color','yellow');
        this.level8.style('background','black');

        this.level9=createButton("LEVEL9");
        this.level9.position(250,300);
        this.level9.style("width",'100px');
        this.level9.style('height','100px');
        this.level9.style('color','yellow');
        this.level9.style('background','black');

        this.level10=createButton("LEVEL10");
        this.level10.position(400,300);
        this.level10.style("width",'100px');
        this.level10.style('height','100px');
        this.level10.style('color','yellow');
        this.level10.style('background','black');

        this.level11=createButton("LEVEL11");
        this.level11.position(550,300);
        this.level11.style("width",'100px');
        this.level11.style('height','100px');
        this.level11.style('color','yellow');
        this.level11.style('background','black');

        this.level12=createButton("LEVEL12");
        this.level12.position(700,300);
        this.level12.style("width",'100px');
        this.level12.style('height','100px');
        this.level12.style('color','yellow');
        this.level12.style('background','black');

        this.level13=createButton("LEVEL13");
        this.level13.position(850,300);
        this.level13.style("width",'100px');
        this.level13.style('height','100px');
        this.level13.style('color','yellow');
        this.level13.style('background','black');

        this.level14=createButton("LEVEL14");
        this.level14.position(1000,300);
        this.level14.style("width",'100px');
        this.level14.style('height','100px');
        this.level14.style('color','yellow');
        this.level14.style('background','black');

        this.level15=createButton("LEVEL15");
        this.level15.position(100,450);
        this.level15.style("width",'100px');
        this.level15.style('height','100px');
        this.level15.style('color','yellow');
        this.level15.style('background','black');

        this.level16=createButton("LEVEL16");
        this.level16.position(250,450);
        this.level16.style("width",'100px');
        this.level16.style('height','100px');
        this.level16.style('color','yellow');
        this.level16.style('background','black');

        this.level17=createButton("LEVEL17");
        this.level17.position(400,450);
        this.level17.style("width",'100px');
        this.level17.style('height','100px');
        this.level17.style('color','yellow');
        this.level17.style('background','black');

        this.level18=createButton("LEVEL18");
        this.level18.position(550,450);
        this.level18.style("width",'100px');
        this.level18.style('height','100px');
        this.level18.style('color','yellow');
        this.level18.style('background','black');

        this.level19=createButton("LEVEL19");
        this.level19.position(700,450);
        this.level19.style("width",'100px');
        this.level19.style('height','100px');
        this.level19.style('color','yellow');
        this.level19.style('background','black');

        this.level20=createButton("LEVEL20");
        this.level20.position(850,450);
        this.level20.style("width",'100px');
        this.level20.style('height','100px');
        this.level20.style('color','yellow');
        this.level20.style('background','black');

        this.level21=createButton("LEVEL21");
        this.level21.position(1000,450);
        this.level21.style("width",'100px');
        this.level21.style('height','100px');
        this.level21.style('color','yellow');
        this.level21.style('background','black');

        this.level22=createButton("LEVEL22");
        this.level22.position(100,600);
        this.level22.style("width",'100px');
        this.level22.style('height','100px');
        this.level22.style('color','yellow');
        this.level22.style('background','black');

        this.level23=createButton("LEVEL23");
        this.level23.position(250,600);
        this.level23.style("width",'100px');
        this.level23.style('height','100px');
        this.level23.style('color','yellow');
        this.level23.style('background','black');

        this.level24=createButton("LEVEL24");
        this.level24.position(400,600);
        this.level24.style("width",'100px');
        this.level24.style('height','100px');
        this.level24.style('color','yellow');
        this.level24.style('background','black');

        this.level25=createButton("LEVEL25");
        this.level25.position(550,600);
        this.level25.style("width",'100px');
        this.level25.style('height','100px');
        this.level25.style('color','yellow');
        this.level25.style('background','black');

        this.back.mousePressed(()=>{

            background(bgimg6);

            this.level1.hide();
            this.level2.hide();
            this.level3.hide();
            this.level4.hide();
            this.level5.hide();
            this.level6.hide();
            this.level7.hide();
            this.level8.hide();
            this.level9.hide();
            this.level10.hide();
            this.level11.hide();
            this.level12.hide();
            this.level13.hide();
            this.level14.hide();
            this.level15.hide();
            this.level16.hide();
            this.level17.hide();
            this.level18.hide();
            this.level19.hide();
            this.level20.hide();
            this.level21.hide();
            this.level22.hide();
            this.level23.hide();
            this.level24.hide();
            this.level25.hide();

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

        this.level1.mousePressed(()=>{
            level1=new LEVEL1();
            level1.display();

            this.back.hide();
        })
    }
}