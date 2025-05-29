package com.example.chefmania.data

data class Player (
    val name: String,
    var pieces: List<Piece>,
    var won: Boolean = false,
    val homeBase: Coordinate,
    val opp: Player = Player(name = "", pieces = emptyList(), homeBase =  Coordinate(0,0)),
    var movesets: MutableList<MoveSet> = emptyList<MoveSet>().toMutableList(),
    val main: MainPiece = MainPiece(Coordinate(0,0))
){
}