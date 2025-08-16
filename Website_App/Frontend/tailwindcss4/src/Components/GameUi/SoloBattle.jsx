import { useEffect, useState } from "react";
import Board from "./Board";
import { setItem, getItem } from "../../Utilities/localStorage";

import {
  createNewGame,
  getBoard,
  getCenterCard,
  getComputerCards,
  getPlayerCards,
  getCurrentTurn,
  putMovePiece,
  getValidMoves,
  getGame,
  getComputerMove,
  gameOver,
  getComputerMoveNormal,
  getComputerMoveHard,
} from "../GameApi/GameApiService";

import { gameCardsLists } from "../LaunchPageUI/GameCards";
import { useNavigate, useParams } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

export default function SoloBattle() {
  const [error, setError] = useState(null);
  const [board, setBoard] = useState([]);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [playerCards, setPlayerCards] = useState([]);
  const [computerCards, setComputerCards] = useState([]);
  const [centerCard, setCenterCard] = useState(null);
  const [currentTurn, setCurrentTurn] = useState("");
  const [progress, setProgress] = useState(0);
  const [gameReady, setGameReady] = useState(false);
  const [validMoves, setValidMoves] = useState([]);
  const [currentState, setCurrentState] = useState({});
  const [showQuitModal, setShowQuitModal] = useState(false);
  const [showGameOverMessage, setShowGameOverMessage] = useState(false);
  const [turnMessage, setTurnMessage] = useState("");
  const [winner, setWinner] = useState(null);

  const navigate = useNavigate();

  const { difficulty } = useParams();

  function saveGameState() {
    const gameState = {
      board,
      selectedPiece,
      selectedCard,
      playerCards,
      computerCards,
      centerCard,
      currentTurn,
      validMoves,
    };
    setItem("soloGame", gameState);
  }

  function clearGameState() {
    localStorage.removeItem("soloGame");
  }
  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => setProgress((prev) => prev + 5), 200);
      return () => clearTimeout(timer);
    } else if (!gameReady) {
      const saved = getItem("soloGame");
      if (saved) {
        setBoard(saved.board);
        setSelectedPiece(saved.selectedPiece);
        setSelectedCard(saved.selectedCard);
        setPlayerCards(saved.playerCards);
        setComputerCards(saved.computerCards);
        setCenterCard(saved.centerCard);
        setCurrentTurn(saved.currentTurn);
        setValidMoves(saved.validMoves);
        setGameReady(true);
        setProgress(100);
        setTurnMessage(
          saved.currentTurn === "Player" ? "Your Turn" : "Computer's Turn"
        );
        setTimeout(() => setTurnMessage(""), 2500);
      } else {
        loadGameData();
      }
    }
  }, [progress, gameReady]);
  useEffect(() => {
    if (gameReady) {
      saveGameState();
    }
  }, [
    board,
    selectedPiece,
    selectedCard,
    playerCards,
    computerCards,
    centerCard,
    currentTurn,
    validMoves,
  ]);

  useEffect(() => {
    if (selectedCard && selectedPiece && currentTurn === "Player") {
      if (selectedPiece.x === undefined || selectedPiece.y === undefined) {
        setError("Selected piece has invalid coordinates");
        return;
      }
      fetchValidMoves(selectedCard, selectedPiece);
    }
  }, [selectedCard, selectedPiece, currentTurn]);

  function showTurnSequence(turn) {
    setTurnMessage("Ready...");
    setTimeout(() => setTurnMessage("Set..."), 1000);
    setTimeout(() => setTurnMessage("Go!"), 2000);
    setTimeout(() => {
      setTurnMessage(turn === "Player" ? "Your Turn" : "Computer's Turn");
    }, 3000);
    setTimeout(() => setTurnMessage(""), 4500);
  }
  function resetGame() {
    clearGameState();
    loadGameData();
  }

  async function loadGameData() {
    try {
      setError(null);
      const theCurrentState = await createNewGame();
      setCurrentState(theCurrentState);

      const [
        boardData,
        playerCardsData,
        computerCardsData,
        centerCardData,
        currentTurnData,
      ] = await Promise.all([
        getBoard(),
        getPlayerCards(),
        getComputerCards(),
        getCenterCard(),
        getCurrentTurn(),
      ]);

      setBoard(boardData.data.board);
      setPlayerCards(playerCardsData.data);
      setComputerCards(computerCardsData.data);
      setCenterCard(centerCardData.data);
      setCurrentTurn(currentTurnData.data);
      setGameReady(true);
      showTurnSequence(currentTurnData.data);
    } catch (error) {
      setError("Failed to initialize game: " + error.message);
    }
  }

  async function makeMove(from, to, cardUsed) {
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
      await putMovePiece(from, to, cardUsed);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      await refreshGameState();

      await new Promise((resolve) => setTimeout(resolve, 2500));

      if (difficulty == "easy") {
        await getComputerMove();
      } else if (difficulty == "normal") {
        await getComputerMoveNormal();
      } else if (difficulty == "hard") {
        await getComputerMoveHard();
      }

      await refreshGameState();
    } catch (error) {
      setError("Move failed: " + error.message);
    }
  }

  async function refreshGameState() {
    const [
      boardData,
      playerCardsData,
      computerCardsData,
      centerCardData,
      currentTurnData,
    ] = await Promise.all([
      getBoard(),
      getPlayerCards(),
      getComputerCards(),
      getCenterCard(),
      getCurrentTurn(),
    ]);

    setBoard(boardData.data.board);
    setPlayerCards(playerCardsData.data);
    setComputerCards(computerCardsData.data);
    setCenterCard(centerCardData.data);
    setCurrentTurn(currentTurnData.data);
    setSelectedPiece(null);
    setSelectedCard(null);
    setValidMoves([]);

    setTurnMessage(
      currentTurnData.data === "Player" ? "Your Turn" : "Computer's Turn"
    );

    setTimeout(() => setTurnMessage(""), 2500);

    const latestState = await getGame();
    setCurrentState(latestState.data);
    console.log("game state after move: ", latestState);
    if (latestState.data.player.hasWon === true) {
      setWinner("Player");
    }

    if (latestState.data.computer.hasWon === true) {
      setWinner("Computer");
    }
  }

  async function fetchValidMoves(selectedCard, selectedPiece) {
    try {
      setValidMoves([]);
      const validMovesData = await getValidMoves(selectedCard, {
        x: selectedPiece.x,
        y: selectedPiece.y,
      });

      setValidMoves(validMovesData.data);
    } catch (error) {
      setError("Couldn't get valid moves: " + error.message);
    }
  }

  async function quitGame() {
    const response = await gameOver();
    if (response.data === "") {
      setGameReady(false);
      setBoard([]);
      setPlayerCards([]);
      setComputerCards([]);
      setCenterCard(null);
      setCurrentTurn(null);
      setSelectedPiece(null);
      setSelectedCard(null);
      setValidMoves([]);
      setShowQuitModal(false);
      setShowGameOverMessage(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      clearGameState();
      navigate("/game/modes");
      nav;
    } else {
      console.log("something went wrong");
    }
  }

  function getCard(name) {
    const cardData = gameCardsLists.find((card) => card.name === name);
    return cardData?.card;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white p-6">
      {!gameReady ? (
        <div className="flex flex-col items-center justify-center h-screen z-20 relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from bg-yellow-300 via-orange-400 to-red-500">
            Getting Game Ready...
          </h1>
          <div className="w-full max-w-md h-4 bg-gray-800 rounded-full overflow-hidden border border-yellow-500/50">
            <motion.div
              className="h-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>

          <motion.p
            className="mt-6 text-lg text-amber-200 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {progress}% Complete
          </motion.p>

          <motion.div
            className="mt-10 flex space-x-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-4 h-4 rounded-full bg-yellow-500 animate-pulse"></div>
            <div className="w-4 h-4 rounded-full bg-orange-500 animate-pulse delay-150"></div>
            <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse delay-300"></div>
          </motion.div>
        </div>
      ) : (
        <div className="relative max-w-screen-xl mx-auto space-y-12">
          <AnimatePresence>
            {turnMessage && (
              <motion.div
                key="turnMessage"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed inset-0 flex items-center justify-center z-50"
              >
                <div className="text-5xl text-center font-extrabold text-yellow-300 tracking-wider bg-black bg-opacity-50 px-6 py-4 rounded-2xl shadow-2xl">
                  {turnMessage}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-center space-x-6 mt-8">
            {computerCards.map((card, index) => (
              <div
                key={index}
                className="hover:scale-105 transform transition duration-300"
              >
                <div className="bg-[#2c2f34] p-3 rounded-xl shadow-lg border-2 border-red-700 rotate-180">
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
                <div className="bg-[#373a3d] p-3 rounded-xl shadow-2xl border-2 border-amber-400">
                  {getCard(centerCard.names)}
                </div>
              </div>
            )}
          </div>

          <div className="fixed top-4 right-4 z-50 flex gap-3">
            <button
              onClick={() => resetGame()}
              className="bg-red-400 p-3 rounded-xl shadow-2xl border-2 text-black border-amber-400 hover:scale-105 transition duration-300"
            >
              Reset Game
            </button>
            <button
              onClick={() => setShowQuitModal(true)}
              className="bg-red-400 p-3 rounded-xl shadow-2xl border-2 text-black border-amber-400 hover:scale-105 transition duration-300"
            >
              Quit Game
            </button>
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
        </div>
      )}

      {showQuitModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-transparent flex items-center justify-center z-50">
          <div className="bg-gray-800 border-2 border-yellow-400 p-6 rounded-xl shadow-2xl text-white w-96">
            <h2 className="text-xl font-bold mb-4 text-yellow-300">
              Confirm Quit
            </h2>
            <p className="mb-6">Are you sure you want to quit the game?</p>
            <div className="flex justify-between">
              <button
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white"
                onClick={quitGame}
              >
                Quit
              </button>
              <button
                className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg text-white"
                onClick={() => setShowQuitModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showGameOverMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-red-500 mb-4">Game Over</h1>
            <p className="text-lg text-white">Returning to main menu...</p>
          </div>
        </div>
      )}

      {winner && (
        <div className="fixed inset-0 backdrop-blur-sm bg-transparent flex items-center justify-center z-50">
          <div className="text-center bg-gray-900 p-10 rounded-xl border-4 border-yellow-400 shadow-2xl">
            <h1 className="text-5xl font-bold text-green-400 mb-4">
              {winner === "Player" ? "You Win!" : "Computer Wins!"}
            </h1>
            <button
              onClick={async () => {
                clearGameState();
                setWinner(null);
                setShowGameOverMessage(true);
                await new Promise((resolve) => setTimeout(resolve, 1500));
                navigate("/game/modes");
              }}
              className="mt-4 px-6 py-3 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
            >
              Return to Menu
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
