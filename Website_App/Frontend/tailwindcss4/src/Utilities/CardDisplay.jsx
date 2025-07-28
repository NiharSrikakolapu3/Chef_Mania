import { motion, useTransform, useMotionValue } from "framer-motion";
import { useState } from "react";

export default function CardDisplay({
  cardFront,
  cardBack = null,
  isSelected = false,
  onClick,
  isActive = true,
  isComputer = false,
  size = "medium",
  borderColor = "border-gray-600",
}) {
  const [flipped, setFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [0, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 100], [-10, 10]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  function handleMouseLeave() {
    mouseX.set(50);
    mouseY.set(50);
  }

  function handleClick() {
    if (!isActive) return;
    if (onClick) onClick();
    if (cardBack) setFlipped((f) => !f);
  }

  const sizeClasses = {
    small: "w-24 h-32",
    medium: "w-32 h-44",
    large: "w-40 h-56",
  };

  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  const cardVariants = {
    initial: {
      opacity: 0,
      y: 40,
      rotate: -10 + Math.random() * 20,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hover: isActive
      ? {
          scale: 1.05,
          y: -8,
          zIndex: 10,
          transition: { duration: 0.2 },
        }
      : {},
  };

  return (
    <motion.div
      className={`relative cursor-pointer ${sizeClasses[size]} perspective`}
      onClick={handleClick}
      onMouseMove={isActive ? handleMouseMove : undefined}
      onMouseEnter={isActive ? () => setIsHovered(true) : undefined}
      onMouseLeave={
        isActive
          ? () => {
              setIsHovered(false);
              handleMouseLeave();
            }
          : undefined
      }
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      layout
    >
      <motion.div
        className="relative w-full h-full rounded-xl shadow-lg"
        style={{
          transformStyle: "preserve-3d",
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
        }}
        variants={flipVariants}
        animate={flipped ? "back" : "front"}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        {/* Front Side */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-xl border-2 shadow-lg flex items-center justify-center select-none ${borderColor}`}
          style={{ backfaceVisibility: "hidden" }}
        >
          {cardFront}
        </div>

        {/* Back Side */}
        {cardBack && (
          <div
            className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 p-3 rounded-xl border-2 border-gray-600 shadow-lg flex items-center justify-center select-none"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {cardBack}
          </div>
        )}
      </motion.div>

      {isSelected && (
        <motion.div
          className="absolute -inset-1 rounded-xl bg-green-400 blur-md pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 0.5,
            scale: 1,
            boxShadow: "0 0 20px 5px rgba(74, 222, 128, 0.5)",
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.2,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.div>
  );
}
