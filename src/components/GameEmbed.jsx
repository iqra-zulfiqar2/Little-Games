import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

const GameEmbed = () => {
  const { slug } = useParams();
  const [embedUrl, setEmbedUrl] = useState("");
  const iframeRef = useRef(null);

  useEffect(() => {
    // Simulated embed URLs for games
    const embedLinks = {
      "ragdoll-archers": "https://example.com/embed/ragdoll-archers",
      "hills-of-steel": "https://example.com/embed/hills-of-steel",
      "shell-shockers": "https://example.com/embed/shell-shockers",
    };
    
    // Set the iframe source based on the game slug
    if (slug && embedLinks[slug]) {
      setEmbedUrl(embedLinks[slug]);
    }
  }, [slug]);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center pt-10 px-4">
      <h1 className="text-white text-3xl font-bold mb-4">Play {slug?.replace("-", " ").toUpperCase()}</h1>
      <div className="w-full max-w-4xl">
        {embedUrl ? (
          <iframe
            ref={iframeRef}
            src={embedUrl}
            title="Game"
            className="w-full h-[500px] border-none rounded-lg shadow-lg"
            allowFullScreen
          />
        ) : (
          <p className="text-white">Game not found or embed link unavailable.</p>
        )}
      </div>
    </div>
  );
};

export default GameEmbed;
