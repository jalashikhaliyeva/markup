// components/LargeScreenHeader.jsx

import React from "react";
import { useRouter } from "next/router";
import { LuMoon, LuSun } from "react-icons/lu";
import NeonButton from "../NeonButton";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";

function LargeScreenHeader({ isDarkMode, toggleTheme, bgColor, darkBgColor }) {
  const currentBgColor = isDarkMode ? darkBgColor : bgColor;
  const router = useRouter();
  const { t } = useTranslation();

  const navLinks = [
    { key: "about", path: "/about" },
    { key: "services", path: "/services" },
    { key: "blogs", path: "/blogs" },
    { key: "projects", path: "/projects" },
  ];

  return (
    <nav
      style={{
        backgroundColor: currentBgColor,
      }}
      className="!dark:bg-darkHeader py-3 px-5 rounded-xl gap-8 flex items-center w-full justify-between transition-shadow duration-300"
    >
      {/* Navigation Links */}
      <div className="gap-8 flex text-neutralBlack dark:text-white font-medium font-grotesk leading-6 text-center">
        {navLinks.map((link) => (
          <a
            key={link.key}
            className="relative group cursor-pointer"
            onClick={() => router.push(link.path)}
          >
            {t(`nav.${link.key}`)}
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-current transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
          </a>
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
