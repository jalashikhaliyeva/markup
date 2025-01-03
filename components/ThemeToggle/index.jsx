import useTheme from "@/shared/hooks/useTheme";
import React from "react";
import { useTranslation } from "react-i18next";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className="mt-4 flex items-center space-x-4">
      <span className="text-gray-600 dark:text-gray-400">
        {isDarkMode ? t("theme.light") : t("theme.dark")}
      </span>
      <button
        onClick={toggleTheme}
        className={`relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none transition-colors duration-200 ${
          isDarkMode ? "bg-blue-600" : "bg-gray-200"
        }`}
        role="switch"
        aria-checked={isDarkMode}
      >
        <span
          className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ${
            isDarkMode ? "transform translate-x-5" : ""
          }`}
        ></span>
      </button>
    </div>
  );
};

export default ThemeToggle;
