var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var c1,c2,c3,c4;
var trackimg;

var form, player, game;
var cars , car1 ,car2, car3 ,car4
var gold ,silver ,bronze
var carsAtEnd = 0;
var state = false
function preload(){
  c1 = loadImage ("img/car1.png")
  c2 = loadImage ("img/car2.png")
  c3 = loadImage ("img/car3.png")
  c4 = loadImage ("img/car4.png")
  trackimg = loadImage ("img/track.jpg")
  gold = loadImage ("img/gold.png")
  silver = loadImage ("img/silver.png")
  bronze = loadImage ("img/bronze.png")

}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(carsAtEnd===4){
    background("pink")
    game.update(2);
  }
  if(gameState === 2){
    game.end()
  }
}
