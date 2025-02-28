import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const generateSlug = (title) =>
  title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

const GamesGrid = ({ searchQuery = "" }) => {
  const navigate = useNavigate();
  const carouselRefs = useRef({}); // Store refs for each category carousel

  const handleGameClick = (game) => {
    const slug = generateSlug(game.title);
    navigate(`/game/${slug}`);
  };

  const scrollCarousel = (category, direction) => {
    const scrollAmount = 300;
    if (carouselRefs.current[category]) {
      carouselRefs.current[category].scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const games = [
    {
      id: 1,
      title: "Hills of Steel",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/05/Hills-of-Steel-.webp",
      hot: true,
      category: "Driving",
    },
    {
      id: 2,
      title: "Shell Shockers",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/04/shell-shocker.webp",
      featured: true,
      category: "Featured",
    },
    {
      id: 3,
      title: "Smash Carts",
      image: "https://littlegames.gg/wp-content/uploads/2023/11/image-12.jpg",
      category: "Driving",
    },
    {
      id: 4,
      title: "Vectaria",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/06/Vectaria.io_.webp",
      hot: true,
      category: "Casual",
    },
    {
      id: 5,
      title: "Stick Defenders",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/07/Stick-Defenders.webp",
      category: "Casual",
    },
    {
      id: 6,
      title: "CoWardle Multiplayer",
      image: "https://littlegames.gg/wp-content/uploads/2024/04/CoWordle.webp",
      featured: true,
      category: "Featured",
    },
    {
      id: 7,
      title: "Fruit Ninja",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/01/512x384-417.jpg",
      hot: true,
      category: "Driving",
    },
    {
      id: 8,
      title: "Basketball Legends",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/01/512x384-1309.jpg",
      featured: true,
      category: "Featured",
    },
    {
      id: 9,
      title: "Infinite Craft",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/08/Infinite-Craft.webp",
      category: "Driving",
    },
    {
      id: 10,
      title: "Stick Merge",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/07/Stick-Merge.webp",
      hot: true,
      category: "Casual",
    },
    {
      id: 11,
      title: "Jetpack Joyride",
      image:
        "https://littlegames.gg/wp-content/uploads/2023/12/Snow-Rider-3D.webp",
      category: "Casual",
    },
    {
      id: 12,
      title: "Chill Climb Racing",
      image: "https://littlegames.gg/wp-content/uploads/2024/05/Shark-io.webp",
      featured: true,
      category: "Featured",
    },
    {
      id: 13,
      title: "Among Us",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/07/Merge-Arena.webp",
      hot: true,
      category: "Driving",
    },
    {
      id: 14,
      title: "Cut the Rope",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/07/Google-Snake.webp",
      featured: true,
      category: "Featured",
    },
    {
      id: 15,
      title: "Angry Birds",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/07/Shovel-Pirate.webp",
      category: "Driving",
    },
    {
      id: 16,
      title: "Crossy Road",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/06/Doodle-Jump.webp",
      hot: true,
      category: "Casual",
    },
    {
      id: 17,
      title: "Crazy Cars",
      image: "https://littlegames.gg/wp-content/uploads/2024/05/Crazy-Cars.jpg",
      category: "Casual",
    },
    {
      id: 18,
      title: "Blumgi Ball",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/07/Blumgi-Ball.webp",
      featured: true,
      category: "Featured",
    },
    {
      id: 19,
      title: "Rolling Sky",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/07/Rolling-Sky.webp",
      category: "New",
    },
    {
      id: 20,
      title: "Driftwave",
      image: "https://littlegames.gg/wp-content/uploads/2024/07/Driftwave.webp",
      featured: true,
      category: "New",
    },
    {
      id: 21,
      title: "Paper.io 2",
      image: "https://littlegames.gg/wp-content/uploads/2023/12/image-59.webp",
      hot: true,
      category: "New",
    },
    {
      id: 22,
      title: "Gunspin",
      image: "https://littlegames.gg/wp-content/uploads/2023/12/image-13.jpg",
      featured: true,
      category: "New",
    },
    {
      id: 23,
      title: "Hill Climb Racing 2",
      image:
        "https://littlegames.gg/wp-content/uploads/2023/12/hill-climb-racing-2.webp",
      category: "New",
    },
    {
      id: 24,
      title: "Truck Loader 3",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/06/Truck-Loader-3-e1718344209874.webp",
      hot: true,
      category: "New",
    },
    {
      id: 25,
      title: "Crazy Cars",
      image: "https://littlegames.gg/wp-content/uploads/2024/05/Crazy-Cars.jpg",
      category: "Casual",
    },
    {
      id: 26,
      title: "Pool Club",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/06/Pool-Club.webp",
      featured: true,
      category: "Featured",
    },
    {
      id: 27,
      title: "Jumping Shell",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/06/Jumping-Shell.webp",
      category: "Featured",
    },
    {
      id: 28,
      title: "Doodle Baseball",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/09/Doodle-Baseball.png",
      featured: true,
      category: "Featured",
    },
    {
      id: 29,
      title: "Temple of Boom",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/05/Temple-of-Boom.webp",
      category: "2 Player",
    },
    {
      id: 30,
      title: "Ludo Classic",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/03/Ludo-Classic.jpg",
      hot: true,
      category: "2 Player",
    },
    {
      id: 31,
      title: "Toca Life Adventure",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/01/512x384-1074.jpg",
      category: "Casual",
    },
    {
      id: 32,
      title: "Tic Tac Toe Vegas",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/01/512x384-1865.jpg",
      featured: true,
      category: "2 Player",
    },
    {
      id: 33,
      title: "Sports MiniBattles",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/01/512x384-1793.jpg",
      category: "2 Player",
    },
    {
      id: 34,
      title: "Zombie Mission 5",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/01/512x384-1763.jpg",
      featured: true,
      category: "2 Player",
    },
    {
      id: 35,
      title: "Stick Fighter 3D",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/01/512x384-1361.jpg",
      featured: true,
      category: "2 Player",
    },
    {
      id: 35,
      title: "Ludo Wars",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/01/512x384-899.jpg",
      featured: true,
      category: "2 Player",
    },
  ];

  const categories = ["Featured", "New", "Casual", "Driving", "2 Player"];

  return (
    <div className="p-8 pt-17">
      {/* Hero Banner */}
      <div className="bg-gray-900 mb-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center mb-4 ml-32 md:mb-0">
            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-2xl">🎮</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Welcome to</h1>
              <h2 className="text-lg font-bold text-indigo-400">LittleGames</h2>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-sm mr-20">
            <div className="flex items-center">
              <span className="mr-2">🎮</span> 4000+ games
            </div>
            <div className="flex items-center">
              <span className="mr-2">🚀</span> No install needed
            </div>
            <div className="flex items-center">
              <span className="mr-2">💻</span> On any device
            </div>
            <div className="flex items-center">
              <span className="mr-2">👥</span> Play with friends
            </div>
            <div className="flex items-center">
              <span className="mr-2">✨</span> All for free
            </div>
          </div>
        </div>
      </div>

      {categories.map((category) => {
        const categoryGames = games.filter(
          (game) => game.category === category
        );
        return (
          <div key={category} className="mb-6 relative">
            <h2 className="text-xl font-bold text-white mb-3">
              {category} Games
            </h2>

            {/* Navigation buttons only if more than 6 games */}
            {categoryGames.length > 5 && (
              <>
                <button
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 text-white rounded-full z-10 shadow-lg"
                  onClick={() => scrollCarousel(category, "left")}
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 text-white rounded-full z-10 shadow-lg"
                  onClick={() => scrollCarousel(category, "right")}
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Game Carousel */}
            <div
              className="flex gap-4 overflow-x-auto scrollbar-hide relative"
              ref={(el) => (carouselRefs.current[category] = el)}
              style={{
                scrollBehavior: "smooth",
                overflowX: "scroll",
                display: "flex",
                paddingBottom: "5px", // Prevents scrollbar visibility
              }}
            >
              {categoryGames.map((game) => (
                <div
                key={game.id}
                className="relative min-w-[220px] group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/50 before:to-transparent before:scale-x-0 before:transition-transform before:duration-700 before:origin-left hover:before:scale-x-100"
                onClick={() => handleGameClick(game)}
              >
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                  <h3 className="text-white text-sm font-bold text-center truncate">
                    {game.title}
                  </h3>
                </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GamesGrid;

