import Image from "next/image";
import React from "react";

function ProjectDetails({ image }) {
  return (
    <div className="flex flex-col gap-4 md:flex-row justify-between w-full mt-5">
      <div className="w-full md:w-[40%] bg-mainGray dark:bg-bgHoverCategory p-5 rounded-lg flex flex-col gap-8 justify-center">
        <div className="flex flex-col gap-2 w-full">
          <h5 className="text-sm md:text-base leading-7 font-medium bg-custom-gradient bg-clip-text text-transparent w-full">
            Müştəri
          </h5>
          <h4 className="text-black dark:text-white text-2xl font-normal">
            Flex jeans
          </h4>
        </div>

        {/* Proqramlaşdırma */}
        <div className="flex flex-col gap-2">
          <h5 className="text-sm md:text-base leading-7 font-medium bg-custom-gradient bg-clip-text text-transparent w-full">
            Proqramlaşdırma
          </h5>
          <h4 className="text-black dark:text-white text-2xl font-normal">
            PHP
          </h4>
        </div>

        {/* Müddət */}
        <div className="flex flex-col gap-2">
          <h5 className="text-sm md:text-base leading-7 font-medium bg-custom-gradient bg-clip-text text-transparent w-full">
            Müddət
          </h5>
          <h4 className="text-black dark:text-white text-2xl font-normal">
            25 iş günü
          </h4>
        </div>

        {/* Xidmət */}
        <div className="flex flex-col gap-2">
          <h5 className="text-sm md:text-base leading-7 font-medium bg-custom-gradient bg-clip-text text-transparent w-full">
            Xidmət
          </h5>
          <h4 className="text-black dark:text-white text-2xl font-normal">
            Websayt hazırlanması
          </h4>
        </div>
      </div>

      <div className="w-full md:w-[58%]">
        <Image
          className="object-contain  rounded-xl"
          src={image}
          width={746}
          height={500}
          alt="About Image"
        />
      </div>
    </div>
  );
}

export default ProjectDetails;
