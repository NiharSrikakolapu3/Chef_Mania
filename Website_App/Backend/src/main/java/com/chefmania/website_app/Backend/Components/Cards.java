package com.chefmania.website_app.Backend.Components;

import java.util.ArrayList;
import java.util.List;


public class Cards {
    private String name;
    private List<int[]> moves;


    public Cards() {
        this.moves = new ArrayList<>();
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Cards)) return false;

        Cards other = (Cards) o;
        if (!this.name.equals(other.name)) return false;

        // Deep comparison of moves
        if (this.moves.size() != other.moves.size()) return false;
        for (int i = 0; i < this.moves.size(); i++) {
            int[] thisMove = this.moves.get(i);
            int[] otherMove = other.moves.get(i);
            if (thisMove[0] != otherMove[0] || thisMove[1] != otherMove[1]) return false;
        }

        return true;
    }

//    @Override
//    public int hashCode() {
//        int result = name.hashCode();
//        for (int[] move : moves) {
//            result = 31 * result + move[0];
//            result = 31 * result + move[1];
//        }
//        return result;
//    }
//

    public Cards(String name, List<int[]> moves) {
        this.name = name;
        this.moves = moves;
    }



    public String getNames() {
        return name;
    }


    public void setNames(String name) {
        this.name = name;
    }


    public List<int[]> getCard() {
        List<int[]> copy = new ArrayList<>();
        for (int[] move : this.moves) {
            copy.add(new int[]{move[0], move[1]});
        }
        return copy;
    }


    public void setCard(List<int[]> moves) {
        this.moves = moves;
    }

    public List<Coordinates> getAllValidMoves(Coordinates ofPiece, boolean isChef) {
        List<Coordinates> validMoves = new ArrayList<>();
        for (int[] move : moves) {
            int x = move[0];
            int y = move[1];
            if (!isChef) {
                x = -x;
            } else {
                y = -y;
            }
            Coordinates newCord = new Coordinates(ofPiece.getX() + x, ofPiece.getY() + y);
            if (newCord.getX() >= 0 && newCord.getX() <= 4 &&
                newCord.getY() >= 0 && newCord.getY() <= 4) {
                validMoves.add(newCord);
            }
        }
        return validMoves;
    }

    @Override
    public String toString() {
        return " " + this.getNames() + " " + this.getCard();
    }
}