import React from "react";
import { Routes, Route } from "react-router-dom";
import GamesGrid from "./components/GamesGrid.jsx";
import GamePage from "./components/GamePage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br bg-gray-900">
      <Navbar />
      <div className="flex-grow p-6">
        <Routes>
          <Route path="/" element={<GamesGrid />} />
          <Route path="/game/:slug" element={<GamePage/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
