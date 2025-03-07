import { useState } from "react";
import { Drawer, Tabs } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { FaTimesCircle } from "react-icons/fa";

const GameTabs = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState("recent");

  // Sample game data (Replace with actual game data)
  const recentGames = [
    { title: "Hills of Steel", image: "https://littlegames.gg/wp-content/uploads/2024/05/Hills-of-Steel-.webp" },
    { title: "Shell Shockers", image: "https://littlegames.gg/wp-content/uploads/2024/04/shell-shocker.webp" },
    { title: "Smash Carts", image: "https://littlegames.gg/wp-content/uploads/2023/11/image-12.jpg" },
    { title: "Vectaria", image: "https://littlegames.gg/wp-content/uploads/2024/06/Vectaria.io_.webp" },
  ];
  const favoriteGames = [];
  const likedGames = [];

  // Function to remove a game from a list
  const removeGame = (gameId) => {
    console.log(`Remove game with ID: ${gameId}`);
    // Implement game removal logic here
  };

  return (
    <Drawer
      placement="right"
      closable={false}
      onClose={onClose}
      open={open}
      width={400}
      className="bg-[#28293d]"
      style={{ backgroundColor: "#28293d", color: "white" }}
    >
      {/* Close button */}
      <div className="absolute top-4 right-4">
        <CloseOutlined
          className="text-white text-2xl cursor-pointer"
          onClick={onClose}
        />
      </div>

      {/* My Games Heading */}
      <div className="p-6 pt-10">
        <h3 className="text-center text-white font-bold text-xl mb-4">
          My Games
        </h3>

        {/* Tabs for Recent, Favorites, Liked */}
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          centered
          tabBarStyle={{
            borderBottom: "none", // Removes default border
          }}
          className="custom-tabs" // Apply custom class
        >
          {["recent", "favorites", "liked"].map((key) => (
            <Tabs.TabPane
              tab={
                <span
                  className={`transition-colors duration-200 ${
                    activeTab === key ? "text-white" : "text-gray-400"
                  }`}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </span>
              }
              key={key}
            >
              <GameList
                games={
                  key === "recent" ? recentGames :
                  key === "favorites" ? favoriteGames :
                  likedGames
                }
                removeGame={removeGame}
              />
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
    </Drawer>
  );
};

// Game List Component
const GameList = ({ games, removeGame }) => (
  <div className="flex flex-wrap gap-2 p-2">
    {games.length > 0 ? (
      games.map((game) => (
        <div key={game.id} className="relative">
          <img
            src={game.image}
            alt={game.title}
            className="w-32 h-20 rounded-md object-cover"
          />
          <FaTimesCircle
            className="absolute top-1 right-1 text-red-500 cursor-pointer text-xl"
            onClick={() => removeGame(game.id)}
          />
        </div>
      ))
    ) : (
      <p className="text-center text-gray-400 w-full">No games found.</p>
    )}
  </div>
);

export default GameTabs;
