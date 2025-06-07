//All Good
package com.chefmania.website_app.Backend.Components;
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
