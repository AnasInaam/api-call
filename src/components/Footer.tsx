import React from 'react';

const Footer: React.FC = () => (
  <footer className="w-full py-4 text-center bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-gray-900 dark:to-gray-800 text-white dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 mt-8">
    <span>© {new Date().getFullYear()} My Fullstack App. Powered by Next.js, Flask, and Tailwind CSS.</span>
  </footer>
);

export default Footer;
