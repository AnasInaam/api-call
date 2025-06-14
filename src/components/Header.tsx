import React from 'react';

const Header: React.FC = () => (
  <header className="w-full py-6 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-gray-900 dark:to-gray-800 shadow text-center">
    <h1 className="text-3xl font-bold text-white tracking-tight">My Fullstack API Playground</h1>
    <p className="text-gray-200 mt-2">Interact with 5 different APIs powered by Flask</p>
  </header>
);

export default Header;
