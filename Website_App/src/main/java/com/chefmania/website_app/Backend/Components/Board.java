package com.chefmania.website_app.Backend.Components;

public class Board implements Cloneable {
  public Piece[][] board = new Piece[5][5];

  public Board() {
    // COOK SIDE
    for (int i = 0; i < board.length; i++) {
      if (i == 2) {
        board[0][i] = new MainPiece(true, new Coordinates(0, i));
      } else {
        board[0][i] = new SecondaryPiece(true, new Coordinates(0, i));
      }
    }
    // CHEF SIDE
    for (int i = 0; i < board.length; i++) {
      if (i == 2) {
        board[4][i] = new MainPiece(false, new Coordinates(4, i));
      } else {
        board[4][i] = new SecondaryPiece(false, new Coordinates(4, i));
      }
    }
  }

  public Board(Board other) {
    this.board = new Piece[other.board.length][other.board[0].length];
    for (int i = 0; i < other.board.length; i++) {
      for (int j = 0; j < other.board[0].length; j++) {
        if (other.board[i][j] != null) {
          if (other.board[i][j] instanceof SecondaryPiece) {
            this.board[i][j] =
                new SecondaryPiece(other.board[i][j].isChef(), other.board[i][j].position);
          } else {
            this.board[i][j] =
                new MainPiece(other.board[i][j].isChef(), other.board[i][j].position);
          }
        }
      }
    }
  }





  public Piece getPiece(Coordinates position) {
    Piece piece = board[position.getX()][position.getY()];
    return piece;
  }

  public boolean possibleMove(Piece piece, Coordinates newPosition) {
    int oldX = piece.getPostion().getX();
    int oldY = piece.getPostion().getY();
    int newX = newPosition.getX();
    int newY = newPosition.getY();
    if (newX < 0 || newX >= 5 || newY < 0 || newY >= 5) {
      System.out.println("Move is out of bound!");
      return false;
    }
    // Check if there is a piece there --> opp or your own!
    if (board[newX][newY] != null && board[newX][newY].isChef() != piece.isChef()) {
      board[newX][newY].setAlive(false);
    } else if (board[newX][newY] != null && board[newX][newY].isChef() == piece.isChef()) {
      System.out.println("Space occupied by your own piece");
      return false;
    }
    return true;
  }

  public void movePiece(Piece piece, Coordinates newPosition) {
    boolean result = possibleMove(piece, newPosition);
    if (result) {
      int oldX = piece.getPostion().getX();
      int oldY = piece.getPostion().getY();
      int newX = newPosition.getX();
      int newY = newPosition.getY();
      board[oldX][oldY] = null;
      piece.setPostion(newPosition);
      board[newX][newY] = piece;
    } else {
      System.out.println("Cant move there");
    }

  }

  public Piece[][] returnBoard() {
    return this.board;
  }
}
