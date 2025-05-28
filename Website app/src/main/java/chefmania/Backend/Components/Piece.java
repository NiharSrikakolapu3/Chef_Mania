package Chef_Mania.Website.Backend.Components;

public abstract class Piece {
  protected boolean alive;
  // Either Cook --> master or student or chef --> master or student
  protected boolean isChef;
  protected Coordinates position;
  
  public Piece(boolean isChef, Coordinates position) {
    this.alive = true;
    this.isChef = isChef;
    this.position = position;
  }

  public boolean isAlive() {
    return alive;
  }

  public void setAlive(boolean alive) {
    this.alive = alive;
  }

  public boolean isChef() {
    return isChef;
  }

  public Coordinates getPostion() {
    return position;
  }

  public void setPostion(Coordinates position) {
    this.position = position;
  }
  
  
  
  

}
