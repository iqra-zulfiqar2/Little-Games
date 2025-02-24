import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer.jsx";

const GamesGrid = () => {
  const navigate = useNavigate();

  // Handle clicking on a game card
  const handleGameClick = (gameId) => {
    navigate(`/game/${gameId}`);
  };

  const games = [
    // Row 1
    {
      id: 1,
      title: "Hills of Steel",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/05/Hills-of-Steel-.webp",
      hot: true,
    },
    {
      id: 2,
      title: "Shell Shockers",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/04/shell-shocker.webp",
      featured: true,
    },
    {
      id: 3,
      title: "Smash Carts",
      image: "https://littlegames.gg/wp-content/uploads/2023/11/image-12.jpg",
    },
    {
      id: 4,
      title: "Vectaria",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/06/Vectaria.io_.webp",
      hot: true,
    },
    {
      id: 5,
      title: "Stick Defenders",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/07/Stick-Defenders.webp",
    },
    {
      id: 6,
      title: "CoWardle Multiplayer",
      image: "https://littlegames.gg/wp-content/uploads/2024/04/CoWordle.webp",
      featured: true,
    },
    // Row 2
    {
      id: 7,
      title: "Stickman Hook",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/01/512x384-417.jpg",
    },
    {
      id: 8,
      title: "Infinite Craft",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/08/Infinite-Craft.webp",
      hot: true,
    },
    {
      id: 9,
      title: "Endless Truck",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/07/Endless-Truck.webp",
    },
    {
      id: 10,
      title: "Stick Merge",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/07/Stick-Merge.webp",
    },
    {
      id: 11,
      title: "Jetpack Joyride",
      image:
        "https://littlegames.gg/wp-content/uploads/2023/12/Snow-Rider-3D.webp",
      hot: true,
    },
    {
      id: 12,
      title: "Hill Climb Racing",
      image: "https://littlegames.gg/wp-content/uploads/2024/05/Shark-io.webp",
    },
    // Row 3
    {
      id: 13,
      title: "Among Us",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/07/Merge-Arena.webp",
      featured: true,
    },
    {
      id: 14,
      title: "Cut the Rope",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/07/Google-Snake.webp",
    },
    {
      id: 15,
      title: "Angry Birds",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/07/Shovel-Pirate.webp",
      hot: true,
    },
    {
      id: 16,
      title: "Crossy Road",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/06/Doodle-Jump.webp",
    },
    {
      id: 17,
      title: "Doodle Jump",
      image: "https://littlegames.gg/wp-content/uploads/2024/05/Crazy-Cars.jpg",
      featured: true,
    },
    {
      id: 18,
      title: "PUBG Mobile",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/07/Blumgi-Ball.webp",
      hot: true,
    },
  ];

  return (
    <div className="pt-20 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="relative group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            onClick={() => handleGameClick(game.id)}
          >
            {/* Image Container */}
            <div className="aspect-square relative">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Tags */}
              <div className="absolute top-2 right-2 flex gap-1 z-10">
                {game.hot && (
                  <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    HOT
                  </span>
                )}
                {game.featured && (
                  <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                    NEW
                  </span>
                )}
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 transform -rotate-45 translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </div>
              </div>
            </div>

            {/* Title - Hidden by default, shown on hover */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
              <h3 className="text-white text-sm font-bold text-center truncate">
                {game.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesGrid;
