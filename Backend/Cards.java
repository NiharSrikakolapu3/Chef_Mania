package Chef_Mania.Backend;

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
   */
  public List<int[]> move(int x, int y) {
   //IMPLEMENT THIS 
    return moves;
  }
  
  
  
  
  
}