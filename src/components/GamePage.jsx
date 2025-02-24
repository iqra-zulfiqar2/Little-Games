import React from "react";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import GameStats from "./GameStats.jsx";
import {
  Maximize2,
  Minimize2,
  RefreshCw,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";

const GamePage = () => {
  const { slug } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState(1340000); // Dummy initial likes
  const [dislikes, setDislikes] = useState(50000); // Dummy initial dislikes
  const [hasLiked, setHasLiked] = useState(false);
  const [hasDisliked, setHasDisliked] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const gameContainerRef = useRef(null);
  const iframeRef = useRef(null);

  // Utility function to generate slug
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  const gameData = {
    1: {
      id: 1,
      title: "Hills of Steel",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/05/Hills-of-Steel-.webp",
    },
    2: {
      id: 2,
      title: "Shell Shockers",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/04/shell-shocker.webp",
    },
    3: {
      id: 3,
      title: "Smash Carts",
      image: "https://littlegames.gg/wp-content/uploads/2023/11/image-12.jpg",
    },
    4: {
      id: 4,
      title: "Car Stunts",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/06/Vectaria.io_.webp",
    },
    5: {
      id: 5,
      title: "Stick Defenders",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/07/Stick-Defenders.webp",
    },
    6: {
      id: 6,
      title: "Candy Crush",
      image: "https://littlegames.gg/wp-content/uploads/2024/04/CoWordle.webp",
    },
    7: {
      id: 7,
      title: "Fruit Ninja",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/01/512x384-417.jpg",
    },
    8: {
      id: 8,
      title: "Snake.io",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/07/Endless-Truck.webp",
    },
    9: {
      id: 9,
      title: "Infinite Craft",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/08/Infinite-Craft.webp",
    },
    10: {
      id: 10,
      title: "Stick Merge",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/07/Stick-Merge.webp",
    },
    11: {
      id: 11,
      title: "Jetpack Joyride",
      image:
        "https://littlegames.gg/wp-content/uploads/2023/12/Snow-Rider-3D.webp",
    },
    12: {
      id: 12,
      title: "Hill Climb Racing",
      image: "https://littlegames.gg/wp-content/uploads/2024/05/Shark-io.webp",
    },
    13: {
      id: 13,
      title: "Among Us",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/07/Merge-Arena.webp",
    },
    14: {
      id: 14,
      title: "Cut the Rope",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/07/Google-Snake.webp",
    },
    15: {
      id: 15,
      title: "Angry Birds",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/07/Shovel-Pirate.webp",
    },
    16: {
      id: 16,
      title: "Crossy Road",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/06/Doodle-Jump.webp",
    },
    17: {
      id: 17,
      title: "Crazy Cars",
      image: "https://littlegames.gg/wp-content/uploads/2024/05/Crazy-Cars.jpg",
    },
    18: {
      id: 18,
      title: "Blumgi Ball",
      image:
        "https://littlegames.gg/wp-content/uploads/2024/07/Blumgi-Ball.webp",
    },
  };

  useEffect(() => {
    const matchedGame = Object.values(gameData).find(
      (g) => generateSlug(g.title) === slug
    );

    if (matchedGame) {
      setGame(matchedGame);
    } else {
      setGame({
        title: "Unknown Game",
        image:
          "https://littlegames.gg/wp-content/uploads/2024/05/Hills-of-Steel-.webp",
      });
    }
    setLoading(false);
  }, [slug]); // Ensure it runs when slug changes

  // Generate dummy description
  const generateDescription = (title) => {
    return `${title} is an exhilarating online multiplayer game that blends strategic thinking with fast-paced action. Players from around the world compete in real-time battles, testing their reflexes and tactical skills.  
  
  The game boasts stunning visuals with a unique art style optimized for smooth performance across all devices. Immersive sound design enhances the experience, providing dynamic audio cues during intense moments.  
  
  Its intuitive controls make it easy for newcomers to jump in, while experienced players can master advanced techniques. The rewarding progression system allows players to customize characters and unlock new gear.  
  
  Regular updates bring fresh content, seasonal events, and limited-time game modes to keep the gameplay engaging. Developers actively listen to community feedback, ensuring balanced mechanics and exciting new features.  
  
  With multiple game modes, including casual and competitive ranked matches, ${title} caters to all playstyles. A fair matchmaking system ensures balanced competition, making every battle both thrilling and rewarding.  
  
  Join millions of players worldwide and experience the adrenaline-pumping action of ${title} today!`;
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
      if (hasDisliked) {
        setDislikes((prev) => prev - 1);
        setHasDisliked(false);
      }
    }
  };

  const handleDislike = () => {
    if (!hasDisliked) {
      setDislikes((prev) => prev + 1);
      setHasDisliked(true);
      if (hasLiked) {
        setLikes((prev) => prev - 1);
        setHasLiked(false);
      }
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      gameContainerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const reloadGame = () => {
    const iframe = iframeRef.current;
    const currentSrc = iframe.src;
    iframe.src = "about:blank";
    setTimeout(() => {
      iframe.src = currentSrc;
    }, 100);
  };

  const formatNumber = (num) => {
    return (num / 1000000).toFixed(1) + "M";
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-gray-900">
        <div className="text-2xl font-bold text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br bg-gray-900">
      <Navbar />
      <div className="pt-20 px-6">
        
        <div className="rounded-2xl overflow-hidden shadow-xl max-w-5xl mx-auto">
          {/* Game Container with Controls */}
          <div ref={gameContainerRef} className="aspect-video w-full">
            <iframe
              ref={iframeRef}
              src="https://1v1.lol/"
              title={game?.title}
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
            />

            {/* Persistent Control Bar */}
            <div
              className={`${
                isFullscreen
                  ? "absolute bottom-0 left-0 right-0 bg-blue-900 text-white"
                  : "relative text-white bg-blue-900"
              } flex items-center justify-between px-4 py-2`}
            >
              {/* Left Side - Game Info */}
              <div className="flex items-center gap-3">
                <img
                  src={game?.image}
                  alt={game?.title}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <h2 className="font-bold text-lg text-white">
                    {game?.title}
                  </h2>
                </div>
              </div>

              {/* Right Side - Controls */}
              <div className="flex items-center gap-6">
                {/* Like Button */}
                <button
                  onClick={handleLike}
                  className="flex items-center gap-1 text-white hover:text-blue-400 transition-colors"
                >
                  <ThumbsUp size={20} />
                  <span className="text-sm font-medium">
                    {formatNumber(likes)}
                  </span>
                </button>

                {/* Dislike Button */}
                <button
                  onClick={handleDislike}
                  className="flex items-center gap-1 text-white hover:text-blue-400 transition-colors"
                >
                  <ThumbsDown size={20} />
                  <span className="text-sm font-medium">
                    {formatNumber(dislikes)}
                  </span>
                </button>

                {/* Reload Button */}
                <button
                  onClick={reloadGame}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <RefreshCw size={20} />
                </button>

                {/* Fullscreen Button */}
                <button
                  onClick={toggleFullscreen}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  {isFullscreen ? (
                    <Minimize2 size={20} />
                  ) : (
                    <Maximize2 size={20} />
                  )}
                </button>
              </div>
            </div>
          </div>
          <GameStats gameTitle={game?.title} />

          {/* Rest of the content */}
          <div className="flex flex-wrap gap-2 mt-2 ml-5 shadow-gray-600 bg-gray-900">
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700">
              Action
            </span>
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700">
              Multiplayer
            </span>
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700">
              Strategy
            </span>
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700">
              Battle Royale
            </span>
          </div>
          {/* Description and Image Section */}
          <div className="pt-4 px-6 mb-10 bg-gray-900 text-white">
            <h2 className="text-xl font-bold mb-4">About {game?.title}</h2>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Description Column */}
              <div className="flex-1">
                <div className="text-white leading-relaxed text-justify">
                  {generateDescription(game?.title)}
                </div>
              </div>

              {/* Image Column */}
              <div className="md:w-96 flex-shrink-0">
                <div className="sticky top-4">
                  <img
                    src={game?.image} // Dynamic game image
                    alt={`${game?.title} Gameplay`}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
