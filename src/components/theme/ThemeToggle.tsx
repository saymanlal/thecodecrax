'use client';

import { useTheme } from './ThemeContext';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="p-2.5 rounded-2xl transition-all duration-300 cursor-pointer flex items-center gap-2 border bg-white/5 border-white/10 hover:bg-white/10 text-white dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10 light:bg-gray-100 light:border-gray-200 light:text-gray-800 light:hover:bg-gray-200 shadow-sm"
    >
      {theme === 'dark' ? (
        <>
          <Sun size={18} className="text-amber-400 animate-spin-slow" />
          <span className="text-xs font-semibold text-gray-300 hidden sm:inline">Light</span>
        </>
      ) : (
        <>
          <Moon size={18} className="text-violet-600" />
          <span className="text-xs font-semibold text-gray-700 hidden sm:inline">Dark</span>
        </>
      )}
    </button>
  );
}
