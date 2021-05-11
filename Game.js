class Game {
    constructor(){
  
    }

    getState(){
        var gameStateR  = database.ref('gameState');
        gameStateR.on("value",function(data){
          gameState = data.val();
        })
    
      }

      update(state){
        database.ref('/').update({
          gameState: state
        });
      }




}