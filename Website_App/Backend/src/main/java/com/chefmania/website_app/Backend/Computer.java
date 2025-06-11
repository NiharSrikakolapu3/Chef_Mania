package com.chefmania.website_app.Backend;

import java.util.ArrayList;
import java.util.List;

import com.chefmania.website_app.Backend.Components.Board;
import com.chefmania.website_app.Backend.Components.Cards;
import com.chefmania.website_app.Backend.Components.Coordinates;
import com.chefmania.website_app.Backend.Components.MainPiece;
import com.chefmania.website_app.Backend.Components.Piece;


public class Computer extends Player {
  private Board boardState = null;
  int maxDepth;
  int minDepth;

  public Computer(boolean isChef, List<Piece> pieces, List<Cards> yourCards) {
    super(isChef, pieces, yourCards);
  }

  public Computer(Computer computer) {
    super(computer.isChef(), computer.getPieces(), computer.getCards());
  }

  /*
   * Step1:Board State and Cards that are with Computer Step2:Checks Movelist of computers card
   * Step3:Checks each pieces possible movements based on movelist Step4:Call this every time
   * Computer make a move Step5:Return the List Step6:Make a call from GameController every time we
   * make a move
   */
  // Return all possible moves with one turn like return the entire GameState
  /*
   * CenterCard Board Status Whose turn All pieces Player cards
   *
   */
  public List<List<GameController>> succComputer(GameController passedStatus) {
    List<List<GameController>> results = new ArrayList<>();
    System.out.println(passedStatus.computerCards);

    for (Cards computerCard : passedStatus.computerCards) {
      List<GameController> tempStorage = new ArrayList<>();
      for (Piece piece : passedStatus.getComputer().getPieces()) {
        for (Coordinates position : computerCard.getAllValidMoves(piece.getPostion(), true)) {

          // Create new deep copy for this individual move
          GameController currentStatus = new GameController(passedStatus);
          List<Piece> computerPieces = currentStatus.getPieces(true);
          List<Piece> playersPieces = currentStatus.getPieces(false);
          Board currentBoard = currentStatus.getBoard();

          // Find the copied piece on the new board
          Piece currentPiece = null;
          for (Piece computerP : computerPieces) {
            if (piece.getPostion().equals(computerP.getPostion())) {
              currentPiece = computerP;
              break;
            }
          }
          if (currentPiece == null)
            continue;

          // Validate move
          if (!currentBoard.possibleMove(currentPiece, position))
            continue;

          // Execute move
          Piece opponentPiece = currentBoard.getPiece(position);
          if (opponentPiece != null) {
            if (opponentPiece instanceof MainPiece) {
              currentStatus.setGameStatus(false);
              playersPieces.remove(opponentPiece);
            }
          }
          currentBoard.movePiece(currentPiece, position);

          // Update center card
          System.out.println("Previous centerCard " + currentStatus.getCenterCard().toString());
          currentStatus.setCenterCard(computerCard);
          // Set turn to Player
          currentStatus.setWhoseTurn(currentStatus.getPlayer());
          if (currentStatus.getCurrentTurn() instanceof Player) {
            System.out.print("Yes");
          }
          // System.out.println("Current turn "+currentStatus.getCurrentTurn());
          // Sets the current Players Pieces
          currentStatus.setPieces(playersPieces);
          // Sets the current Computer Pieces
          currentStatus.setPieces(computerPieces);
          System.out.println("Current centerCard " + currentStatus.getCenterCard().toString());

          // Store this move result
          tempStorage.add(currentStatus);
        }
      }
      results.add(tempStorage);
    }
    return results;
  }

  public List<List<GameController>> succPlayer(GameController passedStatus) {
    List<List<GameController>> results = new ArrayList<>();
    System.out.println(passedStatus.playerCards);

    for (Cards playerCard : passedStatus.playerCards) {
      List<GameController> tempStorage = new ArrayList<>();
      for (Piece piece : passedStatus.getPlayer().getPieces()) {
        for (Coordinates position : playerCard.getAllValidMoves(piece.getPostion(), false)) {

          // Create new deep copy for this individual move
          GameController currentStatus = new GameController(passedStatus);
          List<Piece> computerPieces = currentStatus.getPieces(true);
          List<Piece> playersPieces = currentStatus.getPieces(false);
          Board currentBoard = currentStatus.getBoard();

          // Find the copied piece on the new board
          Piece currentPiece = null;
          for (Piece playerP : playersPieces) {
            if (piece.getPostion().equals(playerP.getPostion())) {
              currentPiece = playerP;
              break;
            }
          }
          if (currentPiece == null)
            continue;

          // Validate move
          if (!currentBoard.possibleMove(currentPiece, position))
            continue;

          // Execute move
          Piece opponentPiece = currentBoard.getPiece(position);
          if (opponentPiece != null) {
            if (opponentPiece instanceof MainPiece) {
              currentStatus.setGameStatus(false);
              computerPieces.remove(opponentPiece);
            }
          }
          currentBoard.movePiece(currentPiece, position);

          // Update center card
          System.out.println("Previous centerCard " + currentStatus.getCenterCard().toString());
          currentStatus.setCenterCard(playerCard);
          // Set turn to Player
          currentStatus.setWhoseTurn(currentStatus.getPlayer());
          if (currentStatus.getCurrentTurn() instanceof Player) {
            System.out.print("Yes");
          }
          // System.out.println("Current turn "+currentStatus.getCurrentTurn());
          // Sets the current Players Pieces
          currentStatus.setPieces(playersPieces);
          // Sets the current Computer Pieces
          currentStatus.setPieces(computerPieces);
          System.out.println("Current centerCard " + currentStatus.getCenterCard().toString());

          // Store this move result
          tempStorage.add(currentStatus);
        }
      }
      results.add(tempStorage);
    }
    return results;
  }


  public double heuristic(GameController state) {
    List<Piece> computerPiece = state.getComputer().getPieces();
    double computerCount = computerPiece.size();

    List<Piece> playerPiece = state.getPlayer().getPieces();
    double playerCount = playerPiece.size();

    return (computerCount - playerCount) * 0.24;
  }

  public double maxValue(GameController state, double depth, double alpha, double beta) {
    if (depth == maxDepth) {
      return heuristic(state);
    }
    List<List<GameController>> states = succComputer(state);
    for (List<GameController> listState : states) {
      for (GameController x : listState) {
        double value = minValue(x, depth + 1, alpha, beta);
        if (value > alpha) {
          alpha = value;
        }
        if (alpha >= beta) {
          return beta;
        }
      }
    }
    return alpha;
  }

  public double minValue(GameController state, double depth, double alpha, double beta) {
    if (depth == maxDepth) {
      return heuristic(state);
    }
    
    List<List<GameController>> states = succPlayer(state);
    for (List<GameController> listState: states) {
      for(GameController x: listState) {
        double value = maxValue(x, depth + 1, alpha, beta);
        if (value < beta) {
          beta = value;
        }
        if (alpha >= beta) {
          return alpha;
        }
      }

    }
    return beta;
  }
}
