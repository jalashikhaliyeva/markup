import Image from "next/image";
import React from "react";
import NavigateToPortfolio from "../NavigateToPortfolio";

const colors = [
  "bg-contactPurple",
  "bg-green50",
  "bg-gray50",
  "bg-yellow50",
  "bg-pink50",
  "bg-primary50",
];

const darkColors = [
  "dark:bg-contactPurpleDark",
  "dark:bg-green900",
  "dark:bg-gray800",
  "dark:bg-yellow900",
  "dark:bg-pink900",
  "dark:bg-primary900",
];

const services = [
  {
    image: "/servicesOffer/Image1.png",
    title: "UI/UX Design",
    description:
      "Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim tortor in tellus dictum pellentesque.",
  },
  {
    image: "/servicesOffer/Image2.png",
    title: "Web Development",
    description:
      "Suspendisse potenti. Cras euismod, nisi eget suscipit vehicula, elit ex auctor nulla, nec interdum elit nulla ac justo.",
  },
  {
    image: "/servicesOffer/Image3.png",
    title: "Mobile App Design",
    description:
      "Donec consequat mi in ligula congue, a ullamcorper risus consectetur. Aliquam erat volutpat.",
  },
  {
    image: "/servicesOffer/Image1.png",
    title: "Digital Marketing",
    description:
      "Quisque at vehicula purus, sed pretium nulla. Integer nec velit eu odio tincidunt eleifend.",
  },
  {
    image: "/servicesOffer/Image2.png",
    title: "SEO Optimization",
    description:
      "Vivamus faucibus risus at dui scelerisque, at pellentesque purus tempus. Nam euismod erat at arcu tincidunt pretium.",
  },
  {
    image: "/servicesOffer/Image3.png",
    title: "E-commerce Solutions",
    description:
      "Curabitur vel magna tincidunt, efficitur mi at, mollis justo. Ut nec arcu eget nunc facilisis malesuada.",
  },
];

function ServicesOffer({data}) {
  return (
    <div className="pt-custom-space">
      <h1 className="text-black dark:text-white font-medium leading-10 flex items-center justify-center text-4xl">
        Services we offer
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 ">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-8 ${colors[index]} ${darkColors[index]} w-full rounded-2xl flex flex-col items-center text-center transition-colors duration-300`}
          >
            <Image
              width={148}
              height={148}
              alt={service.title}
              src={service.image}
            />

            <p className="text-black dark:text-white text-2xl font-medium pb-3">
              {service.title}
            </p>
            <p className="text-textGray400 dark:text-gray300 text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <NavigateToPortfolio />
    </div>
  );
}

export default ServicesOffer;
