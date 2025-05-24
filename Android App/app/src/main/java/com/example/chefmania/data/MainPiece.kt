package com.example.chefmania.data

class MainPiece(
    override var pos: Coordinate,
    //override val player: Player
) : Piece(pos/*, player*/){

    override fun move(newPos: Coordinate) {
        super.move(newPos)
        //check if new pos is opponent's home base
        //if so trigger win the game
    }

    override fun die() {
        super.die()
        //trigger lose the game
    }
}