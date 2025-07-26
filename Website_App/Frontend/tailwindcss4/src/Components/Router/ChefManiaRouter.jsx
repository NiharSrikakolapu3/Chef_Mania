import { BrowserRouter, Routes, Route } from "react-router-dom";
import LaunchHomePage from "../../Pages/LaunchHomePage";
import ChefManiaGame from "../../Pages/ChefManiaGame";
import GameScreen from "../GameUi/GameScreen";
import Instructions from "../GameUi/Instructions";
import SoloBattle from "../GameUi/SoloBattle";
import DifficultySelection from "../GameUi/DifficultySelection";
function ChefManiaRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LaunchHomePage />} />
        <Route path="/game" element={<ChefManiaGame />} />
        <Route path="/game/modes" element={<GameScreen />} />
        <Route path="/game/instructions" element={<Instructions />} />
        <Route path="/game/solo/:difficulty" element={<SoloBattle />} />
        <Route
          path="/game/difficultySelection"
          element={<DifficultySelection />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default ChefManiaRouter;
