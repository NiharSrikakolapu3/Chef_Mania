import java.util.*;
import package Chef_Mania.Website.Backend.Components;
package Chef_Mania.Website.Backend;

public class Player {
    private List<Cards> cards;
    private List<Cards> yourCards;
    ArrayList<Piece> sideChef = new ArrayList<>();
    Piece MainChef;
    private boolean hasWon = false;
    Move playerCards = new Move();

    public Player() {
        this.cards = playerCards.getGameCards();
    }

    // Instantiate the piece
    public void instantiateChef(Piece Chef, boolean isChef, int x, int y) {
        Coordinates position = new Coordinates(x, y);
        this.sideChef.add(new Piece(isChef, position));
    }

    public void instantiateMainChef(MainPiece chef, boolean isChef, int x, int y) {
        Coordinates position = new Coordinates(x, y);
        this.MainChef = new MainPiece(isChef, position);
    }

    public Coordinates trackCurrentPosition() {
        return this.sideChef.get(0).getPosition(); 
    }

    public List<Cards> getCards() {
        return this.cards;
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

    // Draw from the middle
    public void exchangeCards(Cards currentUsedCard, Cards newCardInMiddle) {
        yourCards.remove(currentUsedCard);
        drawCard(newCardInMiddle);
    }

    public void setChefPosition(int x, int y) {
        Coordinates position = new Coordinates(x, y);
        this.sideChef.setPosition(position); 
    }
}