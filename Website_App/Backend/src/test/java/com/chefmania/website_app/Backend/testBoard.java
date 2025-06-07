package com.chefmania.website_app.Backend;
import java.util.Arrays;
import java.util.List;
import com.chefmania.website_app.Backend.Components.Board;
import com.chefmania.website_app.Backend.Components.Cards;
import com.chefmania.website_app.Backend.Components.Coordinates;
import com.chefmania.website_app.Backend.Components.MainPiece;
import com.chefmania.website_app.Backend.Components.MoveSet;
import com.chefmania.website_app.Backend.Components.Piece;
public class testBoard{
	
	public static void main(String[] args){
	//Testing the Board Positions to see if its returning correctly
    Board theBoard= new Board();
    Piece sidePiece= new MainPiece(true,new Coordinates(0,1));
    Piece OppPiece= new MainPiece(true,new Coordinates(4,0));
    for(int i=0;i<5;i++) {
    Coordinates Position = new Coordinates(4,i);
    Piece thePiece=theBoard.getPiece(Position);
   System.out.println(thePiece);
    }
   //Now testing the Move Method, will test both valid and invalid move also if other player on
   //square
    
    //Should Work
    try {    	
     theBoard.movePiece(sidePiece,new Coordinates(1,2));
     System.out.println("Successful");
    }
    catch(Exception e) {
    	System.out.println("Error moving the piece"+ e.getMessage());
    }
    //Out of bound and Capturing Opponents piece is successful
    try {
        theBoard.movePiece(sidePiece,new Coordinates(3,0));
        System.out.println("Successful");
       }
       catch(Exception e) {
       	System.out.println("Error moving the piece"+ e.getMessage());
       }
    boolean result=testCaseCards();
    
   }

	private static boolean testCaseCards() {
		//Testing Moveset and Cards classes 
	    MoveSet yourCards= new MoveSet();
	    //Works
	    List<Cards>myCards;
	    myCards=yourCards.getGameCards();
	    List<int[]>yourMoves;
	    for(Cards cards: myCards) {
	    	yourMoves=cards.getCard();
	    	System.out.println("CardsSet1"+cards);
	    	System.out.println("CardName "+ cards.getNames());
	    	for (int[] move : yourMoves) {
		        System.out.println(Arrays.toString(move));
		    }
	    }
	    //Works
	    MoveSet yourCards2= new MoveSet();
	    List<Cards>myCards2;
	    myCards2=yourCards2.getGameCards();
	    for(Cards cards: myCards2) {
	    	System.out.println("CardSet2"+cards);
	    	System.out.println("CardName2 "+ cards.getNames());
	    }
	    
		return true;
	}
}
