// components/ServiceAbout.js
import Image from "next/image";
import React from "react";

function ServiceAbout({ description, image }) {
  return (
    <div className="flex flex-col md:flex-row gap-5 pb-custom-space border-b-4 border-b-gradient dark:text-white">
      {/* Image Container */}
      <div className="w-full md:w-1/5 flex-shrink-0">
        <Image
          src={image}
          alt="Service Image"
          width={313}
          height={229}
          className="object-cover w-full h-auto rounded-2xl"
          layout="responsive"
        />
      </div>

      <div className="w-full md:w-4/5">
        <p
          className="text-black text-lg font-medium leading-7 dark:text-white break-words     [&_*]:!text-inherit"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    </div>
  );
}

export default ServiceAbout;
