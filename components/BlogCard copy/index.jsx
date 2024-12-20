import React from "react";
import Image from "next/image";

function BlogCard({ imageSrc, title, date }) {
  return (
    <div className="relative flex flex-col space-y-4 w-[31%] group p-7">
      {/* Image Section */}
      <Image
        src={imageSrc}
        width={403}
        height={384}
        // className="rounded-2xl"
        alt={title}
      />

      {/* Title Section */}
      <h5 className="text-sliderTitle dark:text-white leading-52 text-textSecondaryDefault font-medium pb-4">
        {title}
      </h5>

      {/* Description Section */}
      <h5 className="text-lg dark:text-white leading-6 text-textSecondaryDefault font-medium pb-4">
        Lorem ipsum dolor sit, am
       
      </h5>

      {/* Read More Section */}
      <div className="flex items-center group cursor-pointer gap-2 pb-3 dark:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          className="transition-transform duration-300 group-hover:rotate-45 ml-2"
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

      {/* Border Animation */}
      {/* Top Border */}
{/* Border Animation */}
{/* Top Border */}
<span className="absolute top-0 left-0 w-0 h-[2px] bg-primary transition-all duration-700 group-hover:w-full ease-in-out delay-200"></span>

{/* Right Border */}
<span className="absolute top-0 right-0 w-[2px] h-0 bg-primary transition-all duration-700 group-hover:h-[97%] ease-in-out delay-400"></span>

{/* Bottom Border */}
<span className="absolute bottom-0 right-0 w-0 h-[2px] bg-primary transition-all duration-700 group-hover:w-full ease-in-out delay-600"></span>

{/* Left Border */}
<span className="absolute bottom-0 left-0 w-[2px] h-0 bg-primary transition-all duration-700 group-hover:h-[97%] ease-in-out delay-800"></span>

    </div>
  );
}

export default BlogCard;
