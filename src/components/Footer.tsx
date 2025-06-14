import React from 'react';
import { Github } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="w-full py-4 text-center bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-gray-900 dark:to-gray-800 text-white dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 mt-8 rounded-t-2xl flex flex-col items-center gap-2">
    <div className="flex items-center gap-2 justify-center">
      <Github className="w-5 h-5 inline-block" />
      <a
        href="https://github.com/AnasInaam/api-call"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-blue-200 transition-colors"
      >
        View on GitHub
      </a>
    </div>
    <span className="text-xs opacity-80">© {new Date().getFullYear()} My Fullstack App v0.1.0 &mdash; Powered by Next.js, Flask, and Tailwind CSS.</span>
  </footer>
);

export default Footer;
