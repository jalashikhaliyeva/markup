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
        className="text-textSecondaryDefault dark:text-white text-base inline-flex items-center font-normal focus:outline-none text-center py-3 px-4 hover:text-textHoverBlue"
        type="button"
      >
        <TbWorld className="text-xl" />
        {/* {selectedLanguage} */}
     
        {/* <svg
          className={`ml-2 h-4 w-4 transition-transform duration-200 ${
            isDropdownOpen ? "transform rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg> */}
      </button>

      <div
        className={`absolute z-20 w-32 mt-2 bg-white dark:bg-darkHeader border border-gray-300 rounded-lg shadow-lg p-2 transition-all duration-300 ease-in-out transform ${
          isDropdownOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible"
        }`}
        style={{ top: "100%" }}
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
