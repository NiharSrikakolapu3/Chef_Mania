package com.chefmania.website_app.Backend.RestAPI;

import java.util.List;

import org.springframework.stereotype.Service;

import com.chefmania.website_app.Backend.Components.Board;
import com.chefmania.website_app.Backend.Components.Cards;
import com.chefmania.website_app.Backend.Components.Coordinates;
import com.chefmania.website_app.Backend.GameController;
import com.chefmania.website_app.Backend.Player;

@Service    
public class GameService {
  private GameController game ;
  
  public GameController createNewGame( ) {
    this.game = new GameController();
    return this.game;
  }
 
  public GameController getGame() {
    return this.game;
  }
  
  public Board getBoard() {
	  return this.game.getBoard();
  }
  public Cards getCentedCard() {
	  return this.game.getCenterCard();
  }
  public List<Cards> getPlayerCards() {
	  return this.game.getPlayer().getCards();
	}
  public List<Cards> getComputerCards() {
	  return this.game.getComputer().getCards();
	}
  public void makeMove(Coordinates from, Coordinates to, Cards cardUsed, Player currentMovingPlayer) {
   
//    if (currentPlayerMoving == null) {
//      if (game.getCurrentTurnLabel().equalsIgnoreCase("player")) {
//          currentPlayerMoving = game.getPlayer();
//      } else {
//          currentPlayerMoving = game.getComputer();
//      }
//  }
  game.makeMove(from, to, cardUsed, currentMovingPlayer);
}
  public String getTurn() {
	return game.getCurrentTurnLabel();
  }
  public boolean gameStatus(){
	  return game.getGameStatus();
  }
 
  public void quitGame() {
	  this.game=null;
  }
}
