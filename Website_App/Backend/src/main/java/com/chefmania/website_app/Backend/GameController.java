package com.chefmania.website_app.Backend;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import com.chefmania.website_app.Backend.Components.Board;
import com.chefmania.website_app.Backend.Components.Cards;
import com.chefmania.website_app.Backend.Components.Coordinates;
import com.chefmania.website_app.Backend.Components.MainPiece;
import com.chefmania.website_app.Backend.Components.MoveSet;
import com.chefmania.website_app.Backend.Components.Piece;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
@JsonIgnoreProperties({"currentTurn","playerPieces"})
public class GameController implements Cloneable {
	private boolean gameStatus = false;
	private Player player = null;
	private Computer computer = null;
	private Board board = null;
	private List<Cards> deck = null;
	private Cards centerCard = null;
	@JsonProperty("currentTurn")
	private Player currentTurn = null;
	private String currentTurnLabel = null;
	public List<Cards> computerCards = null;
	public List<Cards> playerCards = null;
	@JsonProperty("playerPieces")
	public List<Piece> playerPieces = null;
	private static final Logger logger = LoggerFactory.getLogger(GameController.class);

	public GameController() {
		this.board = new Board();
		
		MoveSet set = new MoveSet();
		set.resetRandomCards();
		deck = set.getGameCards();
		
		// Deal two cards to player and computer. the 5th card in middle
		this.playerCards = new ArrayList<>();
		this.computerCards = new ArrayList<>();
//		logger.info(deck.toString());
		playerCards.add(deck.remove(0));
		logger.info("New Instace"+ set.toString());
		//logger.info(deck.toString());
		playerCards.add(deck.remove(0));
		//logger.info(deck.toString());
		computerCards.add(deck.remove(0));
		//logger.info(deck.toString());
		computerCards.add(deck.remove(0));
		//logger.info(deck.toString());
		centerCard = deck.remove(0);

		// playerPieces = getPieces(0);
		// player will get the bottom row -> cook
		player = new Player(false, getPieces(false), playerCards);
		computer = new Computer(true, getPieces(true), computerCards);
		// player goes first
		currentTurn = player;
		currentTurnLabel =(currentTurn == player) ? "Player" : "Computer";
		
		gameStatus = true;
		// this.boardForComputer = board.returnBoard();
	}

	//For Computer Logic
	public GameController(GameController state) {
	    this.board = new Board(state.board); // Deep copy Board
	    this.player = new Player(state.player); // Deep copy Player
	    this.computer=new Computer(state.computer);
	    
	    // Deep copy playerCards
	    this.playerCards = new ArrayList<>();
	    for (Cards c : state.playerCards) {
	        List<int[]> copiedMoves = new ArrayList<>();
	        for (int[] move : c.getCard()) {
	            copiedMoves.add(new int[] { move[0], move[1] });
	        }
	        this.playerCards.add(new Cards(c.getNames(), copiedMoves));
	    }

	    // Deep copy computerCards
	    this.computerCards = new ArrayList<>();
	    for (Cards c : state.computerCards) {
	        List<int[]> copiedMoves = new ArrayList<>();
	        for (int[] move : c.getCard()) {
	            copiedMoves.add(new int[] { move[0], move[1] });
	        }
	        this.computerCards.add(new Cards(c.getNames(), copiedMoves));
	    }

	    // Deep copy center card
	    List<int[]> centerMoves = new ArrayList<>();
	    for (int[] move : state.centerCard.getCard()) {
	        centerMoves.add(new int[] { move[0], move[1] });
	    }
	    this.centerCard = new Cards(state.centerCard.getNames(), centerMoves);

	    // Set turn
	   // this.currentTurn = (state.currentTurn == state.player) ? this.player : this.computer;

	    this.gameStatus = state.gameStatus;
	}


