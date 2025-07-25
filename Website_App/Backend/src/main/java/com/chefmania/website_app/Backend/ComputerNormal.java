package com.chefmania.website_app.Backend;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.chefmania.website_app.Backend.Components.Coordinates;
import com.chefmania.website_app.Backend.Components.MainPiece;
import com.chefmania.website_app.Backend.Components.Piece;

public class ComputerNormal extends Computer {
  private static final Logger logger = LoggerFactory.getLogger(GameController.class);
  public ComputerNormal(Computer baseComputer) {
    super(baseComputer);
}


  @Override
  public double heuristic(GameController state) {
    logger.info("NORMAL DIFF: GOT TO heuristic");
    List<Piece> computerPiece = state.getPieces(true);
    List<Piece> playerPiece = state.getPieces(false);
    double score = 0;
    Coordinates playerBase = new Coordinates(4, 2);
    Coordinates computerBase = new Coordinates(0, 2);
    
    
    for(Piece p : computerPiece) {
      if(p instanceof MainPiece) {
        score += 5;
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
      }
      else {
        score -=1;
      }
      int centerScore = Math.abs(p.getPostion().getX() - 2) + Math.abs(p.getPostion().getY() - 2);
      score += centerScore * 0.1;
    }
    return score;
    
  }
  
}