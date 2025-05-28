package Website_App.Backend.Components;

import java.util.ArrayList;
import java.util.List;

public class Cards {
  private String name;
  // A List to see all moves position a card
  private List<int[]> moves;


  public Cards(String name, List<int[]> moves) {
    super();
    this.name = name;
    this.moves = moves;
  }

  public String getNames() {
    return name;
  }

  /*
   * Allows you to see for a particular (x,y) piece location where it can move to based on the card
   * And player type
   * 
   * 
   * Returns where the piece can move
   */
  public List<Coordinates> getAllValidMoves(Coordinates ofPiece, boolean isChef) {
    List<Coordinates> validMoves = new ArrayList<>();
    for (int[] move : moves) {
      int x = move[0];
      int y = move[1];
      // check if player is chef or cook
      if (!isChef) {
        x = -x;
        y = -y;
      }
      Coordinates newCord = new Coordinates(ofPiece.getX() + x, ofPiece.getY() + y);
      // check bounds
      if (newCord.getX() >= 0 && newCord.getX() <= 4 && newCord.getY() >= 0
          && newCord.getY() <= 4) {
        validMoves.add(newCord);
      }
    }
    return validMoves;
  }
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
  public List<int[]> getCardMoveList() {
    //return the moves
    return this.moves;
   }
  }
}
