package com.chefmania.website_app.Backend.RestAPI;

import org.springframework.stereotype.Service;
import com.chefmania.website_app.Backend.GameController;

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
}
