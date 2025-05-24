package Chef_Mania.Website.Backend.Components;

import java.util.ArrayList;
import java.util.List;

public class Cards {
  private String name;
  //A List to see all moves position a card
  private List<int[]> moves;
  
  
  public Cards(String name, List<int[]> moves) {
    super();
    this.name = name;
    this.moves = moves;
  }
  
  /*
   * Allows you to see for a particular (x,y) piece location where it can move to based on the card
   * And player  
   * 
   * 
   * Returns where the piece can move
   */
  public List<int[]> getAllValidMoves(int x, int y) {
   List<int[]> validMoves = new ArrayList<>();
   
    return moves;
  }
  
  
  
  
  
}