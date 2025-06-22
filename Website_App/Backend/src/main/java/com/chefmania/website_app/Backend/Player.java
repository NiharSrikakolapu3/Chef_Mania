package com.chefmania.website_app.Backend;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Component;
import com.chefmania.website_app.Backend.Components.Board;
import com.chefmania.website_app.Backend.Components.Cards;
import com.chefmania.website_app.Backend.Components.Coordinates;
import com.chefmania.website_app.Backend.Components.MainPiece;
import com.chefmania.website_app.Backend.Components.Piece;
import com.chefmania.website_app.Backend.Components.SecondaryPiece;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Player {
  @JsonProperty("cards")
    private List<Cards> cards = new ArrayList<>();
    private List<Piece> pieces;
    private boolean hasWon = false;
    @JsonProperty("chef")
    private boolean isChef;
    
    public Player() {
      
    }

    public Player(boolean isChef, List<Piece> pieces,List<Cards> yourCards ) {
        this.cards =yourCards;
        this.pieces = pieces;
        this.isChef = isChef;
    }
    @SuppressWarnings("unchecked")
	public Player(Player player) {
    	List<Piece> copiedPieces = new ArrayList<>();
    	for (Piece p : player.getPieces()) {
    		if(p instanceof SecondaryPiece) {
    	    copiedPieces.add(new SecondaryPiece(p.isChef(),p.getPostion(), p.getName()));
    		}
    		else {
    			copiedPieces.add(new MainPiece(p.isChef(),p.getPostion(), p.getName()));	
    		}
    	}
    	this.pieces = copiedPieces;
    	this.cards = new ArrayList<>();
    	for (Cards c : player.getCards()) {
//    	    List<int[]> copiedMoves = new ArrayList<>();
//    	    for (int[] move : c.getCard()) {
//    	        copiedMoves.add(new int[] { move[0], move[1] });
//    	    }
//    	    this.yourCards.add(new Cards(c.getNames(), copiedMoves));
    	  this.cards.add(c);
    	}
    	  this.isChef=player.isChef;
    	  this.hasWon=player.hasWon;
    }

 
  public List<Piece> getPieces() {
      return pieces;
  }
  

  public void setPieces(List<Piece> pieces) {
      this.pieces = pieces;
  }


  public List<Cards> getCards() {
    if (cards == null) {
      cards = new ArrayList<>();
    }
    return cards;
}
  
 
  public void setCards(List<Cards> cards) {
      this.cards = cards;
  }
  
 
  public boolean isChef() {
      return isChef;
  }
  
  
  public void setChef(boolean isChef) {
      this.isChef = isChef;
  }

  public boolean hasWon() {
      return hasWon;
  }

 
  public void setHasWon(boolean hasWon) {
      this.hasWon = hasWon;
  }

    public void drawCard(Cards yourCard) {
      cards.add(yourCard);
  }

    // Draw from the middle
    public void exchangeCards(Cards currentUsedCard, Cards newCardInMiddle) {
      cards.remove(currentUsedCard);
        drawCard(newCardInMiddle);
    }
    @Override
    public String toString() {
    	String result="";
    	for(Piece p: pieces) {
    	 result="\n "+ p.toString();
    		
    	}
    	return result;
    }
}

