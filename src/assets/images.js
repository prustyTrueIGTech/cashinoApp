import React from "react";
import glass from "./png/glass.png";
import stateGov from "./png/stateGov.png";
import lion from "./png/lion.png";
import TajMahal from "./png/TagMahal.png";
import hand from "./png/hand.png";
import logo from "./png/logo.png";
import mamta  from "./png/mamta.png";
import winning from "./png/winning.png";

export const Images1 = () => {
  return (
    <div>
      {/* Lottery Card */}
      <div className="relative ms-[6%] mt-[10%] bg-gradient-to-r from-pink-100 via-green-100 to-green-200 border-[6px] border-green-600 rounded-lg shadow-lg w-[360px] sm:w-[600px] p-4 scale-110">
        {/* Logos row */}
        <div className="flex justify-between items-center mx-6">
          <img src={lion} alt="Lion" className="w-8 h-14 object-cover" />
          <p className="text-xl font-bold text-blue-700">TrueiGTech</p>
          <img
            src={stateGov}
            alt="State Gov"
            className="w-12 h-14 mt-[-6%] object-cover"
          />
        </div>

        {/* Center Prize Info */}
        <div className="flex justify-between items-center mb-4">
          <img
            src={TajMahal}
            alt="TajMahal"
            className="w-24 h-36 mt-[2%] object-cover"
          />
          <div className="bg-[#a80000] text-white border-4 border-yellow-400 rounded-xl px-4 py-2 w-48 text-center shadow-md">
            <p className="text-sm font-semibold">
              Win <span className="underline">First Prize</span>
            </p>
            <p className="text-2xl font-extrabold text-lime-300">₹15,00,000</p>
            <p className="text-sm font-medium text-yellow-200">(₹15 लाख)</p>
          </div>

          <div className="bg-[#ffefef] border-2 border-black text-center px-4 py-2 rounded-lg">
            <p className="text-sm font-semibold text-black">Ticket Price</p>
            <p className="text-red-600 font-bold text-lg">₹30</p>
          </div>
        </div>

        {/* Bottom Row: Glass icon and Draw Time */}
        <div className="flex justify-between items-end mt-4">
          <img src={glass} alt="Glass" className="w-14 h-14 opacity-80" />
          <p className="text-lg font-bold">Signature</p>
          <p className="text-sm font-bold text-blue-800">Draw Time 08:30 PM</p>
        </div>
      </div>
      <div>
        <img
          src={hand}
          alt="Hand"
          className=" w-full h-auto mt-[-24%] ms-[46%]"
        />
      </div>
    </div>
  );
};

export const LotteryWinnerCard1 = () => {
  return (
    <div className="bg-gradient-to-r from-pink-100 via-green-100 to-green-200 border-4 border-dashed border-red-500 rounded-xl shadow-lg p-6 mx-auto w-full">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center border-2 rounded-r-full bg-yellow-100 py-2 px-4 w-full ms-[-2%] sm:w-auto">
          <img
            src={logo}
            alt="TrueiGtech Logo"
            className="w-24 h-12 object-contain"
          />
          <span className="text-gray-800 font-medium text-lg ml-3 whitespace-nowrap">
            1:00 PM
          </span>
        </div>
        <div className="flex items-center justify-end w-full sm:w-auto">
          <img
            src={stateGov}
            alt="State Gov"
            className="w-24 h-24 object-contain"
          />
        </div>
      </div>

      {/* Congratulations section */}
      <div className="text-center mt-6 relative">
        <img
          src={lion}
          alt="Lion Gov"
          className="w-16 h-16 object-contain absolute left-1/2 transform -translate-x-1/2 -top-20"
        />
        <h2 className="text-3xl text-red-700 font-bold">Congratulations!!!</h2>
        <p className="text-red-600 font-semibold">to our lucky winner</p>

        <div className="mt-6 inline-flex flex-col sm:flex-row rounded-lg overflow-hidden shadow-md">
          <div className="bg-red-500 text-yellow-300 py-3 px-6 font-semibold text-center">
            Prize Won
          </div>
          <div className="hidden sm:block border-r-2 border-dashed border-red-800"></div>
          <div className="bg-blue-600 text-yellow-300 py-3 px-8 font-bold text-center">
            ₹ 11 LAKHS
          </div>
        </div>
      </div>

      {/* Footer section */}
      <div className="flex flex-col sm:flex-row justify-between text-red-600 font-semibold mt-8 text-center sm:text-left gap-2">
        <span>Draw Date : 12.02.2025</span>
        <span>Winning No : 12B / 7368</span>
      </div>
    </div>
  );
};

