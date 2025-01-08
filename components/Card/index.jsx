// Card.jsx
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./style.module.css";

function Card({ data, type }) {
  const router = useRouter();

  const handleCardClick = (slug) => {
    let basePath = "";
    if (type === "blog") {
      basePath = "/blogs";
    } else if (type === "project") {
      basePath = "/projects";
    } else {
      console.warn(`Unknown type "${type}" passed to Card component.`);
      return;
    }

    router.push(`${basePath}/${slug}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
      {data?.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.card} group border hover:border-purple-400 transition-colors duration-300 ease-in-out flex flex-col w-full bg-mainGray rounded-2xl cursor-pointer`}
          onClick={() => handleCardClick(slide.slug)}
        >
          <Image
            width={370}
            height={300}
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="mb-4 object-cover rounded-t-lg h-[300px] w-full"
            quality={100}
          />

          <div className="flex flex-wrap mt-2 gap-2 px-4">
            {slide.category?.map((cat) => (
              <span
                key={cat.slug}
                className="text-sm w-fit rounded-full text-textSecondaryDefault font-normal py-1 px-3 bg-lightPurpleCard"
              >
                {cat.title}
              </span>
            ))}
          </div>

          <div className="px-4 flex-grow">
            <h5 className="text-2xl leading-7 text-textSecondaryDefault font-medium pb-2 dark:text-white line-clamp-2">
              {slide.title}
            </h5>
            <p className="text-textGray leading-6 pb-3 dark:text-gray-400 ">
              {slide.short_desc}
            </p>
          </div>

          <div className="flex items-center cursor-pointer gap-2 px-4 pb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              className="transform transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              <path
                d="M16.0037 10.3842L7.39712 18.9908L5.98291 17.5766L14.5895 8.96997H7.00373V6.96997H18.0037V17.97H16.0037V10.3842Z"
                className="fill-black dark:fill-white"
              />
            </svg>
            <p className="text-lg font-medium text-grayTextinBox tracking-wider leading-normal dark:text-white">
              Ətraflı
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
