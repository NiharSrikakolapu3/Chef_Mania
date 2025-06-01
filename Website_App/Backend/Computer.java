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
   * Step1:Board State and Cards that are with Computer 
   * Step2:Checks Movelist of computers card
   * Step3:Checks each pieces possible movements based on movelist 
   * Step4:Call this every time Computer make a move 
   * Step5:Return the List 
   * Step6:Make a call from GameController every time
   * we make a move
   */
   //Return all possible moves with one turn like return the entire GameState
  	/* CenterCard
  	 * Board Status
  	 * Whose turn 
  	 * All pieces
  	 * Player cards 
  	 * Computer Cards
  	 */
  public List<List<GameController>> succ(GameController passedStatus) {
   List<GameController>results=new ArrayList<>();
	 for(Cards computerCard:GameController.computerCards) {
		 List<GameController>tempStorage=new ArrayList<>();
		for (Piece piece : getPieces()) {
			GameController currentStatus= new GameController(passedStatus);
			//Deep Copy of the playersPieces
			List<Piece>playersPieces=currentStatus.getPlayer().getPieces();
			List<Piece>copyPlayerPieces = new ArrayList<Piece>();
			copyPlayerPieces.addAll(playersPieces);
			//Player whoseTurn=currentStatus.getCurrentTurn();
			//Deep Copy of the Board
			Board currentState=currentStatus.getBoard();
			Piece[][] currentBoardState=currentState.returnBoard();
			Piece[][]boardCopy=deepCopyBoard(currentBoardState);
			//Deep Copyof the Center Card
			Cards getCenterCard=currentStatus.getCenterCard();
			Cards copyCenterCard= new Cards(getCenterCard.getNames(),getCenterCard.getCard());
			Piece copyPiece=null;
        List<Coordinates> moves = computerCard.getAllValidMoves(piece.getPostion(), this.isChef());
        for(Coordinates position:moves) {
        	Piece currentPiece = currentState.getPiece(position);
			if(currentPiece!=null) {
        		if(currentPiece.isChef()){
        			moves.remove(position);
        		}
        		else {
        		Piece originalPiece= boardState.getPiece(position);
        		if(originalPiece instanceof MainPiece) {
        		   copyPiece=new MainPiece(false,originalPiece.getPostion());
        		}
        		else {
        			copyPiece=new SecondaryPiece(false,originalPiece.getPostion());
        		}
        		copyPlayerPieces.remove(copyPiece);
        		Coordinates currPiece=copyPiece.getPostion();
        		boardCopy[position.getX()][position.getY()]=copyPiece;
        		boardCopy[currPiece.getX()][currPiece.getY()]=null;
        		}
        	}
			else {
				Piece originalPiece= boardState.getPiece(position);
        		if(originalPiece instanceof MainPiece) {
        			 copyPiece=new MainPiece(false,originalPiece.getPostion());
        		}
        		else {
        			copyPiece=new SecondaryPiece(false,originalPiece.getPostion());
        		}
		    Coordinates currPiece=copyPiece.getPostion();
			boardCopy[position.getX()][position.getY()]=copyPiece;
    		boardCopy[currPiece.getX()][currPiece.getY()]=null;
			}
			Cards temp=copyCenterCard;
			copyCenterCard=computerCard;
			computerCard=temp;
			//This is just storing the current StateBoard
			//Return currPlayerPieces
			Player turn = currentStatus.getPlayer();
			
			}
       }
	}
	 return results;
  }
  
  public Piece[][] deepCopyBoard(Piece[][] originalBoard) {
	    Piece[][] newBoard = new Piece[originalBoard.length][originalBoard[0].length];

	    for (int i = 0; i < originalBoard.length; i++) {
	        for (int j = 0; j < originalBoard[i].length; j++) {
	            Piece originalPiece = originalBoard[i][j];
	            if(originalPiece instanceof MainPiece) {
	            	 newBoard[i][j] = (originalPiece != null) ? (MainPiece) originalPiece.clone() : null;
	            }
	          
	        }
	    }

	    return newBoard;
	}

 /*
  public void updateMoveKnowledgeForAI(Board boardState, List<List<Coordinates>> computerMoves,
      List<List<Coordinates>> playerMoves, Coordinates lastMoveFrom, Coordinates lastMoveTo,
      Piece lastMovedPiece, Cards lastCardUsed) {
    this.boardState = boardState;
    this.computerValidMoves = computerMoves;
    //this.playerValidMoves = playerMoves;
    this.lastMoveFrom = lastMoveFrom;
    this.lastMoveTo = lastMoveTo;
    this.lastMovedPiece = lastMovedPiece;
    this.lastCardUsed = lastCardUsed;

  }
  */

  public int heuristic(GameController state, Player yourPlayer) {

	  return 0;
  }

  public int maxValue(GameController state, int depth, Player yourPlayer, int alpha, int beta) {
    if (depth == maxDepth) {
      return heuristic(state, yourPlayer);
    }
    alpha = -2;
    List<List<Coordinates>> states = succ(state);
    for (List<Coordinates> x : states) {
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

  public int minValue(GameController state, int depth, Player yourPlayer, int alpha, int beta) {
    if (depth == maxDepth) {
      return heuristic(state, yourPlayer);
    }
    beta = 2;
    List<List<Coordinates>> states = succ(state);
    for (List<Coordinates> x : states) {
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