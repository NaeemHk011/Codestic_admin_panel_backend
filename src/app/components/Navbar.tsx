'use client'
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-64 right-0 bg-white shadow-lg z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <svg
              className="absolute right-3 top-2.5 w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>


          {/* Profile Picture & Dropdown */}
          <div className="relative">
            <button
              className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
            >
              <img
                src="https://cdn-icons-png.freepik.com/512/219/219988.png"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-gray-300"
              />
              <span className="text-sm font-medium text-gray-700">Naeem</span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                <ul className="py-2">
                  
                  <li>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
