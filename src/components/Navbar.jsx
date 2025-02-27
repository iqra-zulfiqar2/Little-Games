import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import LoginModel from "./LoginModel.jsx"; // Import LoginModel
import SignupModel from "./SignupModel.jsx";

const Navbar = ({ onSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false); // ✅ State for LoginModel
  const [signupOpen, setSignupOpen] = useState(false); // ✅ State for

  const games = [
    "Hills of Steel",
    "Shell Shockers",
    "Smash Carts",
    "Vectaria",
    "Stick Defenders",
    "CoWardle Multiplayer",
    "Stickman Hook",
    "Infinite Craft",
    "Endless Truck",
    "Stick Merge",
    "Jetpack Joyride",
    "Hill Climb Racing",
    "Among Us",
    "Cut the Rope",
    "Angry Birds",
    "Crossy Road",
    "Doodle Jump",
    "PUBG Mobile",
  ];

  useEffect(() => {
    setShowDropdown(false);
    setSearchQuery("");
  }, [location.pathname]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredGames([]);
      setShowDropdown(false);
      return;
    }

    const results = games.filter((game) =>
      game.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredGames(results);
    setShowDropdown(results.length > 0);
    onSearch(query);
  };

  const handleGameClick = (game) => {
    navigate(`/game/${game.toLowerCase().replace(/\s+/g, "-")}`);
    setSearchQuery("");
    setShowDropdown(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-gray-800 py-2 px-6 shadow-lg z-40 flex items-center">
        {/* Logo */}
        <div
          className="p-2 rounded-xl shadow-lg cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="https://littlegames.gg/wp-content/uploads/2023/11/little-games-2.png"
            className="w-32 h-auto object-contain"
            alt="Little Games Logo"
          />
        </div>

        {/* Search Bar */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative w-80">
            <input
              type="search"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-4 pr-10 py-2 rounded-full bg-white shadow-md text-gray-600"
            />
            <span className="absolute right-3 top-2.5 text-gray-500">
              <IoSearch size={20} />
            </span>

            {/* Search Suggestions Dropdown */}
            {showDropdown && (
              <div className="absolute top-full left-0 w-full bg-gray-900 text-white rounded-md shadow-lg mt-2 max-h-64 overflow-y-auto">
                {filteredGames.map((game, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    onClick={() => handleGameClick(game)}
                  >
                    {game}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Favorite & Login */}
        <div className="flex items-center space-x-4">
          <FaRegHeart
            size={24}
            className="text-white cursor-pointer hover:text-gray-400 transition"
          />
          <button
            className="loginBtn text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-gray-700 transition"
            onClick={() => setLoginOpen(true)} // ✅ Open LoginModel
          >
            Log In
          </button>
        </div>
      </header>

      {/*  Login Model Drawer */}
      <LoginModel
        open={loginOpen}
        setOpen={setLoginOpen}
        setSignupOpen={setSignupOpen}
      />

      {/*  Signup Model Drawer */}
      <SignupModel
        open={signupOpen}
        setOpen={setSignupOpen}
        setLoginOpen={setLoginOpen}
      />
    </>
  );
};

export default Navbar;
