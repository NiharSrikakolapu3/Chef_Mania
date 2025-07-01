package com.chefmania.website_app.Backend;

// Current Main issue- The computer thinks that the player cards are also its when moving
//which is causing the error in the switch 
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.chefmania.website_app.Backend.Components.Board;
import com.chefmania.website_app.Backend.Components.Cards;
import com.chefmania.website_app.Backend.Components.Coordinates;
import com.chefmania.website_app.Backend.Components.MainPiece;
import com.chefmania.website_app.Backend.Components.Piece;
import com.chefmania.website_app.Backend.Components.SecondaryPiece;
import com.fasterxml.jackson.annotation.JsonProperty;
//hi
public class Computer extends Player {

    int maxDepth;
    int minDepth;
    private static final Logger logger = LoggerFactory.getLogger(GameController.class);
    @JsonProperty("hasWon")
    private boolean hasWon = false;
    public Computer() {

    }

    public boolean isHasWon() {
      return hasWon;
    }

    public void setHasWon(boolean hasWon) {
      this.hasWon = hasWon;
    }

    public Computer(boolean isChef, List<Piece> pieces, List<Cards> yourCards) {
        super(isChef, pieces, yourCards);
    }

    public Computer(Computer computer) {
        super(computer.isChef(), computer.getPieces(), computer.getCards());
        this.hasWon = computer.hasWon;
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
       // logger.info("made it to succ");
        List<List<GameController>> results = new ArrayList<>();
        for (Cards computerCard : passedStatus.getComputer().getCards()) {
            List<GameController> tempStorage = new ArrayList<>();
            for (Piece piece : passedStatus.getComputer().getPieces()) {
                //Could get the board and if the piece is false could set to null here
                //but I belive most convinent way is to pass it in to the method, and remove it
                //from the board Move Method
                for (Coordinates position : computerCard.getAllValidMoves(piece.getPostion(), true)) {

                    GameController currentStatus = new GameController(passedStatus);
                    List<Piece> computerPieces = currentStatus.getComputer().getPieces();

                    List<Piece> playersPieces = currentStatus.getPlayer().getPieces();

                    Board currentBoard = currentStatus.getBoard();

                    // Find the copied piece on the new board
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

                    // Validate move
                    if (!currentBoard.possibleMove(currentPiece, position)) {
                        continue;
                    }

                    // Execute move
                    Piece opponentPiece = currentBoard.getPiece(position);
                    if (opponentPiece != null) {
                        if (opponentPiece instanceof MainPiece) {
                            currentStatus.setGameStatus(false);
                            currentStatus.getComputer().setHasWon(true);
                            playersPieces.remove(opponentPiece);
                        }
                        if(opponentPiece instanceof SecondaryPiece){
                            playersPieces.remove(opponentPiece);

                        }
                    }
                    currentBoard.movePiece(currentPiece, position,currentStatus.getComputer(),currentStatus.getPlayer());
                    Cards usedCard = computerCard;
                    Cards centerCard = currentStatus.getCenterCard();

                    currentStatus.getComputer().getCards().remove(usedCard);

// Add the center card to computer's cards
                    currentStatus.getComputer().getCards().add(centerCard);

// Set the used card as the new center card
                    currentStatus.setCenterCard(usedCard); 
         
                    // if (currentStatus.getCurrentTurn() instanceof Player) {
                    //     System.out.print("Yes");
                    // }
                    // System.out.println("Current turn "+currentStatus.getCurrentTurn());
                    // Sets the current Players Pieces
                    currentStatus.setPieces(playersPieces);
                    // Sets the current Computer Pieces
                    currentStatus.setPieces(computerPieces);

                  //  System.out.println("After Move this is your Center Card" + currentStatus.getCenterCard().toString());

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
        // System.out.println("In the Succ Player Method");
        //  System.out.println("Player Cards "+ passedStatus.getPlayer().getCards());
        // System.out.println("Player Cards 2"+ passedStatus.playerCards.toString());

        for (Cards playerCard : passedStatus.getPlayer().getCards()) {
            List<GameController> tempStorage = new ArrayList<>();
            for (Piece piece : passedStatus.getPlayer().getPieces()) {
                for (Coordinates position : playerCard.getAllValidMoves(piece.getPostion(), false)) {

                    // Create new deep copy for this individual move
                    GameController currentStatus = new GameController(passedStatus);
                    List<Piece> computerPieces = currentStatus.getComputer().getPieces();
                    List<Piece> playersPieces = currentStatus.getPlayer().getPieces();
                    Board currentBoard = currentStatus.getBoard();

                    // Find the copied piece on the new board
                    Piece currentPiece = null;
                    for (Piece playerP : playersPieces) {
                        if (piece.getPostion().equals(playerP.getPostion())) {
                            currentPiece = playerP;
                            break;
                        }
                    }
                    if (currentPiece == null) {
                        continue;
                    }

                    // Validate move
                    if (!currentBoard.possibleMove(currentPiece, position)) {
                        continue;
                    }

                    // Execute move
                    Piece opponentPiece = currentBoard.getPiece(position);
                    if (opponentPiece != null) {
                        if (opponentPiece instanceof MainPiece) {
                            currentStatus.setGameStatus(false);
                            currentStatus.getComputer().setHasWon(true);
                            computerPieces.remove(opponentPiece);
                        }
                        if(opponentPiece instanceof SecondaryPiece){
                            computerPieces.remove(opponentPiece);

                        }
                    }
                    currentBoard.movePiece(currentPiece, position,currentStatus.getPlayer(),currentStatus.getComputer());

                    // Update center card
                   // System.out.println("Previous centerCard " + currentStatus.getCenterCard().toString());
                   // Remove used card from computer's cards
                    currentStatus.getPlayer().getCards().remove(playerCard);

// Add the center card to computer's cards
                    currentStatus.getPlayer().getCards().add(currentStatus.getCenterCard());

// Set the used card as the new center card
                    currentStatus.setCenterCard(playerCard); 
//currentStatus.getPlayer().exchangeCards(playerCard, currentStatus.getCenterCard());

                    // Set turn to Player
                    currentStatus.setWhoseTurn(currentStatus.getPlayer());
                    // if (currentStatus.getCurrentTurn() instanceof Player) {
                    //     System.out.print("Yes");
                    // }
                    // System.out.println("Current turn "+currentStatus.getCurrentTurn());
                    // Sets the current Players Pieces
                    currentStatus.setPieces(playersPieces);
                    // Sets the current Computer Pieces
                    currentStatus.setPieces(computerPieces);
                   // System.out.println("Current centerCard " + currentStatus.getCenterCard().toString());

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

    public GameController bestMoveForComputer(GameController currentState, int maxDepth) {
        try{
            // System.out.println("Currently in the Best Move for computer Method");
            // System.out.println("*********************************************");
            // System.out.println("Player Pieces "+ currentState.getPlayer().getPieces().toString());
            // System.out.println("Computer Pieces "+ currentState.getComputer().getPieces().toString());
            // System.out.println(currentState.getBoard().toString());
            // System.out.println("*********************************************");
            Thread.sleep(2000);
            // Computer turn rn
            this.maxDepth = maxDepth;
            //1. Get all possible moves computer can do --> from succComputerMethod
            //2. use minValue to get players next moves for the computer 
            // computer = high values(alpha), player = low value(beta)

            List<List<GameController>> allMoves = succComputer(currentState);

            GameController bestMove = null;
            double alpha = -10000000;
            double beta = 10000000;
            for (List<GameController> movesList : allMoves) {
                for (GameController move : movesList) {
                    double value = minValue(move, 1, alpha, beta);
                    if (value > alpha) {
                        alpha = value;
                        bestMove = move;
                    }
                }
            }
            return bestMove;
        }
        catch(Exception e){
            System.out.println("There was an Exception when running your Code"+ e.getMessage());
            return null;
        }
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
        for (List<GameController> listState : states) {
            for (GameController x : listState) {
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

    public int getMaxDepth() {
        return maxDepth;
    }

    public int getMinDepth() {
        return minDepth;
    }

    public void setMaxDepth(int maxDepth) {
        this.maxDepth = maxDepth;
    }

    public void setMinDepth(int minDepth) {
        this.minDepth = minDepth;
    }
}
