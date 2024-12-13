// context/ThemeProvider.js (excerpt)
import React, { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemeTransitionOverlay from "@/components/ThemeTransitionOverlay";

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetTheme, setTargetTheme] = useState(null);
  const [shouldHideOverlay, setShouldHideOverlay] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setIsDarkMode(storedTheme === "dark");
      } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setIsDarkMode(prefersDark);
      }
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsTransitioning(true);
    setTargetTheme(newTheme);
  };

  const handleTransitionEnd = () => {
    // Switch the theme now that the overlay covers the screen
    setIsDarkMode(targetTheme === "dark");

    // Instead of removing .active immediately, let's just wait a bit
    // We'll fade it out or immediately hide it.
    setTimeout(() => {
      setShouldHideOverlay(true); 
      // After a short delay, remove the overlay from transitioning state as well
      setTimeout(() => {
        setIsTransitioning(false);
        setTargetTheme(null);
        setShouldHideOverlay(false);
      }, 500);
    }, 100);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div style={{ position: "relative" }}>
        {children}
        <ThemeTransitionOverlay
          isActive={isTransitioning}
          targetTheme={targetTheme}
          onTransitionEnd={handleTransitionEnd}
          shouldHideOverlay={shouldHideOverlay}
        />
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
