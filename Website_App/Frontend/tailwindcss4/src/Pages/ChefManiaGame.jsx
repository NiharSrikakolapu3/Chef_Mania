import { useNavigate } from "react-router-dom";
import backgroundImg from "../Assets/Chef_Mania_Background.png";
import Title from "../Assets/Title.png";
import { useState } from "react";
import { motion } from "framer-motion";

function ChefManiaGame() {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState("Menu");

  const content = () => {
    switch (gameState) {
      case "StartGame":
        return <div>{navigate("/game/modes")}</div>;
      case "Instructions":
        return <div>{navigate("/game/instuctions")}</div>;
      default:
        return (
          <div className="relative h-screen w-full">
            <div
              className="fixed inset-0 bg-cover bg-center z-0"
              style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundPosition: "center 30%",
              }}
            />

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex-1 flex items-center justify-center pt-8">
                <img
                  src={Title}
                  alt="Chef Mania Title"
                  className="w-3/4 max-w-md drop-shadow-lg"
                />
              </div>

              <div className="flex-1 flex flex-col items-center justify-start mt-8 space-y-8">
                <MotionButton onClick={() => setGameState("StartGame")}>
                  START GAME
                </MotionButton>
                <MotionButton onClick={() => setGameState("Instructions")}>
                  INSTRUCTIONS
                </MotionButton>
                <MotionButton onClick={() => navigate("/")}>QUIT</MotionButton>
              </div>
            </div>
          </div>
        );
    }
  };

  return <div>{content()}</div>;
}

const MotionButton = ({ onClick, children }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.1, boxShadow: "0 0 20px #facc15" }}
    whileTap={{ scale: 0.95 }}
    className={`
      relative px-10 py-5 
      text-3xl font-extrabold tracking-wide
      text-yellow-300 
      bg-gradient-to-b from-purple-700 to-purple-900 
      border-4 border-yellow-400 
      rounded-2xl 
      shadow-2xl 
      transition-all duration-300
      hover:text-blue-300 
    `}
  >
    {children}
  </motion.button>
);

export default ChefManiaGame;
