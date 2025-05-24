package com.example.chefmania.ui

import com.example.chefmania.data.*

data class GameUiState(
    var currentSelectedPiece: Piece? = null,
    var currentSelectedMovSet: MoveSet? = null,
    var turn: Player? = null,
    val movesets: List<MoveSet>? = null,
    val players: List<Player>? = null,
    var winner: Player? = null,
    val squares: List<List<Coordinate>> = listOf(
        listOf(Coordinate(0,0),
            Coordinate(0,1),
            Coordinate(0,2),
            Coordinate(0,3),
            Coordinate(0,4)),
        listOf(Coordinate(1,0),
            Coordinate(1,1),
            Coordinate(1,2),
            Coordinate(1,3),
            Coordinate(1,4)),
        listOf(Coordinate(2,0),
            Coordinate(2,1),
            Coordinate(2,2),
            Coordinate(2,3),
            Coordinate(2,4)),
        listOf(Coordinate(3,0),
            Coordinate(3,1),
            Coordinate(3,2),
            Coordinate(3,3),
            Coordinate(3,4)),
        listOf(Coordinate(4,0),
            Coordinate(4,1),
            Coordinate(4,2),
            Coordinate(4,3),
            Coordinate(4,4)),
    )
)
