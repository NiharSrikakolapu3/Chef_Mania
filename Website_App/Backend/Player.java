package Website_App.Backend;
import java.util.List;
import java.util.ArrayList;
import Website_App.Backend.Components.Cards;
import Website_App.Backend.Components.Coordinates;
import Website_App.Backend.Components.MainPiece;
import Website_App.Backend.Components.Move;
import Website_App.Backend.Components.Piece;
import Website_App.Backend.Components.SecondaryPiece;

public class Player {
//    private List<Cards> cards;
    private List<Cards> yourCards;
//    ArrayList<Piece> sideChef = new ArrayList<>();
//    Piece MainChef;
    private boolean hasWon = false;
    Move playerCards = new Move();
    private boolean isChef;

    public Player(boolean isChef) {
        this.yourCards = playerCards.getGameCards();
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