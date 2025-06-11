package com.chefmania.website_app.Backend.RestAPI;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.chefmania.website_app.Backend.GameController;

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
  @GetMapping()
  public GameController getGameInstance() {
    return service.getGame();
  }
}
