const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var form, player, game;

var engine, world;
var ground;
var backgroundImg;
var eleven;
var mike;
var dustin;
//var jonathan;
//var demogorgan;
//var hopper;
var lucas;
//var nancy;
var will;
var array; 

function preload(){
backgroundImg = loadImage("background.png");

}

function setup(){
    var canvas = createCanvas(displayWidth - 20, displayHeight - 30);

    engine = Engine.create();
    world = engine.world;
    database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
    //eleven = new Eleven(displayWidth/2 - 100, displayHeight/2 + 200, 500, 500);
    //mike = new Mike(displayWidth/2 - 180, displayHeight/2 + 200, 500, 500);
    //dustin = new Dustin(displayWidth/2 + 70, displayHeight/2 + 200, 500, 500);
    //jonathan = new Jonathan(displayWidth/2 - 480, displayHeight/2 + 200, 500, 500);
    //hopper = new Hopper(displayWidth/2 - 350, displayHeight/2 + 180, 500, 500);
    //demogorgan = new Demogorgan(displayWidth/2, displayHeight/2 - 200, 500, 500);
    //lucas = new Lucas(displayWidth/2 + 200, displayHeight/2 + 200, 500, 500);
    //will = new Will(displayWidth/2 + 350, displayHeight/2 + 200, 500, 500);
    //nancy = new Nancy(200, displayHeight/2 + 200, 500, 500);
}

function draw(){
    background("black");
    Engine.update(engine);

    if(playerCount === 4){
        game.update(1);
      }
      if(gameState === 1){
        clear();
        game.play();
      }
    //eleven.display();
    //mike.display();
    //dustin.display();
    //jonathan.display();
    //hopper.display();
    //demogorgan.display();
    //lucas.display();
    //will.display();
    //nancy.display();
}