import React, { useState } from "react";
import cartoon1 from "../assets/png/cartoon1.png";
import cartoon2 from "../assets/png/cartoon2.png";
import cartoon3 from "../assets/png/cartoon3.png";

export const Slider = () => {
  const cards = [
    <img
      src={cartoon1}
      alt="Cartoon 1"
      className="w-full h-full object-fill mx-auto"
    />,
    <img
      src={cartoon2}
      alt="Cartoon 2"
      className="w-full h-full object-fill mx-auto"
    />,
    <img
      src={cartoon3}
      alt="Cartoon 3"
      className="w-full h-full object-fill mx-auto "
    />,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full mx-auto mt-4">
      <div className="overflow-hidden rounded-lg shadow-xl w-full h-[400px] object-contain">
        {cards[currentIndex]}
      </div>

      {/* Controls */}
      <div className="absolute inset-y-1/2 left-0 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="bg-black bg-opacity-30 text-white px-3 py-2 rounded-full hover:bg-opacity-50 transition"
        >
          ‹
        </button>
      </div>
      <div className="absolute inset-y-1/2 right-0 transform -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="bg-black bg-opacity-30 text-white px-3 py-2 rounded-full hover:bg-opacity-50 transition"
        >
          ›
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-red-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};