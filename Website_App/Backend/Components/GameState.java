package Website_App.Backend.Components;
import java.util.List;
import java.util.Random;
import Website_App.Backend.Player;

public class GameState{
    boolean GameStatus;//Track Game Status
    boolean player;//Track player status
    boolean theComputer;//Track AI status
    Board currentBoard;
    Cards currentCards;
    List<Player>currentPlayer;
    

    private static final Random goesFirst= new Random();
    
    public GameState(){
        this.GameStatus=false;
        this.player=true;
        this.theComputer=true;
    }

    public void startGame(){
        this.GameStatus=true;
    }
    
    public void endGame(){
        this.GameStatus=false;//Can be used as a resign feature
    }

    public String coinFlip(){
        if(goesFirst.nextBoolean()){
           return "Heads";
        }
        else{
           return "Tails";
        }
    }
    public void killPlayer(){
        this.player=false;
        endGame();
    }
    public void killComputer(){
        this.theComputer=false;
        endGame();
    }
    public void updatePlayerStatus(boolean status){
        this.player=status;
    }
}