package Chef_Mania.Website.Backend.Components;
import java.util.*;

public class Cards {
  private String name;
  //A List to see all moves position a card
  private List<[]> moves;
  
  
  public Cards(String name, List<int[]> moves) {
    super();
    this.name = name;
    this.moves = moves;
  }

  public void addMoves(int[]cardsMoves){
    this.moves.add(cardsMoves);
  }
  
  public String getNames() {
    return name;
    
  }
  
  /*
   * Allows you to see for a particular (x,y) piece location where it can move to based on the card
   * And player  
   * 
   * 
   * Returns where the piece can move
   */
  public List<int[]> getAllValidMoves() {
    //return the moves
    return this.moves;
  }
  
  
  
  
  
}