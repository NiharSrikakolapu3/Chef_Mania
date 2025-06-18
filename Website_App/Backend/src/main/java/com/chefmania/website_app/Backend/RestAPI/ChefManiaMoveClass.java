package com.chefmania.website_app.Backend.RestAPI;

import com.chefmania.website_app.Backend.Components.Cards;
import com.chefmania.website_app.Backend.Components.Coordinates;
import com.chefmania.website_app.Backend.Player;

public class ChefManiaMoveClass {
	 
	  private Coordinates from;
	  private Coordinates to;
	  private Cards cardUsed;
	  private Player currentPlayer;
	  
	  public ChefManiaMoveClass() {
		  
	  }
	  
	  
	  
	  public void setFrom(Coordinates newFrom) {
		  this.from=newFrom;
	  }
	  
	  public void setTo(Coordinates newTo) {
		  this.to=newTo;
	  }
	  
	  public void setCardUsed(Cards cardUsed) {
		  this.cardUsed=cardUsed;
	  }
	  
	  public void setCurrentPlayer(Player currentPlayer) {
		  this.currentPlayer=currentPlayer;
	  }


	  public Coordinates getFrom() {
		  return this.from;
	  }
	  
	  public Coordinates getTo() {
		  return this.to;
	  }
	  
	  public Player getCurrentPlayer() {
		  return this.currentPlayer;
	  }
	  public Cards getCurrentCenterCard() {
		  return this.cardUsed;
	  }

}
