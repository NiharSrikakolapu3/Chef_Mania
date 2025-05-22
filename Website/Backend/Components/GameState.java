package Chef_Mania.Website.Backend.Components;
import java.util.Random;

public class GameState{
    boolean GameStatus;//Track Game Status
    boolean isChefAlive;//Track the chefs
    boolean isMasterChefAlive;//Tracks the main chef status 
    boolean player;//Track player status
    boolean theComputer;//Track AI status
    private Static final Random  goesFirst= new Random();
    
    public GameState(){
        this.GameStatus=false;
        this.MasterChef=true;
        this.player=true;
        this.theComputer=true;
        this.ChefAlive=true;
    }

    public void startGame(){
        this.GameStatus=true;
    }
    
    public void endGame(){
        this.GameStatus=false;//Can be used as a resign feature
    }

    public boolean ChefStatus(){
        return isChefAlive;
    }

    public boolean MasterChefStatus(){
       return isMasterChefAlive;
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
     public void updateMasterChefStatus(boolean status){
        this.isMasterChefAlive=status;
    }
    public void updateChefStatus(boolean status){
        this.isChefAlive=status;
    }
    public void updatePlayerStatus(boolean status){
        this.player=status;
    }
    public void updateComputerStatus(boolean status){
        this.theComputer=status;
    }


}