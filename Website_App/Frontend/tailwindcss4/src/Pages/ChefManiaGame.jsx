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

  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0 0 12px #facc15, 0 0 24px #fbbf24",
      color: "#60a5fa",
      background: "linear-gradient(to bottom, #7c3aed, #6b21a8)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    tap: {
      scale: 0.95,
      boxShadow: "0 0 5px #facc15",
      transition: { duration: 0.1 },
    },
  };

  return (
    <div
      className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center p-4"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
        backgroundColor: "rgba(0,0,0,0.8)",
      }}
    >
      <motion.div
        className="relative text-center w-11/12 max-w-xl"
        initial={{ opacity: 1 }}
        animate={{ opacity: isExiting ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div
          className="relative overflow-hidden mb-10"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <img
            src={Title}
            alt="Chef Mania Title"
            className="w-full drop-shadow-[0_0_10px_rgba(107,33,168,0.75)]"
          />

          <motion.div
            className="absolute top-0 left-[-75%] h-full w-20 pointer-events-none blur-md mix-blend-screen"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)",
            }}
            animate={{ x: ["-75%", "125%"] }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <div className="flex flex-col gap-6 max-w-xs mx-auto">
          {[
            { text: "START GAME", path: "/game/modes" },
            { text: "INSTRUCTIONS", path: "/game/instructions" },
            { text: "QUIT", path: "/" },
          ].map(({ text, path }) => (
            <motion.button
              key={text}
              onClick={() => navigateWithFade(path)}
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
              className="
                relative
                w-full
                px-0 py-3
                text-xl sm:text-2xl
                font-extrabold
                tracking-wider
                text-yellow-300
                bg-gradient-to-b from-purple-700 to-purple-900
                border-4 border-yellow-400
                rounded-xl
                shadow-2xl
                cursor-pointer
                select-none
                transition-all duration-300
                hover:text-blue-400
              "
            >
              {text}
              <Sparkles />
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const Sparkles = () => (
  <motion.span
    className="absolute top-0 left-0 w-full h-full pointer-events-none mix-blend-screen z-10"
    initial={false}
    animate={{
      opacity: [0, 1, 0],
      scale: [1, 1.3, 1],
      rotate: [0, 10, 0],
      x: [0, 10, 0],
      y: [0, -10, 0],
    }}
    transition={{
      repeat: Infinity,
      duration: 1.5,
      ease: "easeInOut",
      repeatDelay: 1,
    }}
  />
);

export default ChefManiaGame;
