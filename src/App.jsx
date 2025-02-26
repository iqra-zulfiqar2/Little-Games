import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import GamesGrid from "./components/GamesGrid.jsx";
import GamePage from "./components/GamePage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import LoginModel from "./components/LoginModel.jsx";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br bg-gray-900">
      {/* ✅ Pass function to toggle login modal */}
      <Navbar onSearch={setSearchQuery} onLogin={() => setIsLoginOpen(true)} />

      <div className="flex-grow p-6">
        <Routes>
          <Route path="/" element={<GamesGrid searchQuery={searchQuery} />} />
          <Route path="/game/:slug" element={<GamePage />} />
          <Route
            path="/gamegrid"
            element={<GamesGrid searchQuery={searchQuery} />}
          />
        </Routes>
      </div>

      <Footer />

      {/* ✅ Login Modal - opens when login is clicked */}
      <LoginModel isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}

export default App;
