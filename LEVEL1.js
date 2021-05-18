class LEVEL1{
    constructor(){

    }
    display(){
        background(bgimg4);

        
        map.level1.hide();
        map.level2.hide();
        map.level3.hide();
        map.level4.hide();
        map.level5.hide();
        map.level6.hide();
        map.level7.hide();
        map.level8.hide();
        map.level9.hide();
        map.level10.hide();
        map.back.hide();
        //food.back.hide();
        //gunshop.previous.hide();
        //character.previous.hide();
        map.level11.hide();
        map.level12.hide();
        map.level13.hide();
        map.level14.hide();
        map.level15.hide();
        map.level16.hide();
        map.level17.hide();
        map.level18.hide();
        map.level19.hide();
        map.level20.hide();
        map.level21.hide();
        map.level22.hide();
        map.level23.hide();
        map.level24.hide();
        map.level25.hide();


        player1=createSprite(1000,650);
        player1.addAnimation("STANDINGp",player1img);
        player1.addAnimation("FIRING",player1fire);
        player1.scale=0.5;
    
        player2=createSprite(200,650);
        player2.addAnimation("STANDING",player2img);
        player2.scale=0.5;

        this.fire=createButton("FIRE !!");
        this.fire.position(50,50);
    
        this.abc=createButton("abc");
        this.abc.position(200,300);

        this.abc.mousePressed(()=>{
            map.display();

            this.abc.hide();
            player1.visible=false;
            player2.visible=false;
        })
    }
}