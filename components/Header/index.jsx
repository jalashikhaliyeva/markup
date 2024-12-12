// components/Header.js
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Container from "../Container";
import { TbWorld } from "react-icons/tb";
import { LuMoon } from "react-icons/lu";
import { RxArrowTopRight } from "react-icons/rx";
import NeonButton from "../NeonButton";
import useTheme from "@/shared/hooks/useTheme";
import { LuSun } from "react-icons/lu";
import { useRouter } from "next/router";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    router.push("/services");
  };
  // Handler to check scroll position
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    // Adjust the threshold as needed
    if (scrollTop > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "shadow-sm bg-white dark:bg-gray-900 backdrop-filter backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Container>
        <header>
          <div className="flex items-center pt-3">
            <div className="cursor-pointer" onClick={() => router.push(`/`)}>
              <Image
                src="/logo/markup-logo.png"
                width={44}
                height={56}
                className="mr-8"
                alt="Logo"
              />
            </div>
            <nav className="bg-mainGray shadow-elevation1 py-3 px-5 rounded-xl gap-8 flex items-center w-full justify-between transition-shadow duration-300">
              <div className="gap-8 flex text-neutralBlack font-medium font-grotesk leading-6 text-center">
                <a
                  className="cursor-pointer"
                  onClick={() => router.push(`/services`)}
                >
                  Xidmətlərimiz
                </a>
                <a
                  className="cursor-pointer"
                  onClick={() => router.push(`/projects`)}
                  href="#projects"
                >
                  Layihələr
                </a>
                <a
                  className="cursor-pointer"
                  onClick={() => router.push(`/about`)}
                  href="#about"
                >
                  Haqqımızda
                </a>
                <a
                  className="cursor-pointer"
                  onClick={() => router.push(`/blogs`)}
                  href="#blogs"
                >
                  Bloglar
                </a>
              </div>

              <div className="gap-5 justify-end flex items-center">
                {/* Theme Toggle Icons */}
                {isDarkMode ? (
                  <LuMoon
                    className="text-xl cursor-pointer"
                    onClick={toggleTheme}
                    title="Switch to Light Mode"
                  />
                ) : (
                  <LuSun
                    className="text-xl cursor-pointer"
                    onClick={toggleTheme}
                    title="Switch to Dark Mode"
                  />
                )}

                <NeonButton
                  onClick={() => alert("Button Clicked!")}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M16.0037 10.3842L7.39712 18.9908L5.98291 17.5766L14.5895 8.96997H7.00373V6.96997H18.0037V17.97H16.0037V10.3842Z"
                        fill="currentColor"
                      />
                    </svg>
                  }
                >
                  Bizimlə əlaqə
                </NeonButton>
              </div>
            </nav>
          </div>
        </header>

        {/* To prevent content from being hidden behind the fixed header */}
        <div className="h-4"></div>
      </Container>
    </div>
  );
}

export default Header;
