package com.example.chefmania.data

import com.example.chefmania.ui.GameUiState
import kotlinx.coroutines.flow.StateFlow
import kotlin.math.max

class aiAlgo1 {
    val maxDepth: Int = 3;

    fun succ(gameState:GameUiState): List<GameUiState>{
        val currentPlayer = gameState.turn
        val board = gameState.squares
        val succStates = emptyList<GameUiState>().toMutableList()
        if (currentPlayer != null) {
            for(i in 0..currentPlayer.movesets.size){
                for(j in 0..currentPlayer.pieces.size){
                    val possibleMoves = currentPlayer.movesets[i].possibleMoves(currentPlayer.pieces[j], board)
                    for(k in possibleMoves){
                        val temp = gameState.copy(turn = currentPlayer.opp)
                        val plyr = temp.turn.opp
                        temp.squares[k.x][k.y].occupant = plyr.pieces[j].pos.occupant
                        plyr.pieces[j].pos.occupant = Occupancy.Vacant
                        plyr.pieces[j].pos = temp.squares[k.x][k.y]

                        val usedMove = plyr.movesets[i]
                        plyr.movesets[i] = temp.standby?: MoveSet(emptyList(), "")
                        temp.standby = usedMove

                        if(temp.squares[k.x][k.y].occupant != Occupancy.Vacant){
                            for(b in 1..(plyr.opp?.pieces?.size ?: 0)){
                                if(plyr.opp.pieces[b].pos == temp.squares[k.x][k.y]){
                                    plyr.opp.pieces[b].alive = false
                                    var mutabletemp = plyr.opp.pieces.toMutableList()
                                    mutabletemp.removeAt(b)
                                    plyr.opp.pieces = mutabletemp.toList()
                                }
                            }
                        }
                        succStates.add(temp)
                    }
                }
            }

        }
        return succStates
    }

    fun gameValue(plyr:Player): Int{
        if(!plyr.main.alive){
            return -1
        }
        if(plyr.main.pos == plyr.opp.homeBase){
            return 1
        }
        if(!plyr.opp.main.alive){
            return 1
        }
        if(plyr.opp.main.pos == plyr.homeBase){
            return -1
        }

        return 0
    }

    fun heuristic(state:GameUiState, plyr: Player): Int{
        return 0
    }

    fun maxValue(state:GameUiState, plyr: Player, depth:Int, alpha:Int, beta:Int): Int{
        if(depth == maxDepth){
            return heuristic(state, plyr)
        }
        var max = alpha
        val states = succ(state)
        for(state in states){
            val value = minValue(state, plyr, depth+1, max, beta)
            if(value > max){
                max = value
            }
            if(max>= beta){
                return beta
            }
        }
        return max
    }

    fun minValue(state:GameUiState, plyr: Player, depth:Int, alpha:Int, beta:Int): Int{
        if(depth == maxDepth){
            return heuristic(state, plyr)
        }
        var min = beta
        val states = succ(state)
        for(state in states){
            val value = maxValue(state, plyr, depth+1, alpha, min)
            if(value < min){
                min = value
            }
            if(alpha >= min){
                return alpha
            }
        }
        return min
    }

    fun makeMove(){

    }
}