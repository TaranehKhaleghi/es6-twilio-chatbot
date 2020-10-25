const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    JUNGLE:  Symbol("jungle"),
    STAY: Symbol("stay"),
    SNACK: Symbol("snack"),
    SNAKE: Symbol("snake"),
    EAT: Symbol("eat"),
    GOING: Symbol("going"),
    DINNER: Symbol("dinner"),
    HUNT: Symbol("hunt"),
    MOUNTAIN: Symbol("mountain"),
    BEARS: Symbol("bears")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "You are in a jungle! Do you STAY for the night or keep GOING through the jungle? ";
                this.stateCur = GameState.JUNGLE;
                break;
            case GameState.JUNGLE:
                if(sInput.toLowerCase().match("stay")){
                    sReply = "You have a snack in your backpack. Do you want to eat the SNACK for the dinner or going to HUNT? ";
                    this.stateCur = GameState.DINNER;
                }else{
                    sReply ="There are two ways in front of you. One WALKING through the jungle and another CLIMBING the mountain. Which way do you go? ";
                    this.stateCur = GameState.GOING;
                }
                break;
            case GameState.DINNER:
                if(sInput.toLowerCase().match("snack")){
                    sReply = "You open your backpack to take the snack out. There is a snake in your backpack. Do you still want to EAT the snack or leave your backpack and go HUNT? "
                    this.stateCur = GameState.SNACK;
                }else{
                    sReply = "There are two ways in front of you. One walk through the JUNGLE and another climbing the MOUNTAIN. Which way you go? ";
                    this.stateCur = GameState.HUNT;
                }
                break;
            case GameState.SNACK:
                   if(sInput.toLowerCase().match("eat")){
                       sReply = "Game Over!"
                   }
                   else{
                       sReply = "There are two ways in front of you. One WALKING through the jungle and another CLIMBING the mountain. Which way do you go? "
                       this.stateCur = GameState.GOING;
                   }
                    break;
            case GameState.GOING:
                if(sInput.toLowerCase().match("walking")){
                    sReply = "There are wild animals in the jungle. Do you want to STAY and fight or keep GOING? ";
                    this.stateCur = GameState.JUNGLE;
                }else{
                    sReply = "You don't have the equipment to climb. Do you want to CLIMB without equipment or STAY in the jungle? ";
                    this.stateCur = GameState.MOUNTAIN;
                }
                break;
            case GameState.HUNT:
                if(sInput.toLowerCase().match("jungle")){
                    sReply = "There are wild animals in the jungle. Do you want to STAY or keep GOING? ";
                    this.stateCur = GameState.JUNGLE;
                }else{
                    sReply = "You don't have the equipment to climb. Do you want to CLIMB without equipment or STAY in the jungle? ";
                    this.stateCur = GameState.MOUNTAIN;
                }
            case GameState.MOUNTAIN:
                if(sInput.toLowerCase().match("climb")){
                    sReply = "There are some bears in the mountain. Can you hear their growls? (Y or N) "; 
                    this.stateCur = GameState.BEARS;                  
                }else{
                    sReply = "There are wild animals in the jungle. Do you want to STAY or keep GOING? ";
                    this.stateCur = GameState.JUNGLE;
                }
            case GameState.BEARS:
                if(sInput.toLowerCase().match("y")){
                    sReply = "Do you want to STAY or keep GOING? "
                    this.stateCur = GameState.JUNGLE;
                }else{
                    sReply = "Win! "
                }
        }
        return([sReply]);
    }
}