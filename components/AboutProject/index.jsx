import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

function AboutProject({description ,image}) {
  return (
    <div className="bg-white dark:bg-black p-5 flex flex-col m-auto items-center lg:flex-row rounded-xl my-custom-space gap-8">
      <Image
        className="object-contain w-[40%]"
        src={image}
        width={546}
        height={492}
        alt="About Image"
      />

      <div className="flex flex-col gap-custom-space">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 pb-custom-space border-b-gradient">
          {/* Müştəri */}
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

        {/* Description */}
        <p className="text-black dark:text-white leading-7 font-normal text-base lg:text-lg">
        {description}
        </p>
      </div>
    </div>
  );
}

export default AboutProject;
