package com.chefmania.website_app.Backend;

import java.util.ArrayList;
import java.util.List;
import javax.print.attribute.standard.Copies;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.chefmania.website_app.Backend.Components.Board;
import com.chefmania.website_app.Backend.Components.Cards;
import com.chefmania.website_app.Backend.Components.Coordinates;
import com.chefmania.website_app.Backend.Components.MainPiece;
import com.chefmania.website_app.Backend.Components.Piece;
import com.chefmania.website_app.Backend.Components.SecondaryPiece;

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
  
  @Override
  public List<List<GameController>> succComputer(GameController passedStatus) {
    List<List<GameController>> results = new ArrayList<>();

   
    for (Piece piece : passedStatus.getPieces(true)) {
       
        List<Cards> cardsCopy = new ArrayList<>();
        for (Cards c : passedStatus.getComputer().getCards()) {
            cardsCopy.add(c);
        }

        // Sort cardsCopy by number of valid moves for this piece
        for (int i = 0; i < cardsCopy.size() - 1; i++) {
            for (int j = 0; j < cardsCopy.size() - i - 1; j++) {
                int movesCount1 = cardsCopy.get(j).getAllValidMoves(piece.getPostion(), true).size();
                int movesCount2 = cardsCopy.get(j + 1).getAllValidMoves(piece.getPostion(), true).size();

                if (movesCount1 < movesCount2) {
                    Cards temp = cardsCopy.get(j);
                    cardsCopy.set(j, cardsCopy.get(j + 1));
                    cardsCopy.set(j + 1, temp);
                }
            }
        }
        for (Cards computerCard : cardsCopy) {
            List<GameController> tempStorage = new ArrayList<>();

            for (Coordinates position : computerCard.getAllValidMoves(piece.getPostion(), true)) {
                GameController currentStatus = new GameController(passedStatus);
                List<Piece> computerPieces = currentStatus.getPieces(true);
                List<Piece> playersPieces = currentStatus.getPieces(false);
                Board currentBoard = currentStatus.getBoard();

              
                Piece currentPiece = null;
                for (Piece computerP : computerPieces) {
                    if (piece.getPostion().equals(computerP.getPostion())) {
                        currentPiece = computerP;
                        break;
                    }
                }
                if (currentPiece == null) {
                    continue;
                }
     
                if (!currentBoard.possibleMove(currentPiece, position)) {
                    continue;
                }

                Piece opponentPiece = currentBoard.getPiece(position);
                if (opponentPiece != null) {
                    if (computerPieces.contains(opponentPiece)) {
                        continue;
                    }

                    if (opponentPiece instanceof MainPiece) {
                        currentStatus.setGameStatus(false);
                        currentStatus.getComputer().setHasWon(true);
                        playersPieces.remove(opponentPiece);
                    } else if (opponentPiece instanceof SecondaryPiece) {
                        playersPieces.remove(opponentPiece);
                    }
                }


                currentBoard.movePiece(currentPiece, position, currentStatus.getComputer(), currentStatus.getPlayer());

                Cards usedCard = computerCard;
                Cards centerCard = currentStatus.getCenterCard();

                currentStatus.getComputer().getCards().remove(usedCard);
                currentStatus.getComputer().getCards().add(centerCard);
                currentStatus.setCenterCard(usedCard);

                currentStatus.setPieces(playersPieces);
                currentStatus.setPieces(computerPieces);

                tempStorage.add(currentStatus);
            }

            results.add(tempStorage);
        }
    }
    return results;
}
}
