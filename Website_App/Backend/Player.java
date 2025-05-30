package Website_App.Backend;
import java.util.ArrayList;
import java.util.List;
import Website_App.Backend.Components.Board;
import Website_App.Backend.Components.Cards;
import Website_App.Backend.Components.Coordinates;
import Website_App.Backend.Components.MoveSet;
import Website_App.Backend.Components.Piece;

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

//    // Instantiate the piece
//    public void instantiateChef(Piece Chef, boolean isChef, int x, int y) {
//        Coordinates position = new Coordinates(x, y);
//        this.sideChef.add(new SecondaryPiece(isChef, position));
//    }
//
//    public void instantiateMainChef(MainPiece chef, boolean isChef, int x, int y) {
//        Coordinates position = new Coordinates(x, y);
//        this.MainChef = new MainPiece(isChef, position);
//    }

//    public Coordinates trackCurrentPosition() {
//        return this.sideChef.get(0).getPosition(); 
//    }
    
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