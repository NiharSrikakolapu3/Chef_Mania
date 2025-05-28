package 

import java.util.ArrayList;
import java.util.List;
import Chef_Mania.Website.Backend.Components.Board;
import Chef_Mania.Website.Backend.Components.Cards;
import Chef_Mania.Website.Backend.Components.Coordinates;
import Chef_Mania.Website.Backend.Components.GameState;
import Chef_Mania.Website.Backend.Components.Move;
import Chef_Mania.Website.Backend.Components.Piece;
import Chef_Mania.Website.Backend.Components.SecondaryPiece;

public class GameController {

  private GameState gameState;
  private Player chefPlayer;
  private Player cookPlayer;
  // Add computer logic later! TODO
  private Board board;
  private List<Cards> deck;
  private Cards centerCard;
  private Player currentPlayer;

  public GameController() {
    this.gameState = new GameState();
    this.board = new Board();
    this.deck = new ArrayList<>();
    // put cards in deck TODO
    // Setup cards --> shuffle the deck
  }
  
  public static void main(String[] args) {
    System.out.println("GameController started!");
    //TEST BACKEND LOGIC!
}

  public void gameStart() {
    gameState.startGame();
    chefPlayer = new Player(true);
    cookPlayer = new Player(false);

    // Who goes first! --> CHEFS OR COOKS
    currentPlayer = gameState.coinFlip().equals("Heads") ? chefPlayer : cookPlayer;

    dealCards();
  }

  private void dealCards() {
    // Each player side will get two cards
    for (int i = 0; i < 2; i++) {
      chefPlayer.drawCard(deck.remove(0));
      cookPlayer.drawCard(deck.remove(0));
    }
    // Then draws a card from the center
    centerCard = deck.remove(0);
  }

  public void makeMove(Coordinates from, Coordinates to, Cards cardUsed) {
    Piece piece = board.getPiece(from);

    if (piece == null || piece.isChef() != currentPlayer.isChef()) {
      throw new IllegalArgumentException("Invalid move!");
    }

    board.movePiece(piece, to);
    currentPlayer.exchangeCards(cardUsed, centerCard);
    centerCard = cardUsed;

    // Check if the move made them win or not!
    victoryConditions();

    // switch turns --> check if current player is chef or cook then swap the current player role
    // based on that
    currentPlayer = (currentPlayer == chefPlayer ? cookPlayer : chefPlayer);
  }

  // Used for UI. When a player clicks a piece it will highlight where that piece can go!
  public List<Coordinates> getValidMoves(Piece piece, Cards card) {
    List<Coordinates> allValidMoves = card.getAllValidMoves(piece.getPostion(), piece.isChef());
    return allValidMoves;

  }

  // TODO
  private void victoryConditions() {

  }

  public GameState getGameState() {
    return gameState;
  }

  public Board getBoard() {
    return board;
  }

  public Cards getCenterCard() {
    return centerCard;
  }

  public Player getCurrentPlayer() {
    return currentPlayer;
  }

  public Player getChefPlayer() {
    return chefPlayer;
  }

  public Player getCookPlayer() {
    return cookPlayer;
  }

}
