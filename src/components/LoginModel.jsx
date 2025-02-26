import React from "react";
import { X } from "lucide-react";

const LoginModel = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* Modal Content */}
      <div className="bg-gray-900 text-white p-6 rounded-lg w-96 relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-white">
          <X size={24} />
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold mb-4 text-center">Log in or sign up</h2>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full bg-gray-800 p-2 rounded-md mb-3 text-white placeholder-gray-400 focus:outline-none"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full bg-gray-800 p-2 rounded-md mb-3 text-white placeholder-gray-400 focus:outline-none"
        />

        {/* Login Button */}
        <button className="w-full bg-purple-600 p-2 rounded-md hover:bg-purple-500 transition">
          Continue
        </button>
      </div>
    </div>
  );
};

export default LoginModel;
