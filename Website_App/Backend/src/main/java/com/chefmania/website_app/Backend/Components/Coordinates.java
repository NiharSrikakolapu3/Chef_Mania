//All Good
package com.chefmania.website_app.Backend.Components;

import org.springframework.stereotype.Component;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Coordinates {
  //Current piece coordinate in board
  private int x;
  private int y;
  public Coordinates() {
    
  }
  
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
  public boolean equals(Object o) {
      if (this == o) return true;
      if (o == null || getClass() != o.getClass()) return false;
      Coordinates that = (Coordinates) o;
      return x == that.x && y == that.y;
  }

  @Override
  public int hashCode() {
      return java.util.Objects.hash(x, y);
  }

  @Override
  public String toString() {
      String toReturn = "Your X and Y coordinates are: "+this.x+"," +this.y;
      return toReturn;
  }
}
