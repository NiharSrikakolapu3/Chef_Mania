import { useEffect, useState } from "react";
import Board from "./Board";

import {
  createNewGame,
  getBoard,
  getCenterCard,
  getComputerCards,
  getPlayerCards,
} from "../GameApi/GameApiService";
import { gameCardsLists } from "../LaunchPageUI/GameCards";

export default function SoloBattle() {
  const [board, setBoard] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [computerCards, setComputerCards] = useState([]);
  const [centerCard, setCenterCard] = useState(null);

  const [progress, setProgress] = useState(0);
  const [gameReady, setGameReady] = useState(false);

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => setProgress((prev) => prev + 5), 200);
      return () => clearTimeout(timer);
    } else {
      loadGameData();
    }
  }, [progress]);

  async function loadGameData() {
    try {
      const gameCreated = await createNewGame();
      console.log("Game created:", gameCreated);
      const boardRes = await getBoard();
      const playerRes = await getPlayerCards();
      const compRes = await getComputerCards();
      const centerRes = await getCenterCard();

      setBoard(boardRes.data.board);
      setPlayerCards(playerRes.data);
      setComputerCards(compRes.data);
      setCenterCard(centerRes.data);

      setGameReady(true);
    } catch (error) {
      console.log("Error loading game data:", error);
    }
  }

  function getCard(name) {
    const cardData = gameCardsLists.find((card) => card.name === name);

    return cardData?.card || null;
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
            {console.log(board)}
            <Board data={board} />
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
                className=" cursor-pointer hover:scale-105 transform transition duration-300"
              >
                <div className="bg-[#2c2f34] p-3 rounded-xl shadow-lg border-2 border-blue-500 hover:border-blue-400">
                  {getCard(card.names)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
