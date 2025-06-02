package Website_App.Backend;

import java.util.*;
import java.util.ArrayList;
import java.util.List;
import Website_App.Backend.Components.Board;
import Website_App.Backend.Components.Cards;
import Website_App.Backend.Components.Coordinates;
import Website_App.Backend.Components.MainPiece;
import Website_App.Backend.Components.Piece;
import Website_App.Backend.Components.SecondaryPiece;

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
	 * Step1:Board State and Cards that are with Computer Step2:Checks Movelist of
	 * computers card Step3:Checks each pieces possible movements based on movelist
	 * Step4:Call this every time Computer make a move Step5:Return the List
	 * Step6:Make a call from GameController every time we make a move
	 */
	// Return all possible moves with one turn like return the entire GameState
	/*
	 * CenterCard Board Status Whose turn All pieces Player cards
	 *
	 */
	public List<List<GameController>> succ(GameController passedStatus) {
	    List<List<GameController>> results = new ArrayList<>();
	    System.out.println(passedStatus.computerCards);

	    for (Cards computerCard : passedStatus.computerCards) {
	        System.out.println(computerCard.getCard());
	        List<GameController> tempStorage = new ArrayList<>();

	        for (Piece piece : passedStatus.getComputer().getPieces()) {
	            // This creates a deep copy of the current State of the Game Controller
	            GameController currentStatus = new GameController(passedStatus);

	            // Deep Copy of the playersPieces
	            List<Piece> playersPieces = currentStatus.getPlayer().getPieces();
	            List<Piece> computerPieces = currentStatus.getComputer().getPieces();
	            // List<Piece> copyPlayerPieces = new ArrayList<Piece>();
	            // copyPlayerPieces.addAll(playersPieces);
	            System.out.println("Computers current Piece Position " + piece.getPostion());
	            // System.out.println("Positions" + playersPieces.toString());
	            System.out.println("Positions" + computerPieces.toString());

	            // Deep Copy of the Board
	            Board currentBoard = currentStatus.getBoard();
	            // Piece[][] boardCopy = deepCopyBoard(currentState.returnBoard());

	            // Deep Copy of the Center Card
	            // Cards getCenterCard = currentStatus.getCenterCard();
	            // Cards copyCenterCard = new Cards(getCenterCard.getNames(),
	            // getCenterCard.getCard());

	            // Piece copyPiece = null;
	            Player turn = null;
	            List<Coordinates> moves = computerCard.getAllValidMoves(piece.getPostion(), this.isChef());

	            for (Coordinates position : moves) {
	                System.out.println("toMove " + position.toString());
	                Piece currentPiece = piece;
	                System.out.println("Current Position " + currentPiece.getPostion());

	                // Mistake here-This is just checking the position,
	                // We have to check if moving there is null
	                boolean yourResult = currentBoard.possibleMove(currentPiece, position);
	                if (!(yourResult)) {
	                    System.out.println("Invalid Move");
	                    continue;
	                } else {
	                    // Valid move
	                    // Opponent piece
	                    Piece opponentPiece = currentBoard.getPiece(position);
	                    if (opponentPiece != null) {
	                        if (opponentPiece instanceof MainPiece) {
	                            currentStatus.setGameStatus(false);
	                        }
	                        playersPieces.remove(opponentPiece);
	                        currentBoard.movePiece(currentPiece, position);
	                    } else {
	                        System.out.println("Valid Move");
	                        currentBoard.movePiece(currentPiece, position);
	                    }
	                }
	            }

	            Cards currentCenterCard = currentStatus.getCenterCard();
	            // This is just storing the current StateBoard
	            // Return currPlayerPieces
	            turn = currentStatus.getPlayer();
	            currentStatus.setCenterCard(currentCenterCard);
	            currentStatus.setWhoseTurn(turn);
	            currentStatus.setPieces(playersPieces);
	            currentStatus.setPieces(computerPieces);
	            tempStorage.add(currentStatus);
	        }
	        results.add(tempStorage);
	    }
	    return results;
	}

	/*
	 * public void updateMoveKnowledgeForAI(Board boardState,
	 * List<List<Coordinates>> computerMoves, List<List<Coordinates>> playerMoves,
	 * Coordinates lastMoveFrom, Coordinates lastMoveTo, Piece lastMovedPiece, Cards
	 * lastCardUsed) { this.boardState = boardState; this.computerValidMoves =
	 * computerMoves; //this.playerValidMoves = playerMoves; this.lastMoveFrom =
	 * lastMoveFrom; this.lastMoveTo = lastMoveTo; this.lastMovedPiece =
	 * lastMovedPiece; this.lastCardUsed = lastCardUsed;
	 *
	 * }
	 */
	public int heuristic(GameController state, Player yourPlayer) {
		return 0;
	}
//  public int maxValue(GameController state, int depth, Player yourPlayer, int alpha, int beta) {
//    if (depth == maxDepth) {
//      return heuristic(state, yourPlayer);
//    }
//    alpha = -2;
//    List<List<Coordinates>> states = succ(state);
//    for (List<Coordinates> x : states) {
//      int value = minValue(x, yourPlayer, depth + 1, alpha, beta);
//      if (value > alpha) {
//        alpha = value;
//      }
//      if (alpha >= beta) {
//        return beta;
//      }
//
//
//    }
//    return alpha;
//
//
//  }
//
//  public int minValue(GameController state, int depth, Player yourPlayer, int alpha, int beta) {
//    if (depth == maxDepth) {
//      return heuristic(state, yourPlayer);
//    }
//    beta = 2;
//    List<List<Coordinates>> states = succ(state);
//    for (List<Coordinates> x : states) {
//      int value = maxValue(x, yourPlayer, depth + 1);
//      if (value < beta) {
//        beta = value;
//      }
//      if (alpha >= beta) {
//        return alpha;
//      }
//
//
//    }
//    return beta;
	// }
}