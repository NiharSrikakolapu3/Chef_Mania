//All Good
package com.chefmania.website_app.Backend.Components;

/*
 * Master Chef or Master Cook
 */
public class MainPiece extends Piece{
  public MainPiece(boolean isChef, Coordinates position, String name) {
    super(isChef, position,name);
  }
  
  // --> did it reach the winning place of the opponent MainPiece
  public boolean opponentPostionReached(Coordinates opponenetMainPiecePostion) {
   return this.position.equals(opponenetMainPiecePostion);    
  }
  
  public MainPiece clone(){
	  return new MainPiece(this.isChef,this.position, this.name);
	}

}
