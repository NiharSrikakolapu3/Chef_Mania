package com.example.chefmania.data

open class Piece (
    open var pos: Coordinate,
    //open val player: Player
){
    open var alive: Boolean = true

    open fun move(newPos: Coordinate){
        val temp: Occupancy = pos.occupant
        pos = newPos
        pos.occupant = temp
    }

    open fun die(){
        alive = false
    }

}