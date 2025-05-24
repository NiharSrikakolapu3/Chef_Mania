package com.example.chefmania.ui

import androidx.lifecycle.ViewModel
import com.example.chefmania.data.Coordinate
import com.example.chefmania.data.MainPiece
import com.example.chefmania.data.MoveSet
import com.example.chefmania.data.Occupancy
import com.example.chefmania.data.Piece
import com.example.chefmania.data.Player
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import java.lang.Thread.State

class GameViewModel: ViewModel() {
    private val _uiState = MutableStateFlow(GameUiState())
    val uiState:StateFlow<GameUiState> = _uiState.asStateFlow()

    init{
        resetGame()
    }

    fun resetGame(){
        val p1: Player = Player(
            pieces = listOf(
                Piece(_uiState.value.squares[0][0]),
                Piece(_uiState.value.squares[1][0]),
                MainPiece(_uiState.value.squares[2][0]),
                Piece(_uiState.value.squares[3][0]),
                Piece(_uiState.value.squares[4][0]),
            ),
            homeBase = Coordinate(2,0)
        )
        for(i in 0 until 5){
            _uiState.value.squares[i][0].occupant = Occupancy.Plyr
        }

        val comp: Player = Player(
            pieces = listOf(
                Piece(_uiState.value.squares[0][4]),
                Piece(_uiState.value.squares[1][4]),
                MainPiece(_uiState.value.squares[2][4]),
                Piece(_uiState.value.squares[3][4]),
                Piece(_uiState.value.squares[4][4])
            ),
            homeBase = Coordinate(2,4)
        )
        for(i in 0 until 5){
            _uiState.value.squares[i][4].occupant = Occupancy.Comp
        }

        _uiState.value = GameUiState(
            movesets = MoveSet.staticSelect5(),
            players = listOf(p1,comp),
            turn = p1
        )
    }

    fun selectPiece(piece:Piece){
        _uiState.update{
            GameUiState -> GameUiState.copy(currentSelectedPiece = piece)
        }
    }

    fun selectMoveset(moveset:MoveSet){
        _uiState.update{
                GameUiState -> GameUiState.copy(currentSelectedMovSet = moveset)
        }
    }

}