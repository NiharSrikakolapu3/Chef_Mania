//All Good
package com.chefmania.website_app.Backend.Components;
public class Coordinates implements Cloneable{
  //Current piece coordinate in board
  private int x;
  private int y;
  
  public Coordinates(int x, int y) {
    super();
    this.x = x;
    this.y = y;
  }

  public int getX() {
    return x;
  }

  public int getY() {
    return y;
  }
  @Override
  public String toString() {
      String toReturn = "Your X and Y coordinates are: "+this.x+"," +this.y;
      return toReturn;
  }
}
