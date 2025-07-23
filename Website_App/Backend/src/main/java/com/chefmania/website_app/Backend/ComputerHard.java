package com.chefmania.website_app.Backend;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.chefmania.website_app.Backend.Components.Cards;
import com.chefmania.website_app.Backend.Components.Coordinates;
import com.chefmania.website_app.Backend.Components.MainPiece;
import com.chefmania.website_app.Backend.Components.Piece;

public class ComputerHard extends ComputerNormal  {
  private static final Logger logger = LoggerFactory.getLogger(GameController.class);
  public ComputerHard(Computer computer) {
    super(computer);
  }
  
  @Override
  public double heuristic(GameController state) {
    logger.info("Hard DIFF: GOT TO heuristic");
    List<Piece> computerPiece = state.getPieces(true);
    List<Piece> playerPiece = state.getPieces(false);
    double score = 0;
    Coordinates playerBase = new Coordinates(4, 2);
    Coordinates computerBase = new Coordinates(0, 2);
    
    
    for(Piece p : computerPiece) {
      if(p instanceof MainPiece) {
        score += 5;
        
        int distanceToPlayerBase = Math.abs(p.getPostion().getX() - playerBase.getX()) 
            + Math.abs(p.getPostion().getY() - playerBase.getY());
        
        score -= distanceToPlayerBase * 0.1;
        if(danger(state) == true) {
          logger.info("NORMAL DIFF: GOT TO heuristic");
          score -=50;
        }
        
      }
      else {
        score += 1;
      }
      //being at center --> better board control(2 x 2)
      //More closer = less penalty on score
      int centerScore = Math.abs(p.getPostion().getX() - 2) + Math.abs(p.getPostion().getY() - 2);
      score -= centerScore * 0.1;
    }
    
    for(Piece p : playerPiece) {
      if(p instanceof MainPiece) {
        score-= 5;
        int distanceToComputerBase = Math.abs(p.getPostion().getX() - computerBase.getX()) 
            + Math.abs(p.getPostion().getY() - computerBase.getY());
        
        score -= distanceToComputerBase * 0.1;
      }
      else {
        score -=1;
      }
      int centerScore = Math.abs(p.getPostion().getX() - 2) + Math.abs(p.getPostion().getY() - 2);
      score += centerScore * 0.1;
    }
    return score;
    
  }
  
  
  public boolean danger(GameController currentState) {
    
    Piece computerMain = null;
    for(Piece p : currentState.getPieces(true)) {
      if(p instanceof MainPiece) {
        computerMain = p;
        break;
      }
    }
    
    List<List<GameController>>allMovesForPlayer = currentState.getComputer().succPlayer(currentState);
    for(List<GameController> moves: allMovesForPlayer)   {
      for(GameController move : moves) {
       for(Cards card :move.playerCards) {
         for(Piece playerPieces: move.playerPieces) {
           List<Coordinates> validMoves = card.getAllValidMoves(playerPieces.getPostion(), false);
           for(Coordinates m: validMoves) {
             if(m== computerMain.getPostion()) {
               return true;
             }
           }
         } 
       }
      }
    }
    return false;
  }

}
