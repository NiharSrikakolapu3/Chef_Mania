//All Good
package Website_App.Backend.Components;

/*
 * Master Chef or Master Cook
 */
public class MainPiece extends Piece{
  public MainPiece(boolean isChef, Coordinates position) {
    super(isChef, position);
  }
  
  // --> did it reach the winning place of the opponent MainPiece
  public boolean opponentPostionReached(Coordinates opponenetMainPiecePostion) {
   return this.position.equals(opponenetMainPiecePostion);    
  }
  

}
