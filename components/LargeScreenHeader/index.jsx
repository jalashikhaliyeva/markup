// components/LargeScreenHeader.jsx

import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { LuMoon, LuSun } from "react-icons/lu";
import NeonButton from "../NeonButton";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io"; // Import the arrow icon

function LargeScreenHeader({ isDarkMode, toggleTheme, bgColor, darkBgColor }) {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const dropdownTimeout = useRef(null); // Ref to hold timeout ID

  const currentBgColor = isDarkMode ? darkBgColor : bgColor;
  const router = useRouter();
  const { t } = useTranslation();

  // Example existing navLinks (excluding "about" which now has a dropdown)
  const navLinks = [
    { key: "services", path: "/services" },
    { key: "blogs", path: "/blogs" },
    { key: "projects", path: "/projects" },
  ];

  // Handler for navigating
  const handleNavigation = (path) => {
    router.push(path);
  };

  // Handlers for mouse enter and leave with delay
  const handleMouseEnter = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
      dropdownTimeout.current = null;
    }
    setIsAboutDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsAboutDropdownOpen(false);
    }, 200); // 200ms delay
  };

  return (
    <nav
      style={{ backgroundColor: currentBgColor }}
      className="!dark:bg-darkHeader py-3 px-5 rounded-xl gap-8 flex items-center w-full justify-between transition-shadow duration-300"
    >
      {/* Left Section: Links + Dropdown */}
      <div className="gap-8 flex text-neutralBlack dark:text-white font-medium font-grotesk leading-6 text-center">
        {/* === About Dropdown === */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Trigger (parent) */}
          <p  onClick={() => handleNavigation("/about")} className="inline-flex items-center cursor-pointer">
            {t("nav.whoWeare")}?
            <IoIosArrowDown
              className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                isAboutDropdownOpen ? "transform rotate-180" : ""
              }`}
            />
          </p>

    
          <div
            className={`absolute top-full left-0 mt-2 bg-white border dark:bg-darkHeader dark:border shadow-lg rounded-lg transform transition-all duration-200 ${
              isAboutDropdownOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <ul className="text-left py-2 w-40">
              <li
                className="px-4 py-2 hover:bg-gray-100 hover:text-primary  dark:hover:text-lightPurpleCard transition-colors duration-300 dark:hover:bg-darkHover cursor-pointer"
                onClick={() => handleNavigation("/about")}
              >
                {t("nav.about")}
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 hover:text-primary dark:hover:text-lightPurpleCard dark:hover:bg-darkHover cursor-pointer"
                onClick={() => handleNavigation("/team")}
              >
                {t("nav.team")}
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 hover:text-primary dark:hover:text-lightPurpleCard dark:hover:bg-darkHover cursor-pointer"
                onClick={() => handleNavigation("/customers")}
              >
                {t("nav.customers")}
              </li>
            </ul>
          </div>
        </div>

        {/* === Render other navigation links === */}
        {navLinks.map((link) => (
          <p
            key={link.key}
            className="relative group cursor-pointer"
            onClick={() => handleNavigation(link.path)}
          >
            {t(`nav.${link.key}`)}
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-current transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
          </p>
        ))}
      </div>

      {/* Right Side: Theme Toggle, Language Switcher, and Contact Button */}
      <div className="flex items-center ">
        {/* Theme Toggle */}
        {isDarkMode ? (
          <LuSun
            className="text-xl cursor-pointer dark:text-white"
            onClick={toggleTheme}
            title={t("theme.light")}
          />
        ) : (
          <LuMoon
            className="text-xl cursor-pointer dark:text-white"
            onClick={toggleTheme}
            title={t("theme.dark")}
          />
        )}

        {/* Language Switcher */}
        <LanguageSwitcher />

        {/* Contact Button */}
        <NeonButton onClick={() => router.push(`/contact`)}>
          {t("nav.contact")}
        </NeonButton>
      </div>
    </nav>
  );
}

export default LargeScreenHeader;
