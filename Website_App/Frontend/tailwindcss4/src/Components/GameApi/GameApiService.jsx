import axios from "axios";

const GameApiClient = axios.create({
  baseURL: "http://localhost:8080/",
  withCredentials: true,
});

export const createNewGame = () => GameApiClient.post("/api/game");
export const getBoard = () => GameApiClient.get("/api/game/board");
export const getPlayerCards = () => GameApiClient.get("/api/game/player");
export const getComputerCards = () => GameApiClient.get("/api/game/computer");
export const getCenterCard = () => GameApiClient.get("/api/game/center");
export const getCurrentTurn = () => GameApiClient.get("/api/game/currentTurn");

export const putMovePiece = (from, to, cardUsed) =>
  GameApiClient.put("/api/game/playerMove", {
    from: {
      x: from.x,
      y: from.y,
    },

    to: {
      x: to.x,
      y: to.y,
    },
    cardUsed,
    chef: false,
  });

export const getValidMoves = (yourCard, yourPiece) =>
  GameApiClient.post("/api/game/validMoves", {
    yourCard,
    yourPieces: yourPiece,
  });
export const getComputerMove = (currentState) =>
  GameApiClient.post("/api/game/computerMove", {
    currentState,
  });
export const getGame = () => GameApiClient.get("/api/game/gameRunning");

export const gameOver = () => GameApiClient.delete("/api/game/reset");
//work on delete
