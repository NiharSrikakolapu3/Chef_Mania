import { useNavigate } from "react-router-dom";
import modeSelectionBackground from "../../Assets/ModeSelectionBackground.png";
function GameScreen() {
  const navigate = useNavigate();
  function goBack() {
    navigate("/game");
  }
  function DifficultySelection() {
    navigate("/game/difficultySelection");
  }
  return (
    <div>
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${modeSelectionBackground})`,
          backgroundPosition: "center 50%",
        }}
      />
      <button
        onClick={goBack}
        className="absolute z-10 top-4 left-4 bg-red-600 text-white px-4 py-2 rounded hover:from-red-300 hover:to-red-500 cursor-pointer"
      >
        ↵ Go Back
      </button>

      <div className="relative h-screen w-full flex flex-col items-center justify-center">
        <div className="bg-orange-500 bg-opacity-70 p-10 rounded-xl text-center">
          <h1 className="text-4xl font-bold text-blue-400 mb-4">
            Select Game Mode
          </h1>
        </div>
        <div className="flex flex-col ">
          <button className="text-black bg-blue-600 rounded-4xl p-3 mb-2 mt-20  hover:bg-gradient-to-br hover:from-blue-300 hover:to-blue-500 cursor-pointer">
            Story Mode
          </button>
          <button
            onClick={DifficultySelection}
            className="text-black  bg-blue-600 rounded-4xl p-3 mb-2  hover:bg-gradient-to-br hover:from-blue-300 hover:to-blue-500 cursor-pointer"
          >
            Solo Battle
          </button>
          <button className="text-black  bg-blue-600 rounded-4xl p-3 mb-2  hover:bg-gradient-to-br hover:from-blue-300 hover:to-blue-500 cursor-pointer">
            Online Battle
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameScreen;
