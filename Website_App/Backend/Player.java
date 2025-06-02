package Website_App.Backend;
import java.util.ArrayList;
import java.util.List;

import Website_App.Backend.Components.Board;
import Website_App.Backend.Components.Cards;
import Website_App.Backend.Components.Coordinates;
import Website_App.Backend.Components.MainPiece;
import Website_App.Backend.Components.Piece;
import Website_App.Backend.Components.SecondaryPiece;

public class Player {
//    private List<Cards> cards;
    private List<Cards> yourCards;
    private List<Piece> piece;
    private boolean hasWon = false;
    private boolean isChef;

    public Player(boolean isChef, List<Piece> pieces,List<Cards> yourCards ) {
        this.yourCards =yourCards;
        this.piece = pieces;
        this.isChef = isChef;
    }
    @SuppressWarnings("unchecked")
	public Player(Player player) {
    	List<Piece> copiedPieces = new ArrayList<>();
    	for (Piece p : player.getPieces()) {
    		if(p instanceof SecondaryPiece) {
    	    copiedPieces.add(new SecondaryPiece(p.isChef(),p.getPostion()));
    		}
    		else {
    			copiedPieces.add(new MainPiece(p.isChef(),p.getPostion()));	
    		}
    	}
    	this.piece = copiedPieces;
    	this.yourCards = new ArrayList<>();
    	for (Cards c : player.getCards()) {
    	    List<int[]> copiedMoves = new ArrayList<>();
    	    for (int[] move : c.getCard()) {
    	        copiedMoves.add(new int[] { move[0], move[1] });
    	    }
    	    this.yourCards.add(new Cards(c.getNames(), copiedMoves));
    	}
    	  this.isChef=player.isChef;
    	  this.hasWon=player.hasWon;
    }

  public List<List<Coordinates>> succ(Board board, List<Cards> cards, List<Piece> pieces) {
      List<List<Coordinates>> results = new ArrayList<>();
      for (Cards card : cards) {
          for (Piece piece : pieces) {
              List<Coordinates> moves = card.getAllValidMoves(piece.getPostion(), this.isChef());
              results.add(moves);
          }
      }
      return results;
  }
    
    public List<Piece> getPieces() {
      return piece;
    }
    
    public List<Cards> getCards() {
        return this.yourCards;
    }

    public boolean hasWon() {
        return hasWon;
    }

    public void setWon(boolean hasWon) {
        this.hasWon = hasWon;
    }

    public void drawCard(Cards yourCard) {
        yourCards.add(yourCard);
    }
    
    public boolean isChef() {
      return isChef;
    }

    // Draw from the middle
    public void exchangeCards(Cards currentUsedCard, Cards newCardInMiddle) {
        yourCards.remove(currentUsedCard);
        drawCard(newCardInMiddle);
    }


//    public void setChefPosition(int x, int y) {
//        Coordinates position = new Coordinates(x, y);
//        this.sideChef.setPosition(position); 
//    }
}