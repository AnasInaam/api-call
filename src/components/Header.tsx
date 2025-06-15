import React from 'react';
import { Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => (
  <header className="w-full flex items-center justify-between py-5 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-gray-900 dark:to-gray-800 shadow rounded-b-2xl relative z-30">
    {/* Hamburger placeholder for spacing on mobile */}
    <div className="flex md:hidden w-10 h-10" />
    <div className="flex items-center gap-3 mx-auto">
      <Sparkles className="w-8 h-8 text-white drop-shadow" />
      <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight drop-shadow">FlexAPI Studio</span>
    </div>
    <div className="absolute right-6 top-1/2 -translate-y-1/2">
      <ThemeToggle />
    </div>
  </header>
);

export default Header;
