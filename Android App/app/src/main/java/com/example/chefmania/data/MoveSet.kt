package com.example.chefmania.data

class MoveSet(
    val moves: List<Coordinate>,
    val name: String
) {


    fun possibleMoves(piece: Piece, card: MoveSet): List<Coordinate>
    {
        val m:List<Coordinate> =  List<Coordinate>(moves.size){ index -> piece.pos.add(moves.get(index))}
        return m
    }

    companion object{
        fun staticSelect5():List<MoveSet>{
            var mutableMovesets: MutableList<MoveSet> = movesets.toMutableList()
            mutableMovesets.shuffle()
            return mutableMovesets.take(5);
        }

        val movesets: List<MoveSet> = listOf(
            MoveSet(name = "Spaghetti", moves = listOf(Coordinate(-1,1),
                Coordinate(-2,0), Coordinate(2,0)
            )),
            MoveSet(name = "Wings", moves = listOf(Coordinate(0,-1),
                Coordinate(1,0), Coordinate(1,1)
            )),
            MoveSet(name = "Omelette", moves = listOf(Coordinate(0,1),
                Coordinate(0,-1), Coordinate(1,0)
            )),
            MoveSet(name = "Hotdog", moves = listOf(Coordinate(-1,0),
                Coordinate(1,0), Coordinate(2,0)
            )),
            MoveSet(name = "Taco", moves = listOf(Coordinate(-1,0),
                Coordinate(0,1), Coordinate(1,0)
            )),
            MoveSet(name = "Hamburger", moves = listOf(Coordinate(-1,1),
                Coordinate(1,1), Coordinate(1,0)
            )),
            MoveSet(name = "Curry", moves = listOf(Coordinate(-1,0),
                Coordinate(-1,0), Coordinate(1,0)
            )),
            MoveSet(name = "Sushi", moves = listOf(Coordinate(-1,0),
                Coordinate(-2,0), Coordinate(1,0)
            )),
            MoveSet(name = "Mac n' Cheese", moves = listOf(Coordinate(0,1),
                Coordinate(-1,0), Coordinate(0,-1)
            )),
            MoveSet(name = "Steak", moves = listOf(Coordinate(-1,1),
                Coordinate(-1,0), Coordinate(0,-1)
            )),
            MoveSet(name = "Cake", moves = listOf(Coordinate(0,-1),
                Coordinate(-1,0), Coordinate(1,1)
            )),
            MoveSet(name = "Salad", moves = listOf(Coordinate(-1,1),
                Coordinate(-1,-1), Coordinate(1,-1)
            )),
            MoveSet(name = "Rice", moves = listOf(Coordinate(0,2),
                Coordinate(-2,-2), Coordinate(2,-2)
            )),
            MoveSet(name = "Pizza", moves = listOf(Coordinate(0,1),
                Coordinate(-1,-1), Coordinate(1,-1)
            )),
            MoveSet(name = "Ice Cream", moves = listOf(Coordinate(0,1),
                Coordinate(0,-1), Coordinate(0,-2)
            )),
        )

    }
}