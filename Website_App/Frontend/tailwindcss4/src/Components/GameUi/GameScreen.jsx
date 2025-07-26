import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import modeSelectionBackground from "../../Assets/ModeSelectionBackground.png";

function GameScreen() {
  const navigate = useNavigate();
  const [hoveredMode, setHoveredMode] = useState(null);

  function goBack() {
    navigate("/game");
  }

  function DifficultySelection() {
    navigate("/game/difficultySelection");
  }

  const modes = [
    {
      id: "solo",
      title: "Solo Battle",
      description: "Challenge yourself against AI opponents",
      color: "from-yellow-500 to-red-700",
      icon: "👤",
    },
    {
      id: "online",
      title: "Online Battle",
      description: "Compete against players worldwide",
      color: "from-orange-500 to-red-800",
      icon: "🌐",
    },
  ];

  return (
    <div
      className="min-h-screen w-full overflow-hidden relative font-game bg-cover bg-center"
      style={{
        backgroundImage: `url(${modeSelectionBackground})`,
      }}
    >
      <motion.button
        onClick={goBack}
        className="absolute z-50 top-6 left-6 bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-3 rounded-full shadow-lg flex items-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="mr-2 text-xl">←</span>
        <span>Back to Menu</span>
      </motion.button>

      <div className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center p-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 text-outline"
            animate={{
              textShadow: [
                "0 0 10px rgba(255, 100, 0, 0.8)",
                "0 0 20px rgba(255, 50, 0, 0.9)",
                "0 0 30px rgba(255, 0, 0, 1)",
                "0 0 20px rgba(255, 50, 0, 0.9)",
                "0 0 10px rgba(255, 100, 0, 0.8)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            SELECT YOUR BATTLE
          </motion.h1>

          <motion.div
            className="w-64 h-1 bg-gradient-to-r from-yellow-500 to-red-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "24rem" }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <motion.p
            className="mt-6 text-yellow-200 text-xl max-w-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Choose your challenge and prove your culinary skills in the kitchen
            arena!
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          {modes.map((mode) => (
            <motion.div
              key={mode.id}
              className={`relative bg-gradient-to-br ${
                mode.color
              } rounded-2xl overflow-hidden shadow-2xl cursor-pointer transform transition-all duration-300 ${
                hoveredMode === mode.id ? "scale-105 z-20" : "scale-100"
              }`}
              whileHover={{
                y: -20,
                boxShadow: "0 25px 50px -12px rgba(255, 100, 0, 0.5)",
              }}
              onHoverStart={() => setHoveredMode(mode.id)}
              onHoverEnd={() => setHoveredMode(null)}
              onClick={() => {
                if (mode.id === "solo") {
                  DifficultySelection();
                } else {
                  // online stuff later
                }
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: mode.id === "solo" ? 0.3 : 0.6,
              }}
            >
              <div className="p-8 flex flex-col items-center">
                <div className="text-6xl mb-4 drop-shadow-[0_0_10px_rgba(255,100,0,0.8)]">
                  {mode.icon}
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  {mode.title}
                </h2>
                <p className="text-yellow-100 text-center mb-6">
                  {mode.description}
                </p>

                <motion.button
                  className="mt-4 px-8 py-3 rounded-full font-bold text-white bg-black bg-opacity-40 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  SELECT MODE
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Bangers&display=swap");

        .font-game {
          font-family: "Bangers", cursive;
          letter-spacing: 2px;
        }

        .text-outline {
          text-shadow: -3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000,
            3px 3px 0 #000, 0 0 10px rgba(255, 100, 0, 0.8);
        }

        body {
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default GameScreen;
