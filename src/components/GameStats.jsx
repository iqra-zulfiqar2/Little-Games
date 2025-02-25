import React, { useState } from "react";
import { Share, Code, X, Copy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs.jsx";
import CategoryTag from "./CategoryTag.jsx";


const GameStats = ({ gameTitle = "Ragdoll Archers", gameSlug = "ragdoll-archers" }) => {
  const navigate = useNavigate();
  const [showShareModal, setShowShareModal] = useState(false);
  const [showEmbedModal, setShowEmbedModal] = useState(false);

  // Get the base URL of the website dynamically
  const siteBaseURL = window.location.origin;
  const gameURL = `${siteBaseURL}/games/${gameSlug}`;
  const embedCode = `<iframe src="${gameURL}" width="800" height="600"></iframe>`;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const categories = [
    { name: "Casual", count: "1,067", path: "/games/casual" },
    { name: "2 Player", count: "204", path: "/games/2-player" },
    { name: "Arena", count: "193", path: "/games/arena" },
    { name: "Physics", count: "298", path: "/games/physics" },
    { name: "Co-op", count: "24", path: "/games/co-op" },
    { name: "Stickman", count: "175", path: "/games/stickman" },
    { name: "Archery", count: "40", path: "/games/archery" },
    { name: "Ragdoll", count: "45", path: "/games/ragdoll" },
    { name: "Arcade", count: "334", path: "/games/arcade" }
  ];

  const breadcrumbPaths = [
    { name: "Games", link: "/games" },
    { name: "Casual", link: "/games/casual" },
    { name: "Shooting", link: "/games/shooting" },
    { name: "Archery", link: null }
  ];
  const stats = {
    developer: "Ericetto",
    rating: 9.2,
    votes: "1,265,130",
    released: "August 2023",
    lastUpdated: "July 2024",
    technology: "HTML5",
    platforms: "Browser (desktop, mobile, tablet), App Store(Android)"
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg">
      <Breadcrumbs paths={[{ name: "Games", link: "/games" }, { name: gameTitle, link: null }]} />

      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-4">
          {/* Share Button */}
          <button
            onClick={() => setShowShareModal(true)}
            className="text-white flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            <Share size={20} />
            Share
          </button>

          {/* Embed Button */}
          <button
            onClick={() => setShowEmbedModal(true)}
            className="text-white flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            <Code size={20} />
            Embed
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-gray-400">Rating:</p>
            <p className="flex items-center gap-2">
              <span className="text-white font-bold">{stats.rating}</span>
              <span className="text-gray-400">({stats.votes} votes)</span>
            </p>
          </div>
          <div>
            <p className="text-gray-400">Technology:</p>
            <p>{stats.technology}</p>
          </div>
          <div>
            <p className="text-gray-400">Platforms:</p>
            <p>{stats.platforms}</p>
          </div>
        </div>
  
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <CategoryTag
              key={category.name}
              name={category.name}
              count={category.count}
              onClick={() => handleCategoryClick(category.path)}
            />
          ))}
        </div>
  
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">How to Play</h2>
          <p className="text-gray-300 text-lg mb-4">Line up your shots carefully, and fire!</p>
          <p className="text-gray-300">
            Starting with the basic arrows and baseline stats, you will be faced with various enemies. 
            Some of these enemies are trickier than others to beat due to armor, position, and other factors. 
            Every now and then, you will face a giant enemy. This is like a mini-boss challenge that will 
            test your skills and upgraded abilities!
          </p>
          </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-lg w-96">
            <div className="flex justify-between">
              <h3 className="text-white text-lg font-bold">Share this game</h3>
              <X className="cursor-pointer" onClick={() => setShowShareModal(false)} />
            </div>
            <div className="mt-4 flex gap-3">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${gameURL}`} target="_blank" className="text-blue-500">Facebook</a>
              <a href={`https://twitter.com/intent/tweet?url=${gameURL}`} target="_blank" className="text-gray-300">X</a>
              <a href={`https://api.whatsapp.com/send?text=${gameURL}`} target="_blank" className="text-green-500">WhatsApp</a>
              <a href={`https://www.linkedin.com/shareArticle?url=${gameURL}`} target="_blank" className="text-blue-700">LinkedIn</a>
              <a href={`https://www.reddit.com/submit?url=${gameURL}`} target="_blank" className="text-red-500">Reddit</a>
            </div>
            <div className="mt-4 flex">
              <input type="text" value={gameURL} readOnly className="bg-gray-700 text-white p-2 rounded-l w-full" />
              <button onClick={() => copyToClipboard(gameURL)} className="bg-blue-600 p-2 rounded-r"><Copy size={18} /></button>
            </div>
          </div>
        </div>
      )}

      {/* Embed Modal */}
      {showEmbedModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-lg w-96">
            <div className="flex justify-between">
              <h3 className="text-white text-lg font-bold">Embed {gameTitle}</h3>
              <X className="cursor-pointer" onClick={() => setShowEmbedModal(false)} />
            </div>
            <div className="mt-4">
              <p className="text-gray-400 text-sm">Copy and paste this iframe code:</p>
              <div className="mt-2 flex">
                <input type="text" value={embedCode} readOnly className="bg-gray-700 text-white p-2 rounded-l w-full" />
                <button onClick={() => copyToClipboard(embedCode)} className="bg-blue-600 p-2 rounded-r"><Copy size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameStats;
