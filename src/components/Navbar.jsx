import React, { useState, useEffect, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import LoginModel from "./LoginModel.jsx"; // Import LoginModel
import SignupModel from "./SignupModel.jsx";
import GameTabs from "./GameTabs.jsx";

const Navbar = ({ onSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State for GamesDrawer
  const dropdownRef = useRef(null);

  const games = [
    { title: "Hills of Steel", image: "https://littlegames.gg/wp-content/uploads/2024/05/Hills-of-Steel-.webp" },
    { title: "Shell Shockers", image: "https://littlegames.gg/wp-content/uploads/2024/04/shell-shocker.webp" },
    { title: "Smash Carts", image: "https://littlegames.gg/wp-content/uploads/2023/11/image-12.jpg" },
    { title: "Vectaria", image: "https://littlegames.gg/wp-content/uploads/2024/06/Vectaria.io_.webp" },
    { title: "Stick Defenders", image: "https://littlegames.gg/wp-content/uploads/2024/07/Stick-Defenders.webp" },
    { title: "CoWardle Multiplayer", image: "https://littlegames.gg/wp-content/uploads/2024/04/CoWordle.webp" },
    { title: "Fruit Ninja", image: "https://littlegames.gg/wp-content/uploads/2024/01/512x384-417.jpg" },
    { title: "Basketball Legends", image: "https://littlegames.gg/wp-content/uploads/2024/01/512x384-1309.jpg" },
    { title: "Infinite Craft", image: "https://littlegames.gg/wp-content/uploads/2024/08/Infinite-Craft.webp" },
    { title: "Stick Merge", image: "https://littlegames.gg/wp-content/uploads/2024/07/Stick-Merge.webp" },
    { title: "Jetpack Joyride", image: "https://littlegames.gg/wp-content/uploads/2023/12/Snow-Rider-3D.webp" },
    { title: "Chill Climb Racing", image: "https://littlegames.gg/wp-content/uploads/2024/05/Shark-io.webp" },
    { title: "Among Us", image: "https://littlegames.gg/wp-content/uploads/2024/07/Merge-Arena.webp" },
    { title: "Cut the Rope", image: "https://littlegames.gg/wp-content/uploads/2024/07/Google-Snake.webp" },
    { title: "Angry Birds", image: "https://littlegames.gg/wp-content/uploads/2024/07/Shovel-Pirate.webp" },
    { title: "Crossy Road", image: "https://littlegames.gg/wp-content/uploads/2024/06/Doodle-Jump.webp" },
    { title: "Crazy Cars", image: "https://littlegames.gg/wp-content/uploads/2024/05/Crazy-Cars.jpg" },
    { title: "Blumgi Ball", image: "https://littlegames.gg/wp-content/uploads/2024/07/Blumgi-Ball.webp" },
    { title: "Rolling Sky", image: "https://littlegames.gg/wp-content/uploads/2024/07/Rolling-Sky.webp" },
    { title: "Driftwave", image: "https://littlegames.gg/wp-content/uploads/2024/07/Driftwave.webp" },
    { title: "Paper.io 2", image: "https://littlegames.gg/wp-content/uploads/2023/12/image-59.webp" },
    { title: "Gunspin", image: "https://littlegames.gg/wp-content/uploads/2023/12/image-13.jpg" },
    { title: "Hill Climb Racing 2", image: "https://littlegames.gg/wp-content/uploads/2023/12/hill-climb-racing-2.webp" },
    { title: "Truck Loader 3", image: "https://littlegames.gg/wp-content/uploads/2024/06/Truck-Loader-3-e1718344209874.webp" },
    { title: "Pool Club", image: "https://littlegames.gg/wp-content/uploads/2024/06/Pool-Club.webp" },
    { title: "Jumping Shell", image: "https://littlegames.gg/wp-content/uploads/2024/06/Jumping-Shell.webp" },
    { title: "Doodle Baseball", image: "https://littlegames.gg/wp-content/uploads/2024/09/Doodle-Baseball.png" },
    { title: "Temple of Boom", image: "https://littlegames.gg/wp-content/uploads/2024/05/Temple-of-Boom.webp" },
    { title: "Ludo Classic", image: "https://littlegames.gg/wp-content/uploads/2024/03/Ludo-Classic.jpg" },
    { title: "Toca Life Adventure", image: "https://littlegames.gg/wp-content/uploads/2024/01/512x384-1074.jpg" },
    { title: "Tic Tac Toe Vegas", image: "https://littlegames.gg/wp-content/uploads/2024/01/512x384-1865.jpg" },
    { title: "Sports MiniBattles", image: "https://littlegames.gg/wp-content/uploads/2024/01/512x384-1793.jpg" },
    { title: "Zombie Mission 5", image: "https://littlegames.gg/wp-content/uploads/2024/01/512x384-1763.jpg" },
    { title: "Stick Fighter 3D", image: "https://littlegames.gg/wp-content/uploads/2024/01/512x384-1361.jpg" },
    { title: "Ludo Wars", image: "https://littlegames.gg/wp-content/uploads/2024/01/512x384-899.jpg" },
    { title: "Highway Traffic", image: "https://littlegames.gg/wp-content/uploads/2024/03/Highway-Traffic.jpg" },
    { title: "Mini Golf Club", image: "https://littlegames.gg/wp-content/uploads/2024/04/image-60.webp" }
];


  useEffect(() => {
    setShowDropdown(false);
    setSearchQuery("");
    setSelectedIndex(-1);
  }, [location.pathname]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredGames([]);
      setShowDropdown(false);
      return;
    }

    const results = games.filter((game) =>
      game.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredGames(results);
    setShowDropdown(results.length > 0);
    setSelectedIndex(-1);
    onSearch(query);
  };

  const handleKeyDown = (e) => {
    if (!showDropdown && e.key === "ArrowDown") {
      setShowDropdown(true);
      return;
    }

    if (!showDropdown) return;

    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => (prev < filteredGames.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      handleGameClick(filteredGames[selectedIndex]);
    }
  };

  useEffect(() => {
    if (dropdownRef.current && selectedIndex >= 0) {
      const selectedItem = dropdownRef.current.children[selectedIndex];
      selectedItem?.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  const handleGameClick = (game) => {
    navigate(`/game/${game.title.toLowerCase().replace(/\s+/g, "-")}`);
    setSearchQuery("");
    setShowDropdown(false);
    setSelectedIndex(-1);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-[#28293d] py-2 px-6 shadow-lg z-40 flex items-center">
        {/* Logo */}
        <div className="p-2 rounded-xl shadow-lg cursor-pointer" onClick={() => navigate("/")}>
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
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full pl-4 pr-10 py-2 rounded-full bg-[#474967] shadow-md text-[#e5e6ee] outline-none"
            />
            <span className="absolute right-3 top-2.5 text-[#e5e6ee]">
              <IoSearch size={20} />
            </span>

            {/* Search Suggestions Dropdown */}
            {showDropdown && (
              <div
                ref={dropdownRef}
                className="absolute top-full left-0 w-full bg-[#28293d] text-white rounded-md shadow-lg mt-2 max-h-64 overflow-y-auto"
              >
                {filteredGames.map((game, index) => (
                  <div
                    key={index}
                    className={`flex items-center px-4 py-2 cursor-pointer ${
                      selectedIndex === index ? "bg-[#474967]" : "hover:bg-[#474967]"
                    }`}
                    onClick={() => handleGameClick(game)}
                  >
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-10 h-10 rounded-md mr-3 object-cover"
                    />
                    <span className="text-sm font-medium">{game.title}</span>
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
            onClick={() => setIsDrawerOpen(true)} // Open GamesDrawer when clicked
          />
          <button
            className="loginBtn text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-gray-700 transition"
            onClick={() => setLoginOpen(true)}
          >
            Log In
          </button>
        </div>
      </header>

      {/* Login & Signup Modals */}
      <LoginModel open={loginOpen} setOpen={setLoginOpen} setSignupOpen={setSignupOpen} />
<SignupModel open={signupOpen} setOpen={setSignupOpen} setLoginOpen={setLoginOpen} />


      {/* Games Drawer */}
      <GameTabs open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
};

export default Navbar;

