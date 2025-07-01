package com.chefmania.website_app.Backend.Components;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type"
)
@JsonSubTypes({
    @JsonSubTypes.Type(value = MainPiece.class, name = "main"),
    @JsonSubTypes.Type(value = SecondaryPiece.class, name = "secondary")
})
public abstract class Piece implements Cloneable {

    protected boolean alive;
    // Either Cook --> master or student or chef --> master or student
    protected boolean isChef;
    protected Coordinates position;
    protected String name;

    public Piece(boolean isChef, Coordinates position, String name) {
        this.alive = true;
        this.isChef = isChef;
        this.position = position;
        this.name = name;
    }

    @Override
    public Piece clone() {
        try {
            Piece clonedPiece = (Piece) super.clone();
            clonedPiece.position = new Coordinates(position.getX(), position.getY());
            return clonedPiece;
        } catch (CloneNotSupportedException e) {
            e.printStackTrace();
            return null;
        }
    }

    public boolean isAlive() {
        return alive;
    }

    public void setAlive(boolean alive) {
        this.alive = alive;
    }

    public boolean isChef() {
        return isChef;
    }

    public Coordinates getPostion() {
        return position;
    }

    public void setPostion(Coordinates position) {
        this.position = position;
    }

    @Override
    public String toString() {
        String toReturn = "";
        toReturn += position.toString();
        return toReturn;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        Piece other = (Piece) obj;
        return isChef == other.isChef
                && name.equals(other.name)
                && position != null && position.equals(other.position);
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(isChef, name, position);
    }

}
