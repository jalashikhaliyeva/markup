import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function BlogCard({ imageSrc, title, date, slug }) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/blogs/${slug}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className="relative bg-white flex flex-col w-[31%] group cursor-pointer overflow-hidden p-0"
    >
      {/* Image Section */}
      <div className="relative w-full">
        <Image 
          src={imageSrc} 
          width={403} 
          height={384} 
          alt={title} 
          className="w-full h-auto object-cover block" 
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-4">
        {/* Title Section */}
        <h5 className="text-sliderTitle dark:text-white text-textSecondaryDefault font-medium pb-2">
          {title}
        </h5>

        {/* Description Section */}
        <p className="text-lg dark:text-white text-textSecondaryDefault font-medium pb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>

        {/* Read More Section */}
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

      {/* Border Animation */}
      {/* Left Border */}
      <span className="absolute top-0 left-0 w-[2px] h-0 bg-primary transition-all duration-700 group-hover:h-full ease-in-out delay-200 z-10"></span>

      {/* Top Border */}
      <span className="absolute top-0 left-0 w-0 h-[2px] bg-primary transition-all duration-700 group-hover:w-full ease-in-out delay-400 z-10"></span>

      {/* Right Border */}
      <span className="absolute top-0 right-0 w-[2px] h-0 bg-primary transition-all duration-700 group-hover:h-full ease-in-out delay-600 z-10"></span>

      {/* Bottom Border */}
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-700 group-hover:w-full ease-in-out delay-800 z-10"></span>
    </div>
  );
}

export default BlogCard;
