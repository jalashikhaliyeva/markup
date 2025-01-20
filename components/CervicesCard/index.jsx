// components/CervicesCard.jsx
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import NavigationButton from "../NavigationButton";
import { useTranslation } from "react-i18next";

function CervicesCard({ item }) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState(6); // Number of initially visible cards
  const router = useRouter();
  const isIndexPage = router.pathname === "/";
  // console.log(item, "item");
    const { t } = useTranslation();

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleClick = (slug) => {
    router.push(`/services/${slug}`);
  };

  const loadMoreCards = () => {
    setVisibleCards((prev) => prev + 6); // Load 6 more cards on each click
  };

  // Since 'item' is already an array, directly use it
  const services = Array.isArray(item) ? item : [];

  return (
    <div className="flex flex-col w-full pb-10">
      <div className="flex flex-row flex-wrap gap-5">
        {services.slice(0, visibleCards).map((service, index) => (
          <div
            key={service.slug}
            className="group cursor-pointer flex justify-between p-5 gap-5 bg-white dark:bg-cardBgDark hover:bg-lightPurpleCard dark:hover:bg-darkHoverColor rounded-2xl w-full lg:w-[48%] 2xl:w-[49%] transition-colors duration-300"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(service.slug)}
          >
            <div className="flex flex-col justify-between flex-grow">
              <div className="flex flex-col gap-2">
                <h3 className="font-grotesk dark:text-white text-xl md:text-4xl font-medium leading-6 md:leading-10 text-neutralBlack">
                  {service.title}
                </h3>
                <p className="text-neutralBlack dark:text-white text-xs md:text-base leading-4 font-normal pb-4 md:pb-0 line-clamp-2">
                  {service.short_desc}
                </p>
              </div>
              <button className="self-start dark:text-white text-left flex items-center gap-2 text-xl leading-6 font-medium mt-2 md:mt-0">
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
                {t("more")}
              </button>
            </div>
            <div className="relative flex-shrink-0 w-[104px] h-[104px] lg:w-[190px] lg:h-[190px] overflow-hidden">
              {/* Base Image */}
              <Image
                src={service.image}
                alt={`${service.title} Card`}
                layout="fill"
                className={`absolute inset-0 transition-opacity duration-500 object-contain ${
                  hoveredCard === index ? "opacity-0" : "opacity-100"
                }`}
              />
              {/* Hovered Image */}
              <Image
                src={
                  service.image_2 && service.image_2 !== "null"
                    ? service.image_2
                    : service.image
                }
                alt={`Hovered ${service.title} Card`}
                layout="fill"
                className={`absolute inset-0 transition-opacity duration-500 object-contain ${
                  hoveredCard === index ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {!isIndexPage && visibleCards < services.length && (
        <div className="mt-5 flex justify-center">
          <button
            onClick={loadMoreCards}
            className="py-3 px-4 text-center rounded-2xl border border-neutralBlack dark:border-white text-lg leading-6 items-center gap-2 hover:bg-neutralBlack hover:text-white dark:text-white transition-colors duration-300 group"
          >
            Daha çox yüklə
          </button>
        </div>
      )}

      {/* Show NavigationButton only on the index page */}
      {isIndexPage && (
        <div className="block lg:hidden w-full mt-5">
          <NavigationButton
            icon={
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
            }
            onClick={() => router.push("/services")}
          >
            Hamısına bax
          </NavigationButton>
        </div>
      )}
    </div>
  );
}

export default CervicesCard;
