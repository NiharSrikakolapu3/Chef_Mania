import axios from "axios";

const GameApiClient = axios.create({ baseURL: "http://localhost:8080" });

export const createNewGame = () => GameApiClient.post("/api/game");
export const getBoard = () => GameApiClient.get("/api/game/board");
export const getPlayerCards = () => GameApiClient.get("/api/game/player");
export const getComputerCards = () => GameApiClient.get("/api/game/computer");
export const getCenterCard = () => GameApiClient.get("/api/game/center");

//work on delete
