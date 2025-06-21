package com.chefmania.website_app.Backend.RestAPI;
import com.chefmania.website_app.Backend.Components.Cards;
import com.chefmania.website_app.Backend.Components.Coordinates;


public class ValidMoveRequest {
    private Cards yourCard;
    private Coordinates yourPieces;

    public Cards getYourCard() {
        return yourCard;
    }

    public void setYourCard(Cards yourCard) {
        this.yourCard = yourCard;
    }

    public Coordinates getYourPieces() {
        return yourPieces;
    }

    public void setYourPieces(Coordinates yourPieces) {
        this.yourPieces = yourPieces;
    }
}
