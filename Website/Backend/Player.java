import Chef_Mania.Website.Backend.Components;
package Chef_Mania.Website.Backend;

public class Player{
    Piece  sideChef;
    Piece  MainChef;
    //Instantiate the piece 
    public void instantiateChef(Piece Chef,boolean isChef,int x, int y){
        Coordinates position= new Coordinates(x,y);
        this.sideChef=new Piece(isChef,position);
    }
    //Do this after impementing move class
    public boolean isPlayersTurn(){
    
    }
    public void instantiateMainChef(MainPiece chef,boolean isChef, int x, int y){
        Coordinates position= new Coordinates(x,y);
        this.MainChef=new MainPiece(isChef,position);
    }
    public Coordinates trackCurrentPosition(){
        return this.chef.getPostion();
    }
    //To d0
    public void drawCard(Card yourCard,String name){

    }
        
    public void setChefPosition(int x, int y){
        Coordinates position= new Position(x,y);
        this.chef.setPostion(position);
    }
    //Draw from the middle
    public void exchangeCards(){

    }
    //returns true if player win
    public boolean victoryStatus(){

    }
    
    
}