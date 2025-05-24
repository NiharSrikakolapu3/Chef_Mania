package Chef_Mania.Website.Backend.Components;

/*
 * Master Chef or Master Cook
 */
public class MainPiece extends Piece{
// --> 
  public MainPiece(boolean isChef, Coordinates postion) {
    super(isChef, postion);
  }
  
  // --> did it reach the winning place of the opponent MainPiece
  public boolean opponentPostionReached() {
    return false;
    
  }
  

}
