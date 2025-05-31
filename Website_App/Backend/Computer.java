package Website_App.Backend;

import java.util.ArrayList;
import java.util.List;
import Website_App.Backend.Components.Board;
import Website_App.Backend.Components.Cards;
import Website_App.Backend.Components.Coordinates;
import Website_App.Backend.Components.Piece;

public class Computer extends Player {

  private List<List<Coordinates>> computerValidMoves = new ArrayList<>();
  private List<List<Coordinates>> playerValidMoves = new ArrayList<>();
  private Coordinates lastMoveFrom = null;
  private Coordinates lastMoveTo = null;
  private Piece lastMovedPiece = null;
  private Cards lastCardUsed = null;
  private Board boardState = null;

  int maxDepth;
  int minDepth;


  public Computer(boolean isChef, List<Piece> pieces, List<Cards> yourCards) {
    super(isChef, pieces, yourCards);
  }
  
  /*
   * Step1:Board State and Cards that are with Computer Step2:Checks Movelist of computers card
   * Step3:Checks each pieces possible movements based on movelist Step4:Call this every
   * timeComputer make a move Step5:Return the List Step6:Make a call from GameController every time
   * we make a move
   */

  @Override
  public List<List<Coordinates>> succ() {
    List<List<Coordinates>> results = new ArrayList<>();
    for (Cards card : getCards()) {
      for (Piece piece : getPieces()) {
        List<Coordinates> moves = card.getAllValidMoves(piece.getPostion(), this.isChef());
        results.add(moves);
      }
    }
    return results;
  }

  // Stored in Ai database
  public void updateMoveKnowledgeForAI(Board boardState, List<List<Coordinates>> computerMoves,
      List<List<Coordinates>> playerMoves, Coordinates lastMoveFrom, Coordinates lastMoveTo,
      Piece lastMovedPiece, Cards lastCardUsed) {
    this.boardState = boardState;
    this.computerValidMoves = computerMoves;
    this.playerValidMoves = playerMoves;
    this.lastMoveFrom = lastMoveFrom;
    this.lastMoveTo = lastMoveTo;
    this.lastMovedPiece = lastMovedPiece;
    this.lastCardUsed = lastCardUsed;

  }

  public int heuristic(GameState state, Player yourPlayer) {


  }

  public int maxValue(GameState state, int depth, Player yourPlayer, int alpha, int beta) {
    if (depth == maxDepth) {
      return heuristic(state, yourPlayer);
    }
    alpha = -2;
    List<Coordinates> states = succ(state);
    for (states x : state) {
      int value = minValue(x, yourPlayer, depth + 1, alpha, beta);
      if (value > alpha) {
        alpha = value;
      }
      if (alpha >= beta) {
        return beta;
      }


    }
    return alpha;


  }

  public int minValue(GameState state, int depth, Player yourPlayer, int alpha, int beta) {
    if (depth == maxDepth) {
      return heuristic(state, yourPlayer);
    }
    beta = 2;
    List<Coordinates> states = succ(state);
    for (states x : state) {
      int value = maxValue(x, yourPlayer, depth + 1);
      if (value < beta) {
        beta = value;
      }
      if (alpha >= beta) {
        return alpha;
      }


    }
    return beta;


  }



}
