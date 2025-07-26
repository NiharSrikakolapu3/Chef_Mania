import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import backgroundImg from "../Assets/Chef_Mania_Background.png";
import Title from "../Assets/Title.png";

function ChefManiaGame() {
  const navigate = useNavigate();

  const [isExiting, setIsExiting] = useState(false);
  const [targetPath, setTargetPath] = useState(null);

  const navigateWithFade = (path) => {
    setIsExiting(true);
    setTargetPath(path);
  };

  useEffect(() => {
    if (isExiting && targetPath) {
      const timer = setTimeout(() => {
        navigate(targetPath);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isExiting, targetPath, navigate]);

  const content = () => {
    return (
      <motion.div
        className="relative h-screen w-full overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: isExiting ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div
          className="fixed inset-0 bg-cover bg-center z-0 animate-pulse-slow"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundPosition: "center 30%",
          }}
        />

        <div className="relative z-20 h-full flex flex-col items-center justify-between py-10">
          <motion.img
            src={Title}
            alt="Chef Mania Title"
            className="w-3/4 max-w-md drop-shadow-xl"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />

          <div className="flex flex-col items-center space-y-8 mt-4">
            <motion.button
              className={buttonStyle}
              onClick={() => navigateWithFade("/game/modes")}
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px #facc15" }}
              whileTap={{ scale: 0.95 }}
            >
              START GAME
            </motion.button>

            <motion.button
              className={buttonStyle}
              onClick={() => navigateWithFade("/game/instuctions")}
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px #facc15" }}
              whileTap={{ scale: 0.95 }}
            >
              INSTRUCTIONS
            </motion.button>

            <motion.button
              className={buttonStyle}
              onClick={() => {
                playClickSound();
                navigate("/");
              }}
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px #facc15" }}
              whileTap={{ scale: 0.95 }}
            >
              QUIT
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  };

  const buttonStyle = `
    relative px-10 py-5
    text-3xl font-extrabold tracking-wide
    text-yellow-300
    bg-gradient-to-b from-purple-700 to-purple-900
    border-4 border-yellow-400
    rounded-2xl
    shadow-2xl
    hover:bg-purple-900
    hover:text-blue-300
    transition-all duration-300
  `;

  return <div>{content()}</div>;
}

export default ChefManiaGame;
