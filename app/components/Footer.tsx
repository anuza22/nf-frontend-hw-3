// app/components/Footer.tsx
'use client';

import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <footer className={
      "py-4 px-6 shadow-md mt-8 flex justify-between items-center " +
      (darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black")
    }>
      <span>&copy; 2024 News Paper. All rights reserved.</span>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
          <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
