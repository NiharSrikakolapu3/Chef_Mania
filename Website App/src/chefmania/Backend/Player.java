package chefmania.Backend;

import java.util.ArrayList;
import java.util.List;
import chefmania.Backend.Components.*;


public class Player {
  private List<Cards> cards = new ArrayList<>();
  private boolean isChef;
  private boolean hasWon = false;

  public Player(boolean isChef) {
    this.isChef = isChef;
  }


  public List<Cards> getCards() {
    return cards;
  }

  public boolean HasWon() {
    return hasWon;
  }

  public void setWon(boolean hasWon) {
    this.hasWon = hasWon;
  }

  public boolean isChef() {
    return isChef;
  }
  
  
  // To d0
  public void drawCard(Cards yourCard) {
    cards.add(yourCard);
  } 

  // Draw from the middle
  public void exchangeCards(Cards currentUsedCard, Cards newCardInMiddle) {
    cards.remove(currentUsedCard);
    drawCard(newCardInMiddle);
  }
}
