package Website_App.Backend;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import Website_App.Backend.Components.Board;
import Website_App.Backend.Components.Cards;
import Website_App.Backend.Components.Coordinates;
import Website_App.Backend.Components.MainPiece;
import Website_App.Backend.Components.MoveSet;
import Website_App.Backend.Components.Piece;


public class GameController implements Cloneable{
  private boolean gameStatus = false;
  private Player player = null;
  private Computer computer = null;
  private Board board = null;
  private List<Cards> deck = null;
  private Cards centerCard = null;
  private Player currentTurn = null;
  private Cards currentCard = null;
  private static final Random goesFirst = new Random();
  public  static List<Cards> computerCards=null;
  public  static List<Cards> playerCards=null;

  public GameController() {
    this.board = new Board();
    deck = MoveSet.getGameCards();

    // Deal two cards to player and computer. the 5th card in middle
    GameController.playerCards = new ArrayList<>();
    GameController.computerCards = new ArrayList<>();
    playerCards.add(deck.remove(0));
    playerCards.add(deck.remove(0));
    computerCards.add(deck.remove(0));
    computerCards.add(deck.remove(0));

    centerCard = deck.remove(0);

    // player will get the bottom row -> cook
    player = new Player(false, getPieces(0), playerCards);
    computer = new Computer(true, getPieces(4), computerCards);

    // player goes first
    currentTurn = player;
    gameStatus = true;
  }
  public GameController(GameController state) {
	    this.board = state.board;                     // Or deep copy if needed
	    this.player = state.player;
	    this.computer = state.computer;
	    this.deck = state.deck;
	    this.centerCard = state.centerCard;
	    this.currentTurn = state.currentTurn;
	    this.currentCard = state.currentCard;
	    this.gameStatus = state.gameStatus;
	    GameController.playerCards = state.playerCards;
	    GameController.computerCards = state.computerCards;
  }
  


  private List<Piece> getPieces(int row) {
    List<Piece> pieces = new ArrayList<>();
    for (int i = 0; i < 5; i++) {
      Piece p = board.getPiece(new Coordinates(row, i));
      pieces.add(p);
    }
    return pieces;

  }

  public void makeMove(Coordinates from, Coordinates to, Cards cardUsed,
      Player currentPlayerMoving) {
    if (gameStatus != true) {
      throw new IllegalArgumentException("game is not active!");
    }
    
    Piece piece = board.getPiece(from);
    if (piece == null || piece.isChef() != currentPlayerMoving.isChef()) {
      throw new IllegalArgumentException("Invalid piece selected!");
    }

    List<Coordinates> validMovesForCard =
        cardUsed.getAllValidMoves(from, currentPlayerMoving.isChef());
    if (!validMovesForCard.contains(to)) {
      throw new IllegalArgumentException("Invalid move!");
    }

    board.movePiece(piece, to);
    currentPlayerMoving.exchangeCards(cardUsed, centerCard);
    centerCard = cardUsed;

    checkVictoryConditions();

    currentTurn = (currentTurn == player) ? computer : player;
    
    //After every move either the player or computer update the AI database 
    if(currentTurn==computer) {
    List<GameController> computerMoves = computer.succ(this);
    //computer.updateMoveKnowledgeForAI(board, computerMoves, from, to, piece, cardUsed);
    }
  }


  private void checkVictoryConditions() {
    // if they kill opp mainPiece
    // if your main pieces is in the opp main base

    Coordinates playerBase = new Coordinates(0, 2);
    Coordinates computerBase = new Coordinates(4, 2);

    Piece playerMain = null;
    Piece computerMain = null;
    for (Piece p : player.getPieces()) {
      if (p instanceof MainPiece) {
        playerMain = p;
        break;
      }
    }

    for (Piece p : computer.getPieces()) {
      if (p instanceof MainPiece) {
        computerMain = p;
        break;
      }
    }
    // Capture Main pieces
    if (!playerMain.isAlive()) {
      System.out.print("Computer wins!");
      gameStatus = false;
      return;
    }

    if (!computerMain.isAlive()) {
      System.out.print("Player wins!");
      gameStatus = false;
      return;
    }

    // getting main to opp home base
    if (playerMain.getPostion().equals(computerBase)) {
      System.out.print("Player wins!");
      gameStatus = false;
      return;
    }

    if (computerMain.getPostion().equals(playerBase)) {
      System.out.print("Computer wins!");
      gameStatus = false;
      return;
    }
  }

  // USE IF NEEDED FOR PLAYER VS PLAYER
  public String coinFlip() {
    if (goesFirst.nextBoolean()) {
      return "Heads";
    } else {
      return "Tails";
    }
  }

  public Player getCurrentTurn() {
    return currentTurn;
  }
  public void changeTurn() {
	  this.currentTurn=(currentTurn == player) ? computer : player;
	}

  public Board getBoard() {
    return board;
  }

  public Cards getCenterCard() {
    return centerCard;
  }

  public Player getPlayer() {
    return player;
  }

  public Computer getComputer() {
    return computer;
  }

}