export const LotteryWinnerCard2 = () => {
  return (
    <div className="bg-gradient-to-r from-pink-100 via-green-100 to-green-200 border-4 border-dashed border-red-500 rounded-xl shadow-lg p-6 mx-auto w-full">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center border-2 rounded-r-full bg-yellow-100 py-2 px-4 w-full ms-[-2%] sm:w-auto">
          <img
            src={logo}
            alt="TrueiGtech Logo"
            className="w-24 h-12 object-contain"
          />
          <span className="text-gray-800 font-medium text-lg ml-3 whitespace-nowrap">
            1:00 PM
          </span>
        </div>
        <div className="flex items-center justify-end w-full sm:w-auto">
          <img
            src={stateGov}
            alt="State Gov"
            className="w-24 h-24 object-contain"
          />
        </div>
      </div>

      {/* Congratulations section */}
      <div className="text-center mt-6 relative">
        <img
          src={lion}
          alt="Lion Gov"
          className="w-16 h-16 object-contain absolute left-1/2 transform -translate-x-1/2 -top-20"
        />
        <h2 className="text-3xl text-red-700 font-bold">Congratulations!!!</h2>
        <p className="text-red-600 font-semibold">to our lucky winner</p>

        <div className="mt-6 inline-flex flex-col sm:flex-row rounded-lg overflow-hidden shadow-md">
          <div className="bg-blue-600 text-yellow-300 py-3 px-6 font-semibold text-center">
            Prize Won
          </div>
          <div className="hidden sm:block border-r-2 border-dashed border-red-800"></div>
          <div className="bg-red-500 text-yellow-300 py-3 px-8 font-bold text-center">
            ₹ 31 LAKHS
          </div>
        </div>
      </div>

      {/* Footer section */}
      <div className="flex flex-col sm:flex-row justify-between text-red-600 font-semibold mt-8 text-center sm:text-left gap-2">
        <span>Draw Date : 18.02.2025</span>
        <span>Winning No : 14B / 7968</span>
      </div>
    </div>
  );
};

export const LotteryWinnerCard3 = () => {
  return (
    <div className="bg-gradient-to-r from-pink-100 via-green-100 to-green-200 border-4 border-dashed border-red-500 rounded-xl shadow-lg p-4 w-full overflow-hidden grid grid-cols-1 sm:grid-cols-12 gap-4">
      {/* Left section */}
      <div className="sm:col-span-2 flex flex-col justify-between items-start">
        <div className="bg-yellow-100 rounded-r-full px-4 py-2 flex items-center justify-between gap-4 w-full ms-[-10%]">
          <img src={logo} alt="TrueiGtech Logo" className="w-6 h-6 object-contain" />
          <span className="text-gray-800 font-semibold text-lg">1:00 PM</span>
        </div>
        <span className="text-red-600 font-semibold mt-4 text-sm sm:text-base">Draw Date : 18.02.2025</span>
      </div>

      {/* Middle section */}
      <div className="sm:col-span-8 flex flex-col justify-center items-center text-center">
        <img src={lion} alt="Lion" className="w-16 h-16 object-contain mb-4" />
        <h2 className="text-2xl sm:text-3xl text-red-700 font-bold">Congratulations!!!</h2>
        <div className="flex flex-wrap justify-center text-red-600 font-semibold mt-2 text-sm sm:text-base">
          <span>You won ₹5,00,000</span>&nbsp;
          <span>(₹5 लाख)</span>
        </div>
        <img src={winning} alt="Winning" className="mt-4 w-full sm:w-[50%] h-auto object-contain" />
      </div>

      {/* Right section */}
      <div className="sm:col-span-2 flex flex-col justify-between items-center">
        <img src={stateGov} alt="State Gov" className="w-full h-20 object-contain mb-2" />
        <div className="rounded-md w-full p-1">
          <img src={mamta} alt="Mamta Image" className="w-full h-full object-contain" />
        </div>
        <span className="text-red-600 font-semibold text-sm sm:text-base">Winning No: 12B / 7368</span>
      </div>
    </div>
  );
};


