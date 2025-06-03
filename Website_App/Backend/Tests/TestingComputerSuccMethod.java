<<<<<<< HEAD
package Website_App.Backend.Tests;

import java.util.List;
import Website_App.Backend.Computer;
import Website_App.Backend.GameController;
import Website_App.Backend.Components.Cards;
import Website_App.Backend.Components.Coordinates;
import Website_App.Backend.Components.MainPiece;
import Website_App.Backend.Components.Piece;

public class TestingComputerSuccMethod {
  
  public static void printHelper(GameController game, Computer computer) {
    List<List<GameController>> allSuccessors = computer.succPlayer(game);
    List<Cards> computerCards = game.playerCards;
    for (int i = 0; i < allSuccessors.size(); i++) {
      Cards usedCard = computerCards.get(i);

      List<GameController> moveStates = allSuccessors.get(i);
      // System.out.println(moveStates.toString());
      System.out.println("\n====================================================");
      System.out.println("== CARD #" + (i + 1) + ": " + usedCard.getNames());
      System.out.println("== Move Pattern (deltas):");

      for (int[] move : usedCard.getCard()) {
        System.out.println(usedCard.getNames());
        System.out.println(usedCard.getCard());
        System.out.println("   - (" + move[0] + ", " + move[1] + ")");
      }
      System.out.println("====================================================");
      for (int j = 0; j < moveStates.size(); j++) {
        GameController gc = moveStates.get(j);
        System.out.println("\n--- Move " + (j + 1) + " ---");
        // Used card and game state info
        System.out.println("Used Card: " + usedCard.getNames());
        System.out.println("Game Status: " + (gc.getGameStatus() ? "Running" : "‼️ Game Over ‼️"));
        System.out.println(
            "Current Turn: " + (gc.getPlayer().isChef() ? "Chef (Computer)" : "Cook (Player)"));

        // Show board
        System.out.println("\n🧩 Board Layout:");
        Piece[][] board = gc.getBoard().returnBoard();
        for (int r = 0; r < board.length; r++) {
          for (int c = 0; c < board[r].length; c++) {
            Piece p = board[r][c];
            if (p == null) {
              System.out.print("[ ] ");
            } else if (p instanceof MainPiece) {
              System.out.print(p.isChef() ? "[m] " : "[M] ");
            } else {
              System.out.print(p.isChef() ? "[s] " : "[S] ");
            }
          }
          System.out.println();
        }
        // Show final player pieces only
        System.out.println("\n🧑 Player Pieces:");
        for (Piece p : gc.getPlayer().getPieces()) {
          Coordinates pos = p.getPostion();
          String type = (p instanceof MainPiece) ? "MainPiece" : "SecondaryPiece";
          System.out.println(" - " + type + " at (" + pos.getX() + ", " + pos.getY() + ")");
        }
        System.out.println("----------------------------------------------------");
      }
    }
  }

  public static void testSuccMethodBasic() {
    GameController game = new GameController();
    Computer computer = new Computer(true, game.getPieces(true), game.computerCards);
    printHelper(game, computer);
  }

  public static void testDiffStartingPosition() {
	 GameController game= new GameController();
	 Piece pieceOne=game.getComputer().getPieces().get(0);
	 game.getBoard().movePiece(pieceOne, new Coordinates(3,0));
	  pieceOne=game.getComputer().getPieces().get(1);
	 game.getBoard().movePiece(pieceOne, new Coordinates(3,1));
	  pieceOne=game.getComputer().getPieces().get(2);
	 game.getBoard().movePiece(pieceOne, new Coordinates(2,2));
	 Computer computer = new Computer(false, game.getPieces(false), game.playerCards);
	 printHelper(game, computer);
    
  }
  
  public static void testingCapture() {
    
  }


  public static void main(String[] args) {
	 testDiffStartingPosition();
   // testSuccMethodBasic();
    //testDiffStartingPosition();
  }
  // Test Starting position diff
  // Test Capture

}
=======
package Website_App.Backend.Tests;

import java.util.List;
import Website_App.Backend.Computer;
import Website_App.Backend.GameController;
import Website_App.Backend.Components.Cards;
import Website_App.Backend.Components.Coordinates;
import Website_App.Backend.Components.MainPiece;
import Website_App.Backend.Components.Piece;

public class TestingComputerSuccMethod {
  
  public static void printHelper(GameController game, Computer computer) {
    List<List<GameController>> allSuccessors = computer.succ(game);
    List<Cards> computerCards = game.computerCards;
    for (int i = 0; i < allSuccessors.size(); i++) {
      Cards usedCard = computerCards.get(i);

      List<GameController> moveStates = allSuccessors.get(i);
      // System.out.println(moveStates.toString());
      System.out.println("\n====================================================");
      System.out.println("== CARD #" + (i + 1) + ": " + usedCard.getNames());
      System.out.println("== Move Pattern (deltas):");

      for (int[] move : usedCard.getCard()) {
        System.out.println(usedCard.getNames());
        System.out.println(usedCard.getCard());
        System.out.println("   - (" + move[0] + ", " + move[1] + ")");
      }
      System.out.println("====================================================");
      for (int j = 0; j < moveStates.size(); j++) {
        GameController gc = moveStates.get(j);
        System.out.println("\n--- Move " + (j + 1) + " ---");
        // Used card and game state info
        System.out.println("Used Card: " + usedCard.getNames());
        System.out.println("Game Status: " + (gc.getGameStatus() ? "Running" : "‼️ Game Over ‼️"));
        System.out.println(
            "Current Turn: " + (gc.getPlayer().isChef() ? "Chef (Computer)" : "Cook (Player)"));

        // Show board
        System.out.println("\n🧩 Board Layout:");
        Piece[][] board = gc.getBoard().returnBoard();
        for (int r = 0; r < board.length; r++) {
          for (int c = 0; c < board[r].length; c++) {
            Piece p = board[r][c];
            if (p == null) {
              System.out.print("[ ] ");
            } else if (p instanceof MainPiece) {
              System.out.print(p.isChef() ? "[m] " : "[M] ");
            } else {
              System.out.print(p.isChef() ? "[s] " : "[S] ");
            }
          }
          System.out.println();
        }
        // Show final player pieces only
        System.out.println("\n🧑 Player Pieces:");
        for (Piece p : gc.getPlayer().getPieces()) {
          Coordinates pos = p.getPostion();
          String type = (p instanceof MainPiece) ? "MainPiece" : "SecondaryPiece";
          System.out.println(" - " + type + " at (" + pos.getX() + ", " + pos.getY() + ")");
        }
        System.out.println("----------------------------------------------------");
      }
    }
  }

  public static void testSuccMethodBasic() {
    GameController game = new GameController();
    Computer computer = new Computer(true, game.getPieces(true), game.computerCards);
    printHelper(game, computer);
  }

  public static void testDiffStartingPosition() {
    
  }
  
  public static void testingCapture() {
    
  }


  public static void main(String[] args) {
    //testSuccMethodBasic();
    testDiffStartingPosition();
  }
  // Test Starting position diff
  // Test Capture

}

>>>>>>> 8e823a683cd834e4c1bc0163663ad86949f23b5b
