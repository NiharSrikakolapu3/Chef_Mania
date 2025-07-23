import { useNavigate } from "react-router-dom";

function DifficultySelection() {
  const navigate = useNavigate();

  function handleSelectDifficulty(difficulty) {
    navigate(`/game/solo/${difficulty}`);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-yellow-200 to-orange-400">
      <div className="bg-white bg-opacity-80 p-8 rounded-xl shadow-xl text-center">
        <h1 className="text-3xl font-bold mb-6 text-black">
          Select Difficulty
        </h1>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleSelectDifficulty("easy")}
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
          >
            Easy
          </button>
          <button
            onClick={() => handleSelectDifficulty("normal")}
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600"
          >
            Normal
          </button>
          <button
            onClick={() => handleSelectDifficulty("hard")}
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
          >
            Hard
          </button>
        </div>
      </div>
    </div>
  );
}

export default DifficultySelection;
