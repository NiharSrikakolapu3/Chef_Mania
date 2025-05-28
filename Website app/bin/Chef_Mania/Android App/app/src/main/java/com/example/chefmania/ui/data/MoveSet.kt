package com.example.chefmania.ui.data

class MoveSet(
    val moves: List<Coordinate>,
    val name: String
) {
    companion object{
        val movesets: List<MoveSet> = listOf(/*add movesets later*/)

        fun staticSelect5():List<MoveSet>{
           var mutableMovesets: MutableList<MoveSet> = movesets.toMutableList()
            mutableMovesets.shuffle()
            return mutableMovesets.take(5);
        }

    }

    fun possibleMoves(piece:Piece, card:MoveSet): List<Coordinate>
    {
        val m:List<Coordinate> =  List<Coordinate>(moves.size){index -> piece.pos.add(moves.get(index))}
        return m
    }
}