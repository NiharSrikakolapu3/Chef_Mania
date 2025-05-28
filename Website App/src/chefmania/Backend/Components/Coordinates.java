package chefmania.Backend.Components;
public class Coordinates{
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
}