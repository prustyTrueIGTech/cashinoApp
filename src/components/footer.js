import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="relative bg-[#25364a] text-white mt-24">
      {/* Zigzag Top SVG */}
      <div className="absolute -top-[12px] left-0 w-full overflow-hidden leading-none">
        <svg
          className="w-full h-[12px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 100 10"
        >
          <polygon
            fill="#25364a"
            points="0,10 5,0 10,10 15,0 20,10 25,0 30,10 35,0 40,10 45,0 50,10 55,0 60,10 65,0 70,10 75,0 80,10 85,0 90,10 95,0 100,10"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          {/* Know Us */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Know us</h4>
            <ul className="space-y-2 text-white">
              <li><Link to="#">About</Link></li>
              <li><Link to="#">Terms of use</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Govt. Policy */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Govt. Policy</h4>
            <ul className="space-y-2 text-white">
              <li><Link to="#">Lotteries (Regulation) ACT, 1998</Link></li>
              <li><Link to="#">The Lotteries (Regulation) Rules, 2010</Link></li>
              <li><Link to="#">Mizoram Claim Form</Link></li>
              <li><Link to="#">Goa Claim Form</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Help</h4>
            <ul className="space-y-2 text-white">
              <li><Link to="#">FAQs</Link></li>
              <li><Link to="#">Contact us</Link></li>
            </ul>
          </div>

          {/* Social Platforms */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Social Platforms</h4>
            <ul className="space-y-2 text-white">
              <li><Link to="#">Facebook</Link></li>
              <li><Link to="#">Telegram</Link></li>
              <li><Link to="#">Instagram</Link></li>
              <li><Link to="#">Twitter</Link></li>
              <li><Link to="#">Whatsapp</Link></li>
              <li><Link to="#">YouTube (Goa)</Link></li>
              <li><Link to="#">YouTube (Mizoram)</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 space-y-4 md:space-y-0">
          <div className="flex items-center gap-3 bg-white text-black px-4 py-2 rounded-full text-xs font-bold">
            <div className="bg-white p-3 text-black border-4 border-red-800 w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm">
              18+
            </div>
            YOU SHOULD BE 18 YEARS AND ABOVE TO USE THIS SITE
          </div>
          <p className="text-sm text-white text-center md:text-right">
            Copyright 2025 © All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
