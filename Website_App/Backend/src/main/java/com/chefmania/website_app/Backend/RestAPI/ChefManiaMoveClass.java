package com.chefmania.website_app.Backend.RestAPI;

import com.chefmania.website_app.Backend.Components.Cards;
import com.chefmania.website_app.Backend.Components.Coordinates;
import com.chefmania.website_app.Backend.Player;

public class ChefManiaMoveClass {
	 
	  private Coordinates from;
	  private Coordinates to;
	  private Cards cardUsed;
	  private boolean chef;
	  
	  public ChefManiaMoveClass() {
		  
	  }
	  
	  
	  
	  public void setFrom(Coordinates newFrom) {
		  this.from=newFrom;
	  }
	  public Coordinates getFrom() {
        return this.from;
    }
	  
	  public void setTo(Coordinates newTo) {
		  this.to=newTo;
	  }
	  public Coordinates getTo() {
        return this.to;
    }
	  
	  public void setCardUsed(Cards cardUsed) {
		  this.cardUsed=cardUsed;
	  }
	  public Cards getCardUsed() {
	      return cardUsed;
	    }

    public void setChef(boolean chef) {
      this.chef = chef;
    }

    public boolean isChef() {
      return chef;
    }

}
