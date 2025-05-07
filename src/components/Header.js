import React from "react";
import { Home, Ticket, FileText, Trophy, ShoppingCart } from "lucide-react";
import logo from "../assets/png/logo.png";

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-8 w-auto" />
      </div>

      {/* Nav Links */}
      <nav>
        <div className="flex items-center gap-6 text-sm font-medium text-black">
          <a href="#" className="flex items-center space-x-1">
            <Home className="text-red-800" size={18} />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-1">
            <Ticket className="text-red-800" size={18} />
            <span>Lotteries</span>
          </a>
          <a href="#" className="flex items-center space-x-1">
            <FileText className="text-red-800" size={18} />
            <span>Results</span>
          </a>
          <a href="#" className="flex items-center space-x-1">
            <Trophy className="text-red-800" size={18} />
            <span>Winners</span>
          </a>
          <div className="flex items-center space-x-1">
            <a href="#" className="text-black">Log In</a>
            <span>/</span>
            <a href="#" className="text-black">Register</a>
          </div>
          <a href="#" className="relative flex items-center space-x-1">
            <ShoppingCart className="text-red-800" size={20} />
            <span>Cart</span>
            <span className="absolute top-[-10px] left-4 bg-slate-800 text-white text-xs px-1 rounded-full">
              0
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
};
