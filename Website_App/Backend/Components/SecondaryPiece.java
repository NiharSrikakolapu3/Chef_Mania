//All Good
package Website_App.Backend.Components;
/*
 * Student Chef or Student cook
 */
public class SecondaryPiece extends Piece{

  public SecondaryPiece(boolean isChef, Coordinates position) {
    super(isChef, position);
  }
  
  public SecondaryPiece clone(){
	  return new SecondaryPiece(this.isChef,this.position);
	}
  
}
