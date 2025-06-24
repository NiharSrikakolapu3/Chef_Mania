//All Good
package com.chefmania.website_app.Backend.Components;
/*
 * Student Chef or Student cook
 */
public class SecondaryPiece extends Piece{

  public SecondaryPiece(boolean isChef, Coordinates position, String name) {
    super(isChef, position, name);
  }
  
  @Override
  public SecondaryPiece clone() {
      return (SecondaryPiece) super.clone();
  }

  
}
