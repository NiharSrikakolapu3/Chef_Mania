package Chef_Mania.Website.Backend.Components;

public abstract class Piece {
  protected boolean alive;
  // Either Cook --> master or student or chef --> master or student
  protected boolean isChef;
  Coordinates postion;
  
  public Piece(boolean isChef, Coordinates postion) {
    this.alive = true;
    this.isChef = isChef;
    this.postion = postion;
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
    return postion;
  }

  public void setPostion(Coordinates postion) {
    this.postion = postion;
  }
  
  
  
  

}
