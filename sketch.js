//VARIABLES FOR BACKGROUND IMAGE
var bgimg,bgimg1,bgimg2,bgimg3,bgimg4,bgimg5,bgimg6,bgimg7,bgimg8,bgimg9,bgimg10,bgimg11;

//VARIABLES FOR PLAYER1
var player1,player1img,player1fire;

//VARIABLES FOR PLAYER2
var player2,player2img,player2fire;

//VARIABLE TO CREATE DATABASE
var database;

//VARIABLE FOR CLASS OBJECT
var game,form,character,player,gunshop,food,map;
var level1;

//VARIABLES FOR GAMESTATE,PLAYERCOUNT
var gameState =0;
var playerCount = 0;
var allPlayers;
var gun=0;shop=0;
var leaf=100,diamond=50,health=250,live=5;

//VARIABLES FOR COSTUMES
var dress1,dress1img;
var dress2,dress2img;
var dress3,dress3img;
var dress4,dress4img;
var dress5,dress5img;
var dress6,dress6img;

//VARIABLES FOR PROGRESS BAR
var coinbar,healthbar,energybar,leafbar;

//VARIABLES FOR PROGRESS BAR IMAGES
var coinbarimg,healthbarimg,energybarimg,leafbarimg;

//VARIABLES FOR WEAPONS
var arrow,arrowimg;
var bow,bowimg;
var bucket,bucketimg;
var gun1,gun1img;
var gun2,gun2img;
var gun3,gun3img;
var gun4,gun4img;
var gun5,gun5img;
var gun6,gun6img;
var head1,head1img;
var head2,head2img;
var head3,head3img;
var head4,head4img;
var head5,head5img;
var head6,head6img;

//VARIABLES FOR FOOD ITEMS
var food1,food1img;
var food2,food2img;
var food3,food3img;
var food4,food4img;
var food5,food5img;
var food6,food6img;
var food7,food7img;
var food8,food8img;
var food9,food9img;
var food10,food10img;
var food11,food11img;
var food12,food12img;
var food13,food13img;
var food14,food14img;
var food15,food15img;

//PRELOAD FUNCTION TO LOAD THE IMAGES  
function preload(){

	//LOADING THE BACKGROUND IMAGES
	bgimg1=loadImage("BATTLEGROUND/bg1.jpg");
	bgimg2=loadImage("BATTLEGROUND/bg2.jpg");
	bgimg3=loadImage("BATTLEGROUND/bg3.jpg");
	bgimg4=loadImage("BATTLEGROUND/bg4.jpg");
	bgimg5=loadImage("BATTLEGROUND/bg5.jpg");
	bgimg6=loadImage("BATTLEGROUND/bg6.jpg");
	bgimg7=loadImage("BATTLEGROUND/bg7.jpg");
	bgimg8=loadImage("BATTLEGROUND/bg8.jpg");
	bgimg9=loadImage("BATTLEGROUND/bg9.jpg");
	bgimg10=loadImage("BATTLEGROUND/bg10.jpeg");
	bgimg11=loadImage("BATTLEGROUND/bg11.jpg");

	//LOADING THE IMAGES OF PLAYER FIRING
	player1fire=loadAnimation("PLAYER2/b4.png");
	player2fire=loadAnimation("PLAYER1/a2.png")

	//LOADING THE IMAGES OF PLAYERS STANDING
	player1img=loadAnimation("PLAYER2/b3.png");
	player2img=loadAnimation("PLAYER1/a4.png");

	//LOADING THE IMAGES OF COSTUMES
	dress1img=loadImage("PLAYER1/a5.jpg");
	dress2img=loadImage("PLAYER2/b3.png");
	dress3img=loadImage("PLAYER3/c1.png");
	dress4img=loadImage("PLAYER4/d5.png");
	dress5img=loadImage("PLAYER6/f5.png");
	dress6img=loadImage("PLAYER5/e4.png");

	//LOADING THE IMAGES OF THE BARS
	coinbarimg=loadImage("BARS/BAR1.png");
	energybarimg=loadImage("BARS/BAR2.png");
	healthbarimg=loadImage("BARS/BAR3.png");
	leafbarimg=loadImage('BARS/BAR4.png');

	//LOADING THE IMAGES OF THE WEAPONS
	arrowimg=loadImage("WEAPONS/ARROW.png");
	bowimg=loadImage("WEAPONS/BOW.png");
	bucketimg=loadImage("WEAPONS/ARROWBUCKET.png");
	gun1img=loadImage("WEAPONS/GUN1.png");
	gun2img=loadImage("WEAPONS/GUN2.png");
	gun3img=loadImage("WEAPONS/GUN3.png");
	gun4img=loadImage("WEAPONS/GUN4.png");
	gun5img=loadImage("WEAPONS/GUN5.png");
	gun6img=loadImage("WEAPONS/GUN6.png");
	head1img=loadImage("WEAPONS/HEAD1.png");
	head3img=loadImage("WEAPONS/HEAD2.png");
	head2img=loadImage("WEAPONS/HEAD3.png");
	head4img=loadImage("WEAPONS/HEAD4.png");
	head5img=loadImage("WEAPONS/HEAD5.png");
	head6img=loadImage("WEAPONS/HEAD6.png");

	//LOADING THE IMAGES OF FOOD ITEMS
	food1img=loadImage("FOOD/FOOD1.png");
	food2img=loadImage("FOOD/FOOD2.png");
	food3img=loadImage("FOOD/FOOD3.png");
	food4img=loadImage("FOOD/FOOD4.png");
	food5img=loadImage("FOOD/FOOD5.png");
	food6img=loadImage("FOOD/FOOD6.png");
	food7img=loadImage("FOOD/FOOD7.png");
	food8img=loadImage("FOOD/FOOD8.png");
	food9img=loadImage("FOOD/FOOD9.png");
	food10img=loadImage("FOOD/FOOD10.png");
	food11img=loadImage("FOOD/FOOD11.png");
	food12img=loadImage("FOOD/FOOD12.png");
	food13img=loadImage("FOOD/FOOD13.png");
	food14img=loadImage("FOOD/FOOD14.png");
	food15img=loadImage("FOOD/FOOD15.png");
}

function setup(){

	//CREATING THE CANVAS
	createCanvas(1200,800);

	//CREATING THE DATABASE
	database = firebase.database();

	//ADDING THE BACKGROUD IMAGE
	background(bgimg10);
	
	//CREATING THE OBJECT OF GAMEC= CLASS
	game=new GAME();

	//CALLING THE GETSTATE FUNCTION OF GAME CLASS
	game.getState();

	//CALLING THE ASYNCHRONOUS START FUNCTION OF GAME CLASS
	game.start();

}

function draw(){

	//UPDATING THE GAMESTATE TO 1 IN THE DATABASE WHEN THE PLAYEE COUNT IS 2
	if(playerCount===1){
		game.update(1);
	}

	//CALLING THE PLAY FUNCTION OF GAME CLASS WHEN THE GAMESTATE IS 1
	if(gameState===1){
		game.play();
	}

	//DRAWING THE SPRITES
	drawSprites();
}


