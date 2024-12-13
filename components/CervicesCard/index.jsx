import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import NavigationButton from "../NavigationButton";

function CervicesCard() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const router = useRouter(); // Use useRouter to get the current route
  const isIndexPage = router.pathname === "/"; // Check if the current page is the index page

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="flex flex-row flex-wrap gap-5 w-full pb-10">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="flex justify-between p-5 gap-2 md:gap-5 bg-white dark:bg-cardBgDark hover:bg-lightPurpleCard dark:hover:bg-darkHoverColor rounded-2xl w-full lg:w-[48%] 2xl:w-[49%] transition-colors duration-300"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <h3 className="font-grotesk dark:text-white text-2xl md:text-4xl font-medium leading-8 md:leading-10 text-neutralBla">
                Websaytların hazırlanması
              </h3>
              <p className="text-neutralBlack dark:text-white text-xs md:text-base leading-5 font-normal pb-4 md:pb-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
            </div>
            <button className="self-start  dark:text-white text-left flex items-center gap-2 text-xl leading-6 font-medium group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                className="transform transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1 group-hover:translate-y-[-2px]"
              >
                <path
                  d="M16.0037 10.3842L7.39712 18.9908L5.98291 17.5766L14.5895 8.96997H7.00373V6.96997H18.0037V17.97H16.0037V10.3842Z"
                  className="fill-black dark:fill-white"
                />
              </svg>
              Ətraflı
            </button>
          </div>
          <div className="relative size-[104px] lg:w-[190px] lg:h-[190px] overflow-hidden">
            {/* Base Image */}
            <Image
              src="/services/servicesCard.png"
              alt="Services Card"
              layout="fill"
              className={`absolute inset-0 transition-opacity duration-500 object-contain ${
                hoveredCard === index ? "opacity-0" : "opacity-100"
              }`}
            />
            {/* Hovered Image */}
            <Image
              src="/services/servicesHovered.png"
              alt="Hovered Services Card"
              layout="fill"
              className={`absolute inset-0 transition-opacity duration-500 object-contain ${
                hoveredCard === index ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      ))}

      {/* Show NavigationButton only on the index page */}
      {isIndexPage && (
        <div className="block lg:hidden w-full">
          <NavigationButton
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
            Hamısına bax
          </NavigationButton>
        </div>
      )}
    </div>
  );
}

export default CervicesCard;
