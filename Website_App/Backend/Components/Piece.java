package Website_App.Backend.Components;

public abstract class Piece implements Cloneable{
  protected boolean alive;
  // Either Cook --> master or student or chef --> master or student
  protected boolean isChef;
  protected Coordinates position;
  
  public Piece(boolean isChef, Coordinates position) {
    this.alive = true;
    this.isChef = isChef;
    this.position = position;
  }
  @Override
  public Piece clone() {
      try {
          Piece clonedPiece = (Piece) super.clone();
          clonedPiece.position = new Coordinates(position.getX(), position.getY());
          return clonedPiece;
      } catch (CloneNotSupportedException e) {
          e.printStackTrace();
          return null;
      }
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
  @Override
  public String toString() {
	  String toReturn="";
	  toReturn+=position.toString();
	  return toReturn;
  }
  
  
  
  

}
