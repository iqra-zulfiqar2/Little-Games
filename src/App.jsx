import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import GamesGrid from "./components/GamesGrid.jsx";
import GamePage from "./components/GamePage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import SignupModel from "./components/SignupModel.jsx";
import CategoryPage from "./components/CategoryPage.jsx"; 
import GameEmbed from "./components/GameEmbed.jsx";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [switchToSignup, setSwitchToSignup] = useState(false);
  
  const location = useLocation();
  const isEmbedPage = location.pathname.startsWith("/embed/");

  useEffect(() => {
    if (!isLoginOpen && switchToSignup) {
      setIsSignupOpen(true);
      setSwitchToSignup(false);
    }
  }, [isLoginOpen, switchToSignup]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br bg-gray-900">
      {!isEmbedPage && <Navbar onSearch={setSearchQuery} onLogin={() => setIsLoginOpen(true)} />}
      
      <div className="flex-grow p-6">
        <Routes>
          <Route path="/" element={<GamesGrid searchQuery={searchQuery} />} />
          <Route path="/game/:slug" element={<GamePage />} />
          <Route path="/gamegrid" element={<GamesGrid searchQuery={searchQuery} />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/embed/:slug" element={<GameEmbed />} />
        </Routes>
      </div>

      {!isEmbedPage && <Footer />}

      {/* Signup Modal */}
      <SignupModel 
        open={isSignupOpen} 
        setOpen={setIsSignupOpen} 
        setLoginOpen={setIsLoginOpen} 
      />
    </div>
  );
}

export default App;



