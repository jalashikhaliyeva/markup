import { TbWorld } from "react-icons/tb";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
const ThemeToggle = dynamic(() => import('../ThemeToggle'), { ssr: false });

// import ThemeToggle from "../ThemeToggle";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import dynamic from "next/dynamic";
import LanguageSwitcher from "../LanguageSwitcher";

function SmallScreenHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className="relative">
      {/* Top Bar for small screens */}
      <div className="flex justify-between items-center gap-2 py-2 px-6 bg-white dark:bg-bgDark relative z-50">
        {/* Logo on the left */}
        <div
          className="cursor-pointer mr-2"
          onClick={() => {
            router.push(`/`);
            if (menuOpen) toggleMenu();
          }}
        >
          <Image
            src="/logo/markup-logo.png"
            width={39}
            height={49}
            alt="Logo"
            className="object-contain block dark:hidden"
          />

          {/* Dark Mode Logo */}
          <Image
            src="/logo/logo-dark.png"
            width={39}
            height={49}
            alt="Logo Dark"
            className="object-contain hidden dark:block"
          />
        </div>

        {/* Icons (World and Menu/Close) on the right */}
        <div className="flex items-center gap-2">
          <div className="bg-mainGray p-2 rounded-xl dark:bg-bgDark dark:border dark:border-gray-400">
            {/* <TbWorld className="w-6 h-6 dark:text-white" /> */}
            <LanguageSwitcher    />
          </div>
          <div
            className="bg-mainGray dark:bg-bgDark dark:border dark:border-gray-400 p-2 rounded-xl cursor-pointer"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <IoCloseOutline className="w-6 h-6 dark:text-white" />
            ) : (
              <IoMenuOutline className="w-6 h-6 dark:text-white" />
            )}
          </div>
        </div>
      </div>

      {/* Full-Screen Overlay Menu */}
      <div
        className={`
          fixed top-0 left-0 w-full h-full transition-all duration-300
          bg-white dark:bg-bgDark z-40
          ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        <nav className="w-full max-w-md mx-auto mt-20">
          <ul className="flex flex-col gap-4">
            <li
              onClick={() => router.push(`/services`)}
              className="py-2 px-7 border-b-gradient dark:text-white"
            >
              <a>Xidmətlərimiz</a>
            </li>
            <li
              onClick={() => router.push(`/projects`)}
              className="py-2 px-7 border-b-gradient dark:text-white"
            >
              <a>Layihələr</a>
            </li>
            <li
              onClick={() => router.push(`/about`)}
              className="py-2 px-7 border-b-gradient dark:text-white"
            >
              <a>Haqqımızda</a>
            </li>
            <li
              onClick={() => router.push(`/blogs`)}
              className="py-2 px-7 border-b-gradient dark:text-white"
            >
              <a>Bloglar</a>
            </li>
            <li
              onClick={() => router.push(`/contact`)}
              className="py-2 px-7 border-b-gradient dark:text-white"
            >
              <a>Bizimlə əlaqə</a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center justify-center flex-col">
          <div className="mt-4 flex items-center space-x-4">
            <ThemeToggle />
          </div>
          <div className="mt-7 flex items-center space-x-4">
            <FiInstagram className="size-6 dark:text-white hover:text-hoverPurple hover:scale-110 transform transition-transform duration-300 cursor-pointer" />
            <FiFacebook className="size-6 dark:text-white hover:text-hoverPurple hover:scale-110 transform transition-transform duration-300 cursor-pointer" />
            <FiLinkedin className="size-6 dark:text-white hover:text-hoverPurple hover:scale-110 transform transition-transform duration-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallScreenHeader;
