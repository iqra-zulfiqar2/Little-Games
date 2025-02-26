import React, { useState } from "react";
import { Share, Code, Copy, X } from "lucide-react";
import { FaFacebook, FaXTwitter, FaWhatsapp, FaLinkedin, FaReddit } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs.jsx";

const GameStats = ({ gameTitle = "Ragdoll Archers" }) => {
  const [activeSection, setActiveSection] = useState(null);
  const location = useLocation();

  // Get current URL dynamically
  const currentURL = `${window.location.origin}${location.pathname}`;
  const embedCode = `<iframe src="${currentURL}" width="800" height="600"></iframe>`;

  // Copy to clipboard function
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  // Toggle section visibility
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg">
      <Breadcrumbs paths={[{ name: "Games", link: "/games" }, { name: gameTitle, link: null }]} />

      {/* Header Section */}
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          {/* Share Button */}
          <button
            onClick={() => toggleSection("share")}
            className={`text-white flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activeSection === "share" ? "bg-blue-600" : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            <Share size={20} />
            Share
          </button>

          {/* Embed Button */}
          <button
            onClick={() => toggleSection("embed")}
            className={`text-white flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activeSection === "embed" ? "bg-blue-600" : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            <Code size={20} />
            Embed
          </button>
        </div>


        {/* Share Section */}
        {activeSection === "share" && (
          <div className="bg-gray-800 p-4 rounded-lg mt-2 w-80 animate-accordion-down relative">
            <button 
              onClick={() => setActiveSection(null)} 
              className="absolute top-2 right-2 text-gray-400 hover:text-white transition"
            >
              <X size={18} />
            </button>
            <h3 className="text-white text-lg font-bold mb-4">Share this game</h3>
            
            {/* Social Icons */}
            <div className="flex gap-3 mb-4">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${currentURL}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-500 p-2 rounded hover:opacity-75 transition-opacity"
              >
                <FaFacebook size={20} />
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${currentURL}&text=Play ${gameTitle}!`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-black p-2 rounded hover:opacity-75 transition-opacity"
              >
                <FaXTwitter size={20} />
              </a>
              <a href={`https://api.whatsapp.com/send?text=Play ${gameTitle}! ${currentURL}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-500 p-2 rounded hover:opacity-75 transition-opacity"
              >
                <FaWhatsapp size={20} />
              </a>
              <a href={`https://www.linkedin.com/shareArticle?url=${currentURL}&title=Play ${gameTitle}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-700 p-2 rounded hover:opacity-75 transition-opacity"
              >
                <FaLinkedin size={20} />
              </a>
              <a href={`https://www.reddit.com/submit?url=${currentURL}&title=Play ${gameTitle}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-red-500 p-2 rounded hover:opacity-75 transition-opacity"
              >
                <FaReddit size={20} />
              </a>
            </div>

            {/* Copy Link */}
            <div className="flex">
              <input 
                type="text" 
                value={currentURL} 
                readOnly 
                className="bg-gray-700 text-white p-2 rounded-l flex-1"
              />
              <button 
                onClick={() => copyToClipboard(currentURL)} 
                className="bg-blue-600 p-2 rounded-r hover:bg-blue-500 transition-colors"
              >
                <Copy size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Embed Section */}
        {activeSection === "embed" && (
          <div className="bg-gray-800 p-4 rounded-lg mt-2 w-80 animate-accordion-down relative">
            <button 
              onClick={() => setActiveSection(null)} 
              className="absolute top-2 right-2 text-gray-400 hover:text-white transition"
            >
              <X size={18} />
            </button>
            <h3 className="text-white text-lg font-bold mb-2">Embed {gameTitle}</h3>
            <p className="text-gray-400 text-sm mb-4">Copy and paste this iframe code:</p>

            {/* Copy Embed Code */}
            <div className="flex">
              <input 
                type="text" 
                value={embedCode} 
                readOnly 
                className="bg-gray-700 text-white p-2 rounded-l flex-1"
              />
              <button 
                onClick={() => copyToClipboard(embedCode)} 
                className="bg-blue-600 p-2 rounded-r hover:bg-blue-500 transition-colors"
              >
                <Copy size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameStats;
