package Website_App.Backend.Components;

import java.util.ArrayList;
import java.util.List;

public class Cards{
  private String name;
  // A List to see all moves position a card
  private List<int[]> moves;


  public Cards(String name, List<int[]> moves) {
    super();
    this.name = name;
    this.moves = moves;
  }
  
 /* public static void main(String [] args) {
    List<int[]> movesList14 = new ArrayList<>();
    movesList14.add(new int[]{0,1});  
    movesList14.add(new int[]{1,-1}); 
    movesList14.add(new int[]{-1, -1});
    Cards card14 = new Cards("Pizza", movesList14);
    
    List<Coordinates> moves = card14.getAllValidMoves(new Coordinates(2, 2), false);
    for(Coordinates move : moves) {
      System.out.println("The Move is: " + move);
    }
    
  }*/
  public String getNames() {
    return name;
  }
  public List<int[]> getCard(){
	  List<int[]> copy = new ArrayList<>();
	    for (int[] move : this.moves) {
	        copy.add(new int[] { move[0], move[1] });
	    }
	    return copy;
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
        
      }
      else {
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
  public String toString() {
	  String toReturn= " "+ this.getNames()+ " "+ this.getCard();
	  return toReturn;
  }
}