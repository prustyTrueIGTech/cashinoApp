import React from "react";
import arrow from "../assets/png/cashino1.png"; // Your arrow/logo image
import winner1 from "../assets/png/cashino1.png"; // Replace with real paths
import winner2 from "../assets/png/cashino1.png";
import winner3 from "../assets/png/cashino1.png";

export const WinnerGallery = () => {


  const winners = [
    { name: "Parasmall Jawantraj Shah", image: winner1, bg: "bg-orange-600" },
    { name: "Rajesh Jagadanand Purohit", image: winner2, bg: "bg-blue-800" },
    { name: "Basanti Rajesh Purohit", image: winner3, bg: "bg-lime-600" },
  ];

  return (
    <>

      {/* Winner Cards */}
      <div>
        <h2 className="text-2xl font-semibold text-center mb-6">Winners</h2>
        <div className="flex flex-wrap justify-center gap-6 px-8 my-12">
          {winners.map((winner, index) => (
            <div
              key={index}
              className={`relative w-full sm:w-72 py-20 px-6 text-white text-center ${winner.bg} overflow-hidden rounded-r-[40px]`}
            >
              {/* Left notches only */}
              <div className="absolute left-0 top-0 h-full w-4 flex flex-col justify-between py-2 z-10">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-white rounded-r-full"></div>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4 text-yellow-300">
                Won ₹10 Lakhs
              </h3>
              <img
                src={winner.image}
                alt={winner.name}
                className="w-24 h-24 rounded-full mx-auto border-4 border-white"
              />
              <p className="mt-4 font-medium text-white">{winner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
