package Website_App.Backend.Tests;

import Website_App.Backend.Components.Board;
import Website_App.Backend.Components.Coordinates;
import Website_App.Backend.Components.Piece;

public class testBoard{
   public void main(String[]args){
    Board theBoard= new Board();
    Piece thePiece=theBoard.getPiece( new Coordinates(0, 1));
    System.out.println(thePiece);
   }
}
