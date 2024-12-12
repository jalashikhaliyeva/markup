// components/Footer.js
import Image from "next/image";
import Container from "../Container";
import { FiInstagram, FiFacebook, FiLinkedin, FiPhone, FiMail, FiNavigation } from "react-icons/fi";
import ThemeToggle from "../ThemeToggle";


const Footer = () => {
  return (
    <footer className="py-custom-space relative border-4 border-transparent bg-white dark:bg-gray-900">
      {/* Gradient border */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"></div>

      {/* Footer content */}
      <Container>
        <div className="flex flex-wrap justify-between">
          {/* Left Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <Image src="/logo/markup-logoII.png" width={169} height={53} />
            <p className="text-textGray leading-6 py-3 dark:text-gray-400 mt-2">
              We offer a comprehensive suite of digital marketing services
              covering all aspects of online presence.
            </p>
            <div className="mt-4 flex items-center space-x-4">
              <ThemeToggle />
            </div>
            <div className="mt-7 flex items-center space-x-4">
              <FiInstagram className="size-6 hover:text-hoverPurple hover:scale-110 transform transition-transform duration-300 cursor-pointer" />
              <FiFacebook className="size-6 hover:text-hoverPurple hover:scale-110 transform transition-transform duration-300 cursor-pointer" />
              <FiLinkedin className="size-6 hover:text-hoverPurple hover:scale-110 transform transition-transform duration-300 cursor-pointer" />
            </div>
          </div>

          {/* Navigation */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-start md:items-center">
            <h3 className="text-lg mb-9 font-bold text-center w-full md:w-auto">
              Navigation
            </h3>
            <ul className="mt-2 space-y-6 text-left w-full md:w-auto">
              <li>
                <a href="#" className="text-textGray dark:text-gray-400">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="text-textGray dark:text-gray-400">
                  Agency
                </a>
              </li>
              <li>
                <a href="#" className="text-textGray dark:text-gray-400">
                  Case Study
                </a>
              </li>
              <li>
                <a href="#" className="text-textGray dark:text-gray-400">
                  Resource
                </a>
              </li>
              <li>
                <a href="#" className="text-textGray dark:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-9 ">Contact</h3>
            <ul className="mt-2 space-y-6 ">
              <li className="text-textGray text-base dark:text-textGray  flex items-center gap-2">
                <span>
                  <FiPhone className="size-6" />
                </span>{" "}
                +994 70 250 10 04
              </li>
              <li className="text-textGray text-base dark:text-textGray flex items-center gap-2">
                <span>
                  <FiMail className="size-6" />
                </span>{" "}
                office@markup.az
              </li>
              <li className="text-textGray text-base dark:text-textGray  flex items-center gap-2">
                <span>
                  <FiNavigation className="size-6" />
                </span>
                Baku, Azerbaijan, Nerimanov ray., Əhməd Rəcəbli küç., 33 Esra
                Plaza Blok C
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"></div>
    </footer>
  );
};

export default Footer;
