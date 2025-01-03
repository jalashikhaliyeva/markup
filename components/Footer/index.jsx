// components/Footer.js

import React from "react";
import Image from "next/image";
import Container from "../Container";
import {
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiPhone,
  FiMail,
  FiNavigation,
} from "react-icons/fi";
import ThemeToggle from "../ThemeToggle";
// import { navLinks } from "./navLinks"; // Import navLinks
import { useTranslation } from "react-i18next";

const Footer = ({ data }) => {
  const navLinks = [
    { key: "services", path: "/services" },
    { key: "projects", path: "/projects" },
    { key: "about", path: "/about" },
    { key: "blogs", path: "/blogs" },
  ];
  const formatLink = (link) => {
    if (!/^https?:\/\//i.test(link)) {
      return `https://${link}`;
    }
    return link;
  };

  const { t } = useTranslation();

  return (
    <footer className="py-custom-space relative border-4 border-transparent bg-white dark:bg-bgDark">
      {/* Gradient border */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"></div>

      {/* Footer content */}
      <Container>
        <div className="flex flex-wrap justify-between">
          {/* Left Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            {/* Logo */}
            <Image
              src={data?.logo?.footer_logo}
              width={169}
              height={53}
              alt="Logo"
              className="object-contain block dark:hidden"
            />

            {/* Dark Mode Logo */}
            <Image
              src={data?.logo?.footer_dark_logo}
              width={169}
              height={53}
              alt="Logo Dark"
              className="object-contain hidden dark:block"
            />
            <p className="text-textGray leading-6 py-3 dark:text-gray-400 mt-2">
              We offer a comprehensive suite of digital marketing services
              covering all aspects of online presence.
            </p>
            <div className="mt-4 flex items-center space-x-4">
              <ThemeToggle />
            </div>
            <div className="mt-7 flex items-center space-x-4">
              {data?.social_link?.map((social) => (
                <a
                  key={social.link}
                  href={formatLink(social.link)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.link.split(".")[0]}
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <Image
                    src={social.image}
                    width={24}
                    height={24}
                    alt={social.link.split(".")[0]}
                    className="dark:filter dark:invert"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="w-1/2 sm:w-1/3 md:w-1/3 mb-6 md:mb-0 flex flex-col items-start sm:items-center">
            <h3 className="text-lg mb-4 sm:mb-9 font-bold md:text-center w-full sm:w-auto dark:text-white">
              {t("navigation")}
            </h3>
            <ul className="mt-2 space-y-4 sm:space-y-6 text-left w-full sm:w-auto">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.path}
                    className="text-textGray dark:text-gray-400 hover:text-hoverPurple transition-colors duration-300"
                  >
                    {t(`nav.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="w-1/2 sm:w-1/3 md:w-1/3">
            <h3 className="text-lg font-bold mb-4 sm:mb-9 dark:text-white">
              {t("contact")}
            </h3>
            <ul className="mt-2 space-y-4 sm:space-y-6">
              <li className="text-textGray text-sm md:text-base dark:text-textGray flex items-center gap-2">
                <FiPhone className="size-6" />
                {data?.contact?.phone}
              </li>
              <li className="text-textGray text-sm md:text-base dark:text-textGray flex items-center gap-2">
                <FiMail className="size-6" />
                {data?.contact?.email}
              </li>
              <li className="text-textGray text-sm md:text-base dark:text-textGray flex items-center gap-2">
                <FiNavigation className="size-6" />
                {data?.contact?.address}
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Gradient border at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"></div>
    </footer>
  );
};

export default Footer;
