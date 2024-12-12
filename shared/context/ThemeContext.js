// context/ThemeContext.js
import React, { createContext, useState, useEffect } from "react";

// Create the ThemeContext with default values
export const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});
