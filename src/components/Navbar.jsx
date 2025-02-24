import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-blue-900 py-3 px-6 shadow-lg z-50 flex items-center">
      {/* Logo on the left */}
      <div className="p-2 rounded-xl shadow-lg">
        <img
          src="https://littlegames.gg/wp-content/uploads/2023/11/little-games-2.png"
          className="w-32 h-auto object-contain"
          alt="Little Games Logo"
        />
      </div>

      {/* Search bar in the center */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-80">
          <input
            type="search"
            placeholder="Search games..."
            className="w-full pl-4 pr-10 py-2 rounded-full bg-white backdrop-blur-sm shadow-md text-gray-600"
          />
          <span className="absolute right-3 top-2.5 text-gray-500">
            <IoSearch size={20} />
          </span>
        </div>
      </div>

      {/* Login button with heart icon on the right */}
      <div className="flex items-center space-x-4">
        {/* Heart Icon */}
        <FaRegHeart size={24} className="text-white cursor-pointer hover:text-gray-400 transition" />

        {/* Login Button */}
        <button className="!bg-white text-blue-900 font-bold font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-200 transition">
          Log In
        </button>
      </div>
    </header>
  );
};

export default Navbar;
