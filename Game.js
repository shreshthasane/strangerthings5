class Game {
    constructor(){
  
    }
  
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
  
      eleven = new Eleven(displayWidth/2 - 100, displayHeight/2 + 200, 500, 500);
      mike = new Mike(displayWidth/2 - 180, displayHeight/2 + 200, 500, 500);
      dustin = new Dustin(displayWidth/2 + 70, displayHeight/2 + 200, 500, 500);
      lucas = new Lucas(displayWidth/2 + 200, displayHeight/2 + 200, 500, 500);

      eleven.display();
      mike.display();
      dustin.display();
      lucas.display();

      array = [eleven, mike, dustin, lucas];
    }
  
    
    play(){
      form.hide();
  
      Player.getPlayerInfo();
  
      if(allPlayers !== undefined){
        //var display_position = 100;
        background(198, 135, 105);
        image(backgroundImg, 0, -displayHeight*4, displayWidth, displayHeight*5)
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 225;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          array[index-1].x = x;
          array[index-1].y = y;
  
          if (index === player.index){
            array[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = array[index-1].y
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        
      }
    }
  }