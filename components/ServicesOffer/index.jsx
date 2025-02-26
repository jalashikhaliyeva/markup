// components/ServicesOffer.jsx
import Image from "next/image";
import React from "react";
import NavigateToPortfolio from "../NavigateToPortfolio";
import useTheme from "@/shared/hooks/useTheme";

function ServicesOffer({ data }) {
  console.log(data, "data");
  const { isDarkMode } = useTheme(); 

  return (
    <div className="pt-custom-space">
      <h1 className="text-black dark:text-white font-medium leading-10 flex items-center justify-center text-4xl">
        Services we offer
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {data.map((service, index) => (
          <div
            key={service.key || index}
            className="p-8 w-full rounded-2xl flex flex-col items-center text-center transition-colors duration-300"
            style={{
              backgroundColor: isDarkMode ? service.dark_color : service.color,
            }}
          >
            <Image
              width={148}
              height={148}
              alt={service.title || `service-${index}`}
              src={service.image}
            />

            <p className="text-black dark:text-white text-2xl font-medium pb-3">
              {service.title || "Service Title"}
            </p>
            <p className="text-textGray400 dark:text-gray300 text-base">
              {service.value}
            </p>
          </div>
        ))}
      </div>

      <NavigateToPortfolio />
    </div>
  );
}

export default ServicesOffer;
