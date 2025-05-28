package com.example.chefmania.ui.data

data class Coordinate(
    var x: Int,
    var y: Int
){
    fun add(other:Coordinate): Coordinate{
        return Coordinate(x+other.x, y+other.y)
    }
}
