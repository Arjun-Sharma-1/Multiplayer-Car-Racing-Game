class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1=createSprite(100,200)
    car1.addImage ("c1",c1)
    car2=createSprite(300,200)
    car2.addImage("c2",c2)
    car3=createSprite(500,200)
    car3.addImage ("c3",c3)
    car4=createSprite(700,200)
    car4.addImage ("c4",c4)
    cars=[car1,car2,car3,car4]
    state = false
  }

  play(){
    form.hide();
   
    Player.getPlayerInfo();
    player.getCarsAtEnd();

    if(allPlayers !== undefined){
      background("gray")
      image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
    var index = 0
    var x = 175
    var y;
      for(var plr in allPlayers){
        index = index + 1
        x = x + 200
        y = displayHeight - allPlayers[plr].distance;
        cars[index - 1].position.x = x
        cars[index - 1].position.y = y
        if (index === player.index){
          cars[index -1].shapeColor="red"
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index - 1].position.y
        fill("red")
        ellipse(x,y,65,65);
        }
        else{
        cars[index -1].shapeColor="green"
        }
        textSize(20)
  textAlign(CENTER)
  text  (allPlayers[plr].name,x,y+75)

       
    }

    if(keyIsDown(UP_ARROW) && player.index !== null&&state===false){
      player.distance +=50
      player.update();
    }
    if(player.distance>3500&&state===false){
      Player.updateCarsAtEnd()
      player.rank = carsAtEnd;
      player.update()
      state=true

    }
    drawSprites();
  }
}
end(){
  var gameEnded = createElement('h2')
  gameEnded.html('Game Over')
  gameEnded.position(displayWidth/2,50)
  camera.position.x = 0
  camera.position.y = 0
  imageMode(CENTER)
  Player.getPlayerInfo()
  image(gold,0,-100,250,300)
  image(silver,displayWidth/4,-100+displayHeight/10,255,210)
  image(bronze,displayWidth/-4,-100+displayHeight/9,200,240)
  textAlign(CENTER);
  textSize(51);
for(var i in allPlayers){
  if(allPlayers[i].rank===1){
text("1st: "+allPlayers[i].name,0,100)
  }
  else if(allPlayers[i].rank===2){
    text("2nd: "+allPlayers[i].name,displayWidth/4,displayHeight/6)
      }
      else if(allPlayers[i].rank===3){
        text("3rd: "+allPlayers[i].name,displayWidth/-4,displayHeight/5)
          }
          else{
            text("Honorable Mention: "+allPlayers[i].name,0,225)
          }
}

}
}
