package com.chefmania.website_app.Backend;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.chefmania.website_app.Backend.Components.Cards;
import com.chefmania.website_app.Backend.Components.Coordinates;
import com.chefmania.website_app.Backend.Components.MainPiece;
import com.chefmania.website_app.Backend.Components.Piece;

public class ComputerHard extends Computer {

    private static final Logger logger = LoggerFactory.getLogger(GameController.class);

      
      public ComputerHard(Computer Computer) {
        super(Computer);
    }
  

    @Override
    public double heuristic(GameController state) {

        List<Piece> computerPieces = state.getPieces(true);
        List<Piece> playerPieces = state.getPieces(false);
        double score = 0;

        Coordinates playerBase = new Coordinates(4, 2);
        Coordinates computerBase = new Coordinates(0, 2);

        for (Piece p : computerPieces) {
            Coordinates pos = p.getPostion();

            // Distance to center
            int distToCenter = Math.abs(pos.getX() - 2) + Math.abs(pos.getY() - 2);
            double centerBonus = (6 - distToCenter) * 0.05;

            if (p instanceof MainPiece) {
                // Reduce early push for MainPiece
                score += 0.1;

                int distToPlayerBase = Math.abs(pos.getX() - playerBase.getX())
                        + Math.abs(pos.getY() - playerBase.getY());

                // Reduce aggressive push
                score += (6 - distToPlayerBase) * 0.05;

                // Reward nearby support pieces
                for (Piece ally : computerPieces) {
                    if (ally == p) continue;
                    int dist = Math.abs(pos.getX() - ally.getPostion().getX())
                             + Math.abs(pos.getY() - ally.getPostion().getY());
                    if (dist <= 2) {
                        score += 0.02;
                    }
                }
            } else {
                // Encourage normal pieces to be active
                score += 0.1;
                score += centerBonus;

                // Reward being near the MainPiece
                for (Piece ally : computerPieces) {
                    if (ally instanceof MainPiece) {
                        int dist = Math.abs(pos.getX() - ally.getPostion().getX())
                                 + Math.abs(pos.getY() - ally.getPostion().getY());
                        if (dist <= 3) {
                            score += 0.03;
                        }
                    }
                }
            }
        }

        for (Piece p : playerPieces) {
            if (p instanceof MainPiece) {
                score -= 0.3; // Larger penalty for opponent MainPiece alive
            } else {
                score -= 0.05;
            }

            int playerBaseScore = Math.abs(p.getPostion().getX() - 2) + Math.abs(p.getPostion().getY() - 4);
            score -= playerBaseScore * 0.005;
        }

        // Incentivize approaching opponent MainPiece more heavily
        for (Piece myPiece : computerPieces) {
            for (Piece enemy : playerPieces) {
                if (enemy instanceof MainPiece) {
                    int dist = Math.abs(myPiece.getPostion().getX() - enemy.getPostion().getX())
                            + Math.abs(myPiece.getPostion().getY() - enemy.getPostion().getY());
                    score += (6 - dist) * 0.04; // Stronger incentive
                }
            }
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
