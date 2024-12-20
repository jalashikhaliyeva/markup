import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { LuMoon, LuSun } from "react-icons/lu";
import useTheme from "@/shared/hooks/useTheme";
import Container from "../Container";
import NeonButton from "../NeonButton";

function LargeScreenHeader({ isDarkMode, toggleTheme, bgColor  , darkBgColor}) {
  const currentBgColor = isDarkMode ? darkBgColor : bgColor;
  const router = useRouter();
  return (
    <nav
      style={{
        backgroundColor: currentBgColor,
      }}
      className=" !dark:bg-darkHeader  py-3 px-5 rounded-xl gap-8 flex items-center w-full justify-between transition-shadow duration-300"
    >
      <div className="gap-8 flex text-neutralBlack dark:text-white font-medium font-grotesk leading-6 text-center">
        <a
          className="relative group cursor-pointer"
          onClick={() => router.push(`/services`)}
        >
          Xidmətlərimiz
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-current transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </a>
        <a
          className="relative group cursor-pointer"
          onClick={() => router.push(`/projects`)}
        >
          Layihələr
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-current transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </a>
        <a
          className="relative group cursor-pointer"
          onClick={() => router.push(`/about`)}
        >
          Haqqımızda
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-current transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </a>
        <a
          className="relative group cursor-pointer"
          onClick={() => router.push(`/blogs`)}
        >
          Bloglar
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-current transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </a>
      </div>
      <div className="gap-5 justify-end flex items-center">
        {isDarkMode ? (
          <LuMoon
            className="text-xl cursor-pointer dark:text-white"
            onClick={toggleTheme}
            title="Switch to Light Mode"
          />
        ) : (
          <LuSun
            className="text-xl cursor-pointer dark:text-white"
            onClick={toggleTheme}
            title="Switch to Dark Mode"
          />
        )}
        <NeonButton onClick={() => router.push(`/contact`)}>
          Bizimlə əlaqə
        </NeonButton>
      </div>
    </nav>
  );
}
export default LargeScreenHeader;
