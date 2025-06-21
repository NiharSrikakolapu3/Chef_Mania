import { useEffect, useState } from "react";
import Board from "./Board";


import {
  createNewGame,
  getBoard,
  getCenterCard,
  getComputerCards,
  getPlayerCards,
  getCurrentTurn,
  putMovePiece,
  getValidMoves,
} from "../GameApi/GameApiService";

import { gameCardsLists } from "../LaunchPageUI/GameCards";

export default function SoloBattle() {
  const [error, setError] = useState(null);
  const [board, setBoard] = useState([]);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [playerCards, setPlayerCards] = useState([]);
  const [computerCards, setComputerCards] = useState([]);
  const [centerCard, setCenterCard] = useState(null);
  const [currentTurn, setCurrentTurn] = useState(null);
  const [progress, setProgress] = useState(0);
  const [gameReady, setGameReady] = useState(false);
  const [validMoves, setValidMoves] = useState([]);

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => setProgress((prev) => prev + 5), 200);
      return () => clearTimeout(timer);
    } else if (!gameReady) {
      loadGameData();
    }
  }, [progress, gameReady]);

  useEffect(() => {
    console.log("Selection updated:", {
      card: selectedCard?.names,
      piece: selectedPiece,
      turn: currentTurn
    });

    if (selectedCard && selectedPiece && currentTurn === "Player") {
      if (selectedPiece.x === undefined || selectedPiece.y === undefined) {
        console.error("Invalid piece coordinates:", selectedPiece);
        setError("Selected piece has invalid coordinates");
        return;
      }
      fetchValidMoves(selectedCard, selectedPiece);
    }
  }, [selectedCard, selectedPiece, currentTurn]);

  async function loadGameData() {
    try {
      setError(null);
      await createNewGame();
      const [boardRes, playerRes, compRes, centerRes, currentTurnRes] =
        await Promise.all([
          getBoard(),
          getPlayerCards(),
          getComputerCards(),
          getCenterCard(),
          getCurrentTurn(),
        ]);

      console.log("Game initialized:", {
        board: boardRes.data?.board,
        playerCards: playerRes.data,
        computerCards: compRes.data,
        centerCard: centerRes.data,
        turn: currentTurnRes.data
      });

      setBoard(boardRes.data?.board);
      setPlayerCards(playerRes.data);
      setComputerCards(compRes.data);
      setCenterCard(centerRes.data);
      setCurrentTurn(currentTurnRes.data);
      setGameReady(true);
    } catch (error) {
      console.error("Game initialization failed:", error);
      setError("Failed to initialize game: " + error.message);
    }
  }

    async function makeMove(from, to, cardUsed) {
    
      console.log("Attempting move:", { from, to, cardUsed });
    try {
      if (currentTurn !== "Player") {
        setError("It's not your turn!");
        return;
      }

      if (!selectedCard) {
        setError("Please select a card first");
        return;
      }

      setError(null);
     // alert("Made it here 0");
     await putMovePiece(from, to, cardUsed);
      //alert("Made it here 3");
      await new Promise(resolve => setTimeout(resolve, 100)); 
      // Refresh game state
      const [boardRes, playerRes, compRes, centerRes, currentTurnRes] =
        await Promise.all([
          getBoard(),
          getPlayerCards(),
          getComputerCards(),
          getCenterCard(),
          getCurrentTurn(),
        ]);
      //alert("Made it here");

      setBoard(boardRes.data?.board);
      setPlayerCards(playerRes.data);
      setComputerCards(compRes.data);
      setCenterCard(centerRes.data);
      setCurrentTurn(currentTurnRes.data);
      setSelectedPiece(null);
      setSelectedCard(null);
      setValidMoves([]);
      //alert("Made it here 2");

    } catch (error) {
      console.error("Move failed:", error);
      setError("Move failed: " + error.message);
    }
  }

  async function fetchValidMoves(selectedCard, selectedPiece) {
  try {
    setValidMoves([]);
    const response = await getValidMoves(selectedCard, {
      x: selectedPiece.x,
      y: selectedPiece.y
    });
    console.log("Valid moves received:", response.data);
    setValidMoves(response.data);
  } catch (error) {
    console.error("Failed to fetch moves:", error);
    setError("Couldn't get valid moves: " + error.message);
  }
}


  function getCard(name) {
    const cardData = gameCardsLists.find((card) => card.name === name);
    return cardData?.card;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white p-6">
      {!gameReady ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl tracking-widest font-bold mb-6 text-yellow-300">
            Getting Game Ready...
          </h1>
          <div className="w-80 h-4 bg-gray-200 rounded-full overflow-hidden border border-yellow-400">
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 transition-all duration-200"
            ></div>
          </div>
          <p className="mt-3 text-lg text-amber-200 font-medium">{progress}%</p>
        </div>
      ) : (
        <div className="max-w-screen-xl mx-auto space-y-12">
          <div className="flex justify-center space-x-6 mt-8">
            {computerCards.map((card, index) => (
              <div
                key={index}
                className="hover:scale-105 transform transition duration-300"
              >
                <div className="bg-[#2c2f34] p-3 rounded-xl shadow-lg border-2 border-red-700">
                  {getCard(card.names)}
                </div>
              </div>
            ))}
          </div>

          <div className="relative flex justify-center items-center">
            <Board
              data={board}
              selectedPiece={selectedPiece}
              setSelectedPiece={setSelectedPiece}
              selectedCard={selectedCard}
              makeMove={makeMove}
              validMoves={validMoves}
              setValidMoves={setValidMoves}
            />

            {centerCard && (
              <div className="absolute translate-x-160 translate-y-5 hover:scale-105 transition duration-300">
                <div className="bg-[#3a3d40] p-3 rounded-xl shadow-2xl border-2 border-amber-400">
                  {getCard(centerCard.names)}
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            {playerCards.map((card, index) => (
              <div
                key={index}
                onClick={() => {
                  if (currentTurn === "Player") {
                    setSelectedCard(card);
                    setError(null);
                  }
                }}
                className={`cursor-pointer hover:scale-105 transform transition duration-300
                  ${
                    selectedCard?.names === card.names
                      ? "border-4 border-green-400"
                      : "border-2 border-blue-500 hover:border-blue-400"
                  }
                `}
              >
                <div className="bg-[#2c2f34] p-3 rounded-xl shadow-lg">
                  {getCard(card.names)}
                </div>
              </div>
            ))}
          </div>

          {/* Debug Panel */}
          <div className="fixed bottom-4 left-4 bg-gray-800 p-4 rounded-lg text-xs max-w-xs">
            <h3 className="font-bold mb-2">Debug Info:</h3>
            <div>Selected Card: {selectedCard?.names || "None"}</div>
            <div>
              Selected Piece: {selectedPiece ? 
                `X:${selectedPiece.x}, Y:${selectedPiece.y}` : "None"}
            </div>
            <div>Current Turn: {currentTurn}</div>
            <div>
              Valid Moves: {validMoves.length > 0 ? 
                JSON.stringify(validMoves) : "None"}
            </div>
            {error && <div className="text-red-400 mt-2">Error: {error}</div>}
          </div>
        </div>
      )}
    </div>
  );
}