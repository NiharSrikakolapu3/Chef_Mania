import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import diffBackgroudScreen from "../../Assets/diffBackgroundScreen.png";
import { useState } from "react";

function DifficultySelection() {
  const navigate = useNavigate();
  const [hoveredDifficulty, setHoveredDifficulty] = useState(null);

  function handleSelectDifficulty(difficulty) {
    navigate(`/game/solo/${difficulty}`);
  }

  const difficulties = [
    {
      id: "easy",
      label: "Easy",
      description: "Perfect for beginners",
      color: "from-green-500 to-emerald-600",
      icon: "🥄",
    },
    {
      id: "normal",
      label: "Normal",
      description: "A balanced challenge",
      color: "from-yellow-500 to-orange-500",
      icon: "🍳",
    },
    {
      id: "hard",
      label: "Hard",
      description: "For culinary masters",
      color: "from-red-500 to-red-700",
      icon: "🔥",
    },
  ];

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center font-game flex flex-col items-center justify-center px-4 py-10"
      style={{ backgroundImage: `url(${diffBackgroudScreen})` }}
    >
      <motion.button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="mr-2 text-xl">←</span>
        <span>Back to Modes</span>
      </motion.button>

      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-red-600 mb-4 text-outline">
          SELECT DIFFICULTY
        </h1>
        <div className="w-64 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full" />
        <p className="mt-4 text-orange-800 text-xl font-bold">
          Choose how challenging your culinary adventure will be!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {difficulties.map((difficulty) => (
          <motion.div
            key={difficulty.id}
            className={`bg-gradient-to-br ${
              difficulty.color
            } rounded-2xl p-8 shadow-xl cursor-pointer transform transition-all duration-300 ${
              hoveredDifficulty === difficulty.id
                ? "scale-105 z-20"
                : "scale-100"
            }`}
            onMouseEnter={() => setHoveredDifficulty(difficulty.id)}
            onMouseLeave={() => setHoveredDifficulty(null)}
            onClick={() => handleSelectDifficulty(difficulty.id)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-6xl mb-4 text-center">{difficulty.icon}</div>
            <h2 className="text-3xl font-bold text-white text-center mb-2">
              {difficulty.label}
            </h2>
            <p className="text-yellow-100 text-center mb-4">
              {difficulty.description}
            </p>
            <div className="flex justify-center">
              <div className="px-6 py-2 rounded-full font-bold text-white bg-black bg-opacity-30 backdrop-blur-sm">
                SELECT
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Bangers&display=swap");

        .font-game {
          font-family: "Bangers", cursive;
          letter-spacing: 2px;
        }

        .text-outline {
          text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000,
            2px 2px 0 #000;
        }
      `}</style>
    </div>
  );
}

export default DifficultySelection;
