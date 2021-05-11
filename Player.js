class Player {
    constructor(){

      }
    

    
      update(){
        var playerIndex = "players/player";
        database.ref(playerIndex).set({
          name:this.name,
          distance:this.distance
        });
      }
    

    
    
}