package com.example.chefmania.ui.data

open class Piece (
    open var pos: Coordinate,
    open val player: Player
){
    open var alive: Boolean = true

    open fun move(newPos:Coordinate){
        pos = newPos
    }

    open fun die(){
        alive = false
    }

}