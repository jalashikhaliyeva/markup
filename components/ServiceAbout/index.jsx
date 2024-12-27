import Image from "next/image";
import React from "react";

function ServiceAbout({ description, image }) {
  return (
    <div className="flex gap-5 pb-custom-space  border-b-4 border-b-gradient dark:text-white flex-col md:flex-row">
      <Image
        src={image}
        alt={description}
        width={313}
        height={229}
        className="object-cover w-full lg:w-[33%] rounded-2xl"
      />

      <p
        className="text-black text-lg font-medium leading-7 dark:text-white"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      {/* <p className="text-black text-lg font-medium leading-7 dark:text-white">{description}</p> */}
    </div>
  );
}

export default ServiceAbout;
