package com.chefmania.website_app.Backend;

import java.util.ArrayList;
import java.util.List;
import com.chefmania.website_app.Backend.Components.Cards;
import com.chefmania.website_app.Backend.Components.Piece;
import com.chefmania.website_app.Backend.Components.MainPiece;
import com.chefmania.website_app.Backend.Components.SecondaryPiece;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Player {
    @JsonProperty("cards")
    private List<Cards> cards = new ArrayList<>();
    private List<Piece> pieces;
    @JsonProperty("hasWon")
    private boolean hasWon = false;
    @JsonProperty("chef")
    private boolean isChef;

    public Player() {}

    public Player(boolean isChef, List<Piece> pieces, List<Cards> yourCards) {
        this.isChef = isChef;
        this.cards = new ArrayList<>();
        for (Cards c : yourCards) {
            this.cards.add(new Cards(c)); // Assuming copy constructor exists
        }
        this.pieces = new ArrayList<>();
        for (Piece p : pieces) {
            this.pieces.add(p.clone());
        }
    }

    public Player(Player player) {
        // Deep copy pieces
        this.pieces = new ArrayList<>();
        for (Piece p : player.getPieces()) {
            this.pieces.add(p.clone());
        }
        // Deep copy cards
        this.cards = new ArrayList<>();
        for (Cards c : player.getCards()) {
            this.cards.add(new Cards(c));
        }
        this.isChef = player.isChef;
        this.hasWon = player.hasWon;
    }

    public List<Piece> getPieces() {
        return pieces;
    }

    public void setPieces(List<Piece> pieces) {
        this.pieces = pieces;
    }

    public List<Cards> getCards() {
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


    // Exchange cards by removing used one and adding new center card
    public void exchangeCards(Cards currentUsedCard, Cards newCardInMiddle) {
        cards.remove(currentUsedCard);
        cards.add(newCardInMiddle);
    }
}
