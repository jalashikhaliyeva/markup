// components/ThemeToggle.js
import useTheme from "@/shared/hooks/useTheme";
import React from "react";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="mt-4 flex items-center space-x-4">
      <span className="text-gray-600 dark:text-gray-400">
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </span>
      <button
        onClick={toggleTheme}
        className={`toggle-switch relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none transition-colors duration-200 ${
          isDarkMode ? "bg-blue-600" : "bg-gray-200"
        }`}
        role="switch"
        aria-checked={isDarkMode}
      >
        <span
          className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ${
            isDarkMode ? "transform translate-x-5" : ""
          }`}
        ></span>
      </button>
    </div>
  );
};

export default ThemeToggle;
