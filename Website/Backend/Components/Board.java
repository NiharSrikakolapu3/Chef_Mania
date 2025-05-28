package Chef_Mania.Website.Backend.Components;

public class Board {
  private Piece[][] board = new Piece[5][5];
  
  public void placePiece(Piece piece) {
    Coordinates position = piece.getPostion();
    board[position.getX()][position.getY()] = piece;
  }

  public void movePiece(Piece piece, Coordinates newPostion) {

    int oldX = piece.getPostion().getX();
    int oldY = piece.getPostion().getY();
    int newX = newPostion.getX();
    int newY = newPostion.getY();
    if (newX < 0 || newX >= 5 || newY < 0 || newY >= 5) {
      throw new IllegalArgumentException("Move is out of bound!");
    }


    // Check if there is an piece there --> opp or your own!
    if (board[newX][newY] != null && board[newX][newY].isChef() != piece.isChef()) {
      board[newX][newY].setAlive(false);
    } else if (board[newX][newY] != null && board[newX][newY].isChef() == piece.isChef()) {
      throw new IllegalArgumentException("Space occupied by your own piece");
    }
    
    board[oldX][oldY] = null;
    piece.setPostion(newPostion);
    board[newX][newY] = piece;
    
  }

}
