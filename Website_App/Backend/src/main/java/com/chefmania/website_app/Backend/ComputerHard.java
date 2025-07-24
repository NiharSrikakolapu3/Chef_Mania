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

    Coordinates playerBase = new Coordinates(4, 2);
    Coordinates computerBase = new Coordinates(0, 2);
    double score = 0;

    Piece computerMain=null;
    Piece playerMain=null;
    
    for(Piece p: computerPiece ){
      if(p instanceof MainPiece){
        computerMain=p;
        break;
      }
    }
     for(Piece p: playerPiece){
      if(p instanceof MainPiece){
        playerMain=p;
        break;
      }
    }
    for(Piece p : computerPiece) {
      if(p instanceof MainPiece) {
        score += 5;
        
        int distanceToPlayerBase = Math.abs(p.getPostion().getX() - playerBase.getX()) 
            + Math.abs(p.getPostion().getY() - playerBase.getY());
        
         score += (5 - distanceToPlayerBase) * 0.5;

        if (danger(state)) {
          logger.info("Main piece in danger");
          score -= 30;

          if (distanceToPlayerBase < 3) {
            score += 20;
          }
        } else {
          if (distanceToPlayerBase > 2) {
            score -= 5;
          }
        }

      } else {
        score += 1; // Other pieces contribute small value
      }

      if (playerMain != null) {
        for (Cards card : state.computerCards) {
          List<Coordinates> attackMoves = card.getAllValidMoves(p.getPostion(), true);
          for (Coordinates move : attackMoves) {
            if (move.equals(playerMain.getPostion())) {
              logger.info("Can capture player MainPiece!");
              score += 50; // Big bonus for capture opportunity
            }
          }
        }
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
    for (Piece p : currentState.getPieces(true)) {
      if (p instanceof MainPiece) {
        computerMain = p;
        break;
      }
    }

    if (computerMain == null) return false;

    Coordinates mainPos = computerMain.getPostion();
    List<Piece> playerPieces = currentState.getPieces(false);

    for (Piece playerPiece : playerPieces) {
      for (Cards card : currentState.playerCards) {
        List<Coordinates> validMoves = card.getAllValidMoves(playerPiece.getPostion(), false);
        for (Coordinates move : validMoves) {
          if (move.equals(mainPos)) {
            return true;
          }
        }
      }
    }

    return false;
  }

}