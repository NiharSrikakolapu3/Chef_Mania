package com.example.chefmania.data

class Player (
    //val Name: String,
    var pieces: List<Piece>,
    var won: Boolean = false,
    val homeBase: Coordinate,
    val opp: Player? = null
){
}