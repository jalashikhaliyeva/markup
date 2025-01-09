// components/BlogCard.js

import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function BlogCard({ imageSrc, title, date, slug, desc }) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/blogs/${slug}`);
  };

  return (
    <div
      onClick={handleNavigate}
      tabIndex="0"
      onKeyPress={(e) => {
        if (e.key === "Enter") handleNavigate();
      }}
      role="button"
      aria-label={`Read more about ${title}`}
      className="relative group cursor-pointer overflow-hidden rounded-xl hover:border hover:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
    >
      {/* Inner Card */}
      <div className="relative z-10 rounded-xl bg-white dark:bg-bgDark flex flex-col h-full">
        <div className="relative w-full overflow-hidden rounded-t-xl transition-transform duration-300 group-hover:-translate-y-4">
          <Image
            src={imageSrc}
            width={403}
            height={384}
            alt={title}
            className="w-full h-auto object-cover transition-transform duration-300"
            priority={false}
            placeholder="blur"
            blurDataURL="/path-to-blur-image.jpg"
          />
        </div>

        {/* Date Section - Always takes up space, hidden by opacity */}
        <div className=" px-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-categoryBtn w-24 sm:w-28 text-lg rounded-2xl mx-4 py-1">
          {date}
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 p-4">
          <h5 className="text-xl leading-[44px] md:text-sliderTitle dark:text-white text-textSecondaryDefault font-medium pb-2 line-clamp-2">
            {title}
          </h5>

          <p className="text-md md:text-lg dark:text-white text-textGray font-medium pb-4">
            {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. */}
            {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. */}
            {desc}
          </p>
          <div className="flex items-center gap-2 dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              className="transition-transform duration-300 group-hover:rotate-45"
            >
              <path
                d="M16.0037 10.3842L7.39712 18.9908L5.98291 17.5766L14.5895 8.96997H7.00373V6.96997H18.0037V17.97H16.0037V10.3842Z"
                fill="currentColor"
              />
            </svg>
            <p className="text-lg font-medium text-grayTextinBox tracking-036 leading-normal">
              Ətraflı
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
