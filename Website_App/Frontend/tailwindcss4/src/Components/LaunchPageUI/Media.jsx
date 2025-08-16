import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Media() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const screenshots = [
    {
      id: 1,
      title: "Battle",
      image: "src/Assets/battle.png",
    },
    {
      id: 2,
      title: "Move",
      image: "src/Assets/Move.png",
    },
    {
      id: 3,
      title: "Attack",
      image: "src/Assets/Attack.png",
    },
    {
      id: 4,
      title: "Capture",
      image: "/api/placeholder/600/400",
    },
    {
      id: 5,
      title: "Defend",
      image: "src/Assets/Defend.png",
    },
    {
      id: 6,
      title: "Victory",
      image: "/api/placeholder/600/400",
    },
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  const currentScreenshot = screenshots[currentIndex];

  return (
    <section id="Media" className="py-20 bg-black">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-20 bg-red-500 rounded-full opacity-10"></div>
        <div className="absolute top-20 right-20 w-40 h-24 bg-red-600 rounded-full opacity-8"></div>
        <div className="absolute bottom-20 left-1/4 w-36 h-22 bg-red-400 rounded-full opacity-12"></div>
        <div className="absolute bottom-10 right-10 w-28 h-16 bg-red-500 rounded-full opacity-10"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Media</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Take a look at Chef Mania in action
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative mb-8">
            <div className="bg-red-900 rounded-2xl p-6 shadow-2xl">
              <img
                src={currentScreenshot.image}
                alt={currentScreenshot.title}
                className="w-full h-[500px] object-cover rounded-xl"
              />
            </div>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-500 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-500 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white">
              {currentScreenshot.title}
            </h3>
          </div>

          <div className="flex justify-center space-x-3">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-red-500 scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
