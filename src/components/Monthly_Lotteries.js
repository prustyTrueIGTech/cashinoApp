import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../assets/png/arrow.png"; // Adjust the path

export const MonthlyLotteries = () => {
  const [flipped, setFlipped] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const navigate = useNavigate();

  const handleToggle = () => {
    setFlipped(!flipped);
  };

  const handleBuyNow = (title) => {
    if (title === "TrueGETCH_50_Weekly") {
      navigate("/trueIgTech_50_weekly_lottery");
    } else if (title === "TrueGETCH 40 Evening") {
      navigate("/trueIgTech_40_weekly_lottery");
    }  else if (title === "TrueGETCH Gold Weekly") {
      navigate("/trueIgTech_60_weekly_lottery");
    }
    else if (title === "TrueGETCH Mega Weekly") {
      navigate("/trueIgTech_1cr_weekly_lottery");
    }
    else if (title === "TrueGETCH_70_Weekly") {
      navigate("/trueIgTech_70_weekly_lottery");
    }
    else {
      navigate("/trueIgTech_1.5_weekly_lottery");
    } 
  };

  const initialCoupons = [
    {
      title: "TrueGETCH_50_Weekly",
      prize: "50",
      time: "8:30 PM",
      price: "50",
      date: "06.06.2025",
      bg: "bg-purple-600",
      footer: "bg-rose-400",
    },
    {
      title: "TrueGETCH 40 Evening",
      prize: "40",
      time: "5:40 PM",
      price: "50",
      date: "06.06.2025",
      bg: "bg-blue-600",
      footer: "bg-rose-400",
    },
    {
      title: "TrueGETCH 1.5 Weekly",
      prize: "150",
      time: "7:30 PM",
      price: "50",
      date: "06.06.2025",
      bg: "bg-emerald-500",
      footer: "bg-orange-400",
    },
  ];

  const additionalCoupons = [
    {
      title: "TrueGETCH Mega Weekly",
      prize: "100",
      time: "9:00 PM",
      price: "100",
      date: "06.06.2025",
      bg: "bg-yellow-500",
      footer: "bg-red-400",
    },
    {
      title: "TrueGETCH_70_Weekly",
      prize: "70",
      time: "6:00 PM",
      price: "50",
      date: "06.06.2025",
      bg: "bg-indigo-600",
      footer: "bg-blue-400",
    },
    {
      title: "TrueGETCH Gold Weekly",
      prize: "60",
      time: "7:00 PM",
      price: "60",
      date: "06.06.2025",
      bg: "bg-pink-500",
      footer: "bg-green-400",
    },
  ];

  const couponsToShow = flipped ? additionalCoupons : initialCoupons;

  return (
    <div className="py-10">

      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="flex-1 text-2xl font-semibold text-center">Monthly Lotteries</span>
        <img
          src={arrow}
          alt="arrow"
          className="w-12 h-12 me-14 cursor-pointer"
          onClick={handleToggle}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {couponsToShow.map((coupon, index) => (
          <div key={index} className="[perspective:1000px]">
            <div
              className={`relative w-full sm:w-72 rounded-3xl shadow-lg transition-transform duration-700 transform-style-preserve-3d }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="backface-hidden">
                <div className={`text-white p-6 rounded-t-3xl ${coupon.bg}`}>
                  <div className = {{transform: flipped ? 'rotateY(-180deg)' : 'rotateY(0)'}}>

                    <h3 className="text-lg font-semibold text-center mb-2">
                      {coupon.title}
                    </h3>
                    <p className="text-center">Win First Prize</p>
                    <p className="text-5xl font-bold text-center mt-2">
                      ₹{coupon.prize} <span className="text-3xl">Lakhs</span>
                    </p>
                  </div>
                </div>

                 {/* Semi-circle notches and dashed divider */}
            <div className="relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-white rounded-full z-10"></div>
              <div className="absolute -right-2 top-0 w-4 h-4 bg-white rounded-full z-10"></div>
              <div className="h-2 border-t border-dashed border-pink-600 bg-blue-400"></div>
            </div>


                <div className={`text-white text-center px-4 py-4 rounded-b-3xl ${coupon.footer}`}>
                  <button
                    className="bg-red-800 text-white px-6 py-2 rounded-full font-medium mb-2 hover:bg-red-700 transition"
                    onClick={() => handleBuyNow(coupon.title)}
                  >
                    🚀 Buy now
                  </button>
                  <p className="text-sm">Draw: {coupon.date} &nbsp; Time: {coupon.time}</p>
                  <p className="text-sm">Ticket Price: ₹{coupon.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
