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
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [likes, setLikes] = useState(15600000);
  const [dislikes, setDislikes] = useState(2700000);
  const [hasLiked, setHasLiked] = useState(false);
  const [hasDisliked, setHasDisliked] = useState(false);
  const iframeRef = useRef(null);
  const gameContainerRef = useRef(null);

  useEffect(() => {
    // In a real application, fetch game data from an API
    // This is mock data for demonstration
    const gameData = {
      1: { title: "Hills of Steel", image: "/api/placeholder/80/45" },
      2: { title: "Shell Shockers", image: "/api/placeholder/80/45" },
      3: { title: "Smash Carts", image: "/api/placeholder/80/45" },
      4: { title: "Car Stunts", image: "/api/placeholder/80/45" },
      5: { title: "Stack Ball", image: "/api/placeholder/80/45" },
      6: { title: "Candy Crush", image: "/api/placeholder/80/45" },
      7: { title: "Fruit Ninja", image: "/api/placeholder/80/45" },
      8: { title: "Snake.io", image: "/api/placeholder/80/45" },
      9: { title: "Piano Tiles", image: "/api/placeholder/80/45" },
      10: { title: "8 Ball Pool", image: "/api/placeholder/80/45" },
      11: { title: "Jetpack Joyride", image: "/api/placeholder/80/45" },
      12: { title: "Hill Climb Racing", image: "/api/placeholder/80/45" },
      13: { title: "Among Us", image: "/api/placeholder/80/45" },
      14: { title: "Cut the Rope", image: "/api/placeholder/80/45" },
      15: { title: "Angry Birds", image: "/api/placeholder/80/45" },
      16: { title: "Crossy Road", image: "/api/placeholder/80/45" },
      17: { title: "Doodle Jump", image: "/api/placeholder/80/45" },
      18: { title: "PUBG Mobile", image: "/api/placeholder/80/45" },
    };

    setTimeout(() => {
      setGame(
        gameData[id] || {
          title: "Unknown Game",
          image:
            "https://littlegames.gg/wp-content/uploads/2024/05/Hills-of-Steel-.webp",
        }
      );
      setLoading(false);
    }, 500);
  }, [id]);

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
        <header className="mb-6">
          <h1 className="text-lg font-bold text-white">{game.title}</h1>
        </header>
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
              className={`
            ${
              isFullscreen
                ? "absolute bottom-0 left-0 right-0 bg-black/75"
                : "relative bg-white border-t border-gray-200"
            }
            flex items-center justify-between px-4 py-2
          `}
            >
              {/* Left Side - Game Info */}
              <div className="flex items-center gap-3">
                <img
                  src={game?.image}
                  alt={game?.title}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <h2
                    className={`font-bold text-lg ${
                      isFullscreen ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {game?.title}
                  </h2>
                  <p
                    className={`text-sm ${
                      isFullscreen ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    by SYBO
                  </p>
                </div>
              </div>

              {/* Right Side - Controls */}
              <div className="flex items-center gap-6">
                {/* Like Button */}
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-1 transition-colors
                  ${
                    isFullscreen
                      ? "text-white hover:text-blue-400"
                      : "text-white hover:text-blue-600"
                  }`}
                >
                  <ThumbsUp size={20} />
                  <span className="text-sm font-medium">
                    {formatNumber(likes)}
                  </span>
                </button>

                {/* Dislike Button */}
                <button
                  onClick={handleDislike}
                  className={`flex items-center gap-1 transition-colors
                ${
                  isFullscreen
                    ? "text-white hover:text-blue-400"
                    : "text-white hover:text-blue-600"
                }`}
                >
                  <ThumbsDown size={20} />
                  <span className="text-sm font-medium">
                    {formatNumber(dislikes)}
                  </span>
                </button>
                {/* Reload Button */}
                <button
                  onClick={reloadGame}
                  className={`transition-colors
                  ${
                    isFullscreen
                      ? "text-white hover:text-blue-400"
                      : "text-white hover:text-blue-600"
                  }`}
                >
                  <RefreshCw size={20} />
                </button>

                {/* Fullscreen Button */}
                <button
                  onClick={toggleFullscreen}
                  className={`transition-colors
                  ${
                    isFullscreen
                      ? "text-white hover:text-blue-400"
                      : "text-white hover:text-blue-600"
                  }`}
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
          <GameStats gameTitle={game?.title}/>

          {/* Rest of the content */}
          <div className="flex flex-wrap gap-2 mt-12 ml-5 shadow-gray-600 bg-gray-900">
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
                    src="https://littlegames.gg/wp-content/uploads/2024/05/Hills-of-Steel-.webp"
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
