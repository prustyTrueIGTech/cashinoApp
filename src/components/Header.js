import React, { useState } from "react";
import { Home, Ticket, FileText, Trophy, ShoppingCart, Menu } from "lucide-react";
import logo from "../assets/png/logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-auto">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="block lg:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Nav Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute lg:relative top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:flex lg:items-center lg:gap-6 text-sm font-medium text-black`}
        >
          <div className="flex flex-col lg:flex-row items-center gap-6 p-4 lg:p-0">
            <a href="/" className="flex items-center space-x-1">
              <Home className="text-red-800" size={18} />
              <span>Home</span>
            </a>
            <a href="/lotteries" className="flex items-center space-x-1">
              <Ticket className="text-red-800" size={18} />
              <span>Lotteries</span>
            </a>
            <a href="/results" className="flex items-center space-x-1">
              <FileText className="text-red-800" size={18} />
              <span>Results</span>
            </a>
            <a href="/winners" className="flex items-center space-x-1">
              <Trophy className="text-red-800" size={18} />
              <span>Winners</span>
            </a>
            <div className="flex items-center space-x-1">
              <a href="/logIn" className="text-black">
                Log In
              </a>
              <span>/</span>
              <a href="/register" className="text-black">
                Register
              </a>
            </div>
            <a href="/signUp" className="relative flex items-center space-x-1">
              <ShoppingCart className="text-red-800" size={20} />
              <span>Cart</span>
              <span className="absolute top-[-10px] left-4 bg-slate-800 text-white text-xs px-1 rounded-full">
                0
              </span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};