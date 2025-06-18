package com.chefmania.website_app.Backend.RestAPI;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.chefmania.website_app.Backend.GameController;
import com.chefmania.website_app.Backend.Player;
import com.chefmania.website_app.Backend.Components.Board;
import com.chefmania.website_app.Backend.Components.Cards;
import com.chefmania.website_app.Backend.Components.Coordinates;

////api/game/cards/player → get players card
///api/game/cards/computer – get computer card
///api/game/cards/center - get center card/
@RestController
@RequestMapping("/api/game")
public class RestFulGameAPI {

  private GameService service;
  
  public RestFulGameAPI(GameService service) {
	    this.service = service;
  }
	  
 //Create the game instance
  @PostMapping
  public GameController createNewGame() {
    return service.createNewGame();
  }
  
  //game game instance
  @GetMapping("/gameRunning")
  public GameController getGameInstance() {
    return service.getGame();
  }
  
  @GetMapping("/board")
  public Board getGameBoard() {
	  return service.getBoard();
  }
  @GetMapping("/center")
  public Cards getGameCard(){
	  return service.getCentedCard();
  }
  @GetMapping("/player")
  public List<Cards> getPlayerCards(){
	 return service.getPlayerCards();
  }
  @GetMapping("/computer")
  public List<Cards> getComputerCards(){
	 return service.getComputerCards();
  }
  @GetMapping("/currentTurn")
  public String getCurrentTurn(){
	 return service.getTurn();
  }
  @GetMapping("/gameStatus")
  public boolean gameStatus(){
	  return service.gameStatus();
  }
  
  @PutMapping("/playerMove")
  public GameController makePlayerMove(@RequestBody ChefManiaMoveClass chefMania) {
    Player current = null;
    if(chefMania.isChef()) {
      current= service.getGame().getComputer();
    } else {
     current = service.getGame().getPlayer();
    }
	  service.makeMove(chefMania.getFrom(), chefMania.getTo(), chefMania.getCardUsed() , current);
	  return service.getGame();
  }
  @DeleteMapping("/reset")
  public void Concede() {
	  service.quitGame();
  }

  
}
