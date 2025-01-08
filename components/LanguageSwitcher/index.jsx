// components/LanguageSwitcher.jsx

import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { TbWorld } from "react-icons/tb";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    router.locale?.toUpperCase() || "AZ"
  );
  const dropdownRef = useRef(null);

  const handleLanguageChange = (language) => {
    if (language.toUpperCase() === selectedLanguage) return; // No change needed

    setSelectedLanguage(language.toUpperCase());
    i18n.changeLanguage(language.toLowerCase());
    localStorage.setItem("selectedLanguage", language.toUpperCase());
    setIsDropdownOpen(false);

    // Use router.asPath to preserve dynamic segments and query parameters
    router.push(router.asPath, router.asPath, {
      locale: language.toLowerCase(),
    });
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "AZ";
    setSelectedLanguage(savedLanguage);
    i18n.changeLanguage(savedLanguage.toLowerCase());
  }, [i18n]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
      ref={dropdownRef}
    >
      <button
        id="dropdownLanguageButton"
        className="w-6 h-6 flex items-center justify-center focus:outline-none mx-0 md:mx-2"
        type="button"
      >
        {/* Consistent size and color as original TbWorld */}
        <TbWorld className="w-6 h-6 dark:text-white" />
      </button>

      <div
        className={`absolute z-20  w-32 mt-2 bg-white dark:bg-darkHeader border border-gray-300 rounded-lg shadow-lg p-2 transition-all duration-300 ease-in-out transform ${
          isDropdownOpen
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 -translate-y-4 invisible"
      } left-1/2 transform -translate-x-1/2`}
      >
        <ul className="py-1">
          {["AZ", "EN", "RU"].map((lang) => (
            <li
              key={lang}
              className={`block px-4 py-2 cursor-pointer rounded hover:bg-gray-100 dark:hover:bg-gray-500 font-normal text-base transition-colors ${
                selectedLanguage === lang
                  ? "text-blue-700 font-semibold dark:text-blue-400"
                  : "text-gray-700 dark:text-white"
              }`}
              onClick={() => handleLanguageChange(lang)}
            >
              {lang}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LanguageSwitcher;
