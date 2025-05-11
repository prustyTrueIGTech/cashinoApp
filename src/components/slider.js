import React, { useState } from "react";
import cartoon1 from "../assets/png/cartoon1.png";
import cartoon2 from "../assets/png/cartoon2.png";
import cartoon3 from "../assets/png/cartoon3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const Slider = () => {
  const cards = [cartoon1, cartoon2, cartoon3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full mx-auto mt-4">
      {/* Image container */}
      <div className="overflow-hidden rounded-lg shadow-xl w-full h-auto flex justify-center items-center bg-black">
        <img
          src={cards[currentIndex]}
          alt={`Cartoon ${currentIndex + 1}`}
          className="w-full h-[580px] object-fill"
        />
      </div>

      {/* Navigation buttons */}
      <div className="absolute inset-y-1/2 left-0 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="bg-black bg-opacity-30 text-white px-3 py-2 rounded-full hover:bg-opacity-50 transition"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>
      <div className="absolute inset-y-1/2 right-0 transform -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="bg-black bg-opacity-30 text-white px-3 py-2 rounded-full hover:bg-opacity-50 transition"
        >
          <FontAwesomeIcon icon={faChevronRight} />
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
