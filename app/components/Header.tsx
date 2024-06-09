'use client';

import React from 'react';
import {useTheme} from '../context/ThemeContext';

const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className={
      "py-4 px-6 shadow-md flex justify-between items-center " +
      (darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black")
    }>
      <h1 className="text-2xl font-bold">News Paper</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/posts" className="hover:underline">Home</a></li>
        </ul>
      </nav>
      <button
        onClick={toggleDarkMode}
        className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;

