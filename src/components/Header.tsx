import React from 'react';
import { Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => (
  <header className="w-full flex flex-col items-center justify-center py-5 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-gray-900 dark:to-gray-800 shadow rounded-b-2xl relative">
    <div className="flex items-center gap-3 justify-center">
      <Sparkles className="w-8 h-8 text-white drop-shadow" />
      <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight drop-shadow">My Fullstack API Playground</span>
    </div>
    <div className="absolute right-6 top-1/2 -translate-y-1/2">
      <ThemeToggle />
    </div>
  </header>
);

export default Header;
