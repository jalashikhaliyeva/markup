import Image from "next/image";
import React, { useState } from "react";

function CervicesCard() {
  const [hoveredCard, setHoveredCard] = useState(null);

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
          className="flex justify-between p-5 gap-5 bg-white hover:bg-lightPurpleCard rounded-2xl w-[49%] transition-colors duration-300"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <h3 className="font-grotesk text-4xl font-medium leading-10 text-neutralBla">
                Websaytların hazırlanması
              </h3>
              <p className="text-neutralBlack text-base leading-5 font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
            </div>
            <button className="self-start text-left flex items-center gap-2 text-xl leading-6 font-medium group">
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
                  fill="black"
                />
              </svg>
              Ətraflı
            </button>
          </div>
          <div className="relative w-[190px] h-[190px] overflow-hidden">
            {/* Base Image */}
            <Image
              src="/services/servicesCard.png"
              alt="Services Card"
              layout="fill"
              className={`absolute inset-0 transition-opacity duration-500 ${
                hoveredCard === index ? "opacity-0" : "opacity-100"
              }`}
            />
            {/* Hovered Image */}
            <Image
              src="/services/servicesHovered.png"
              alt="Hovered Services Card"
              layout="fill"
              className={`absolute inset-0 transition-opacity duration-500 ${
                hoveredCard === index ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CervicesCard;
