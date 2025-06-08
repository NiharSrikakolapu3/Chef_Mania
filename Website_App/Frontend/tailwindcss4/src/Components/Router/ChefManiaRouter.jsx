import { BrowserRouter, Routes, Route } from "react-router-dom";
import LaunchHomePage from "../../Pages/LaunchHomePage";
import ChefManiaGame from "../../Pages/ChefManiaGame";

function ChefManiaRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LaunchHomePage />} />
        <Route path="/game" element={<ChefManiaGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ChefManiaRouter;
