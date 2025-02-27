import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import GamesGrid from "./components/GamesGrid.jsx";
import GamePage from "./components/GamePage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import LoginModel from "./components/LoginModel.jsx";
import SignupModel from "./components/SignupModel.jsx";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [switchToSignup, setSwitchToSignup] = useState(false); // New state

  // Effect to transition from login to signup
  useEffect(() => {
    if (!isLoginOpen && switchToSignup) {
      setIsSignupOpen(true);
      setSwitchToSignup(false);
    }
  }, [isLoginOpen, switchToSignup]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br bg-gray-900">
      <Navbar onSearch={setSearchQuery} onLogin={() => setIsLoginOpen(true)} />

      <div className="flex-grow p-6">
        <Routes>
          <Route path="/" element={<GamesGrid searchQuery={searchQuery} />} />
          <Route path="/game/:slug" element={<GamePage />} />
          <Route path="/gamegrid" element={<GamesGrid searchQuery={searchQuery} />} />
        </Routes>
      </div>

      <Footer />

      {/* Login Modal */}
      {/* <LoginModel 
        open={isLoginOpen} 
        setOpen={setIsLoginOpen} 
        setSignupOpen={() => setSwitchToSignup(true)} 
      /> */}

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


