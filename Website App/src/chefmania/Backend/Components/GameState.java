package chefmania.Backend.Components;

import java.util.Random;

public class GameState{
    boolean gameStatus;//Track Game Status
    boolean playerAlive;//Track player status
    boolean theComputerAlive;//Track AI status
    private static final Random goesFirst= new Random();
    
    public GameState(){
        this.gameStatus=false;
        this.playerAlive=true;
        this.theComputerAlive=true;
    }

    public void startGame(){
        this.gameStatus=true;
    }
    
    public void endGame(){
        this.gameStatus=false;//Can be used as a resign feature
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
        this.playerAlive=false;
        endGame();
    }
    public void killComputer(){
        this.theComputerAlive=false;
        endGame();
    }
    
    public boolean isPlayerAlive() {
      return playerAlive;
    }
    
    public boolean isComputerAlive() {
      return theComputerAlive;
    }
    public void updatePlayerStatus(boolean status){
        this.playerAlive=status;
    }
    public void updateComputerStatus(boolean status){
        this.theComputerAlive=status;
    }
    

}