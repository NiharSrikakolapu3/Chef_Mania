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

public class GameController implements Cloneable {
	private boolean gameStatus = false;
	private Player player = null;
	private Computer computer = null;
	private Board board = null;
	private List<Cards> deck = null;
	private Cards centerCard = null;
	private Player currentTurn = null;
	public List<Cards> computerCards = null;
	public List<Cards> playerCards = null;
	public List<Piece> playerPieces = null;
	// public Piece[][] boardForComputer = null;

	public GameController() {
		this.board = new Board();
		MoveSet set = new MoveSet();
		deck = set.getGameCards();
		// Deal two cards to player and computer. the 5th card in middle
		this.playerCards = new ArrayList<>();
		this.computerCards = new ArrayList<>();
		playerCards.add(deck.remove(0));
		playerCards.add(deck.remove(0));
		computerCards.add(deck.remove(0));
		computerCards.add(deck.remove(0));
		centerCard = deck.remove(0);

		// playerPieces = getPieces(0);
		// player will get the bottom row -> cook
		player = new Player(false, getPieces(false), playerCards);
		computer = new Computer(true, getPieces(true), computerCards);
		// player goes first
		currentTurn = player;
		gameStatus = true;
		// this.boardForComputer = board.returnBoard();
	}

	public GameController(GameController state) {
		this.board = new Board(state.board); // assuming Board has a copy constructor

		// Deep copy player and computer
		this.player = new Player(state.player); // assumes Player has a copy constructor
		// this.computer = new Computer(state.computer);

		// Deep copy card lists
		this.playerCards = new ArrayList<>();
		for (Cards c : state.playerCards) {
			this.playerCards.add(new Cards(c.getNames(), c.getCard())); // assumes Cards has a copy constructor
		}

		this.computerCards = new ArrayList<>();
		for (Cards c : state.computerCards) {
			this.computerCards.add(new Cards(c.getNames(), c.getCard()));
		}
		// Deep copy center card
		this.centerCard = new Cards(state.centerCard.getNames(), state.centerCard.getCard());
		// Copy current turn and current card by identity
		this.currentTurn = (state.currentTurn == state.player) ? this.player : this.computer;
		// Status
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

		// After every move either the player or computer update the AI database
		if (currentTurn == computer) {
//    List<GameController> computerMoves = computer.succ(this);
			// computer.updateMoveKnowledgeForAI(board, computerMoves, from, to, piece,
			// cardUsed);
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

	// public void setBoard(Piece[][]board) {
	// this.boardForComputer = board;
	// }
	public void setCenterCard(Cards centerCard) {
		this.centerCard = centerCard;
	}

	public void setGameStatus(boolean gameStatus) {
		this.gameStatus = gameStatus;
	}

	public void setPieces(List<Piece> playerPieces) {
		this.playerPieces = playerPieces;
	}

	public void setWhoseTurn(Player turn) {
		this.currentTurn = turn;
	}

}