	public List<Piece> getPieces(boolean isChef) {
		boolean value = isChef;
		List<Piece> computerPieces = new ArrayList<>();
		List<Piece> playerPieces = new ArrayList<>();
		for (int i = 0; i < 5; i++) {
			for (int j = 0; j < 5; j++) {
				Piece p = board.getPiece(new Coordinates(i, j));
				if (p != null) {
					if (p.isChef()) {
						computerPieces.add(p);
					} else {
						playerPieces.add(p);
					}
				}
			}
		}
		if (!value) {
			return playerPieces;
		} else {
			return computerPieces;
		}
	}

	public void makeMove(Coordinates from, Coordinates to, Cards cardUsed, Player currentPlayerMoving) {
		if (gameStatus != true) {
			throw new IllegalArgumentException("game is not active!");
		}

		Piece piece = board.getPiece(from);
		if (piece == null || piece.isChef() != currentPlayerMoving.isChef()) {
			throw new IllegalArgumentException("Invalid piece selected!");
		}
		
		List<Coordinates> validMovesForCard = cardUsed.getAllValidMoves(from, currentPlayerMoving.isChef());
		if (!validMovesForCard.contains(to)) {
			throw new IllegalArgumentException("Invalid move!");
		}
		board.movePiece(piece, to);
		currentPlayerMoving.exchangeCards(cardUsed, centerCard);
		centerCard = cardUsed;
		checkVictoryConditions();
		currentTurn = (currentTurn == player) ? computer : player;
	}

	private void checkVictoryConditions() {
		// if they kill opp mainPiece
		// if your main pieces is in the opp main base
		Coordinates playerBase = new Coordinates(4, 2);
		Coordinates computerBase = new Coordinates(0, 2);
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
			logger.debug("Made it-1");
			System.out.print("Computer wins!");
			gameStatus = false;
			return;
		}
		if (!computerMain.isAlive()) {
			logger.info("Made it-2");
			System.out.print("Player wins!-1");
			gameStatus = false;
			return;
		}
		// getting main to opp home base
		if (playerMain.getPostion().equals(computerBase)) {
			logger.info("Made it-3");
			logger.info(playerMain.getPostion().toString());
			logger.info(computerBase.toString());
			System.out.print("Player wins-2!");
			gameStatus = false;
			return;
		}
		if (computerMain.getPostion().equals(playerBase)) {
			logger.debug("Made it-4");
			System.out.print("Computer wins!");
			gameStatus = false;
			return;
		}
	}

	// USE IF NEEDED FOR PLAYER VS PLAYER
	private static final Random goesFirst = new Random();

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
		this.currentTurn = (currentTurn == player) ? computer : player;
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

	public boolean getGameStatus() {
		return this.gameStatus;
	}

	 public void setBoard(Board board) {
	 this.board = board;
	 }
	
	public void setCenterCard(Cards usedCard) {
		this.computerCards.remove(usedCard);
		this.computerCards.add(centerCard);
		this.centerCard=usedCard;
	}

	public void setGameStatus(boolean gameStatus) {
		this.gameStatus = gameStatus;
	}

	public void setPieces(List<Piece> playerPieces) {
		this.playerPieces = playerPieces;
	}

	public void setWhoseTurn(Player turn) {
		this.currentTurn=turn;
	}
	public String getCurrentTurnLabel() {
	    return (currentTurn == player) ? "Player" : "Computer";
	}

	@Override
	public String toString() {
	  String toReturn="GameStatus: "+this.gameStatus+ "\nPlayer: "+ this.player+"\nComputer: "
	  		+ " "+this.computer+
			  "\board "+ this.board+ "\nCenterCard "+ this.centerCard.getNames()+"\nComputer Cards 1 Name"+
	  		this.computerCards.get(0).getNames()+ "Computer Cards 2 moves"+ this.computerCards.get(1).getCard()+
	  		"\n Player cards 1"+ this.playerCards.get(0)+ "\n Player Cards 2"+ this.playerCards.get(1);
	  
	  return toReturn;
		
	}

}
