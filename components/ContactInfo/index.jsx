import React from "react";
import Container from "@/components/Container";
import NavigationTitle from "@/components/NavigationTitle";
import Image from "next/image";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
function ContactInfo() {
  return (
    <div className="flex flex-col">
      <NavigationTitle>Bizimlə əlaqə</NavigationTitle>
      <Image
        src="/contact-img.png"
        width={411}
        height={311}
        alt="contact image"
        className="flex items-center justify-center"
      />

      <div className="flex flex-col md:flex-row items-center gap-3">
        <div className="flex gap-5 bg-white dark:bg-bgHoverCategory  p-3 rounded-2xl ">
          <div className="p-4 bg-[#ECEDFE] rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.73838 11.1376C3.36486 14.6081 3.38151 18.6107 3.90127 22.0672C4.18887 23.9797 5.74976 25.4459 7.67652 25.6134L9.69016 25.7884C13.8889 26.1534 18.1114 26.1534 22.3101 25.7884L24.3237 25.6134C26.2505 25.4459 27.8114 23.9797 28.099 22.0672C28.6188 18.6107 28.6354 14.6083 28.2619 11.1378C28.2136 10.7354 28.1593 10.3336 28.099 9.93249C27.8114 8.01996 26.2505 6.55377 24.3237 6.38628L22.3101 6.21124C18.1114 5.84625 13.8889 5.84625 9.69016 6.21124L7.67652 6.38628C5.74976 6.55377 4.18887 8.01997 3.90127 9.93249C3.84096 10.3335 3.78666 10.7353 3.73838 11.1376ZM9.86337 8.20373C13.9468 7.84876 18.0534 7.84876 22.1369 8.20373L24.1505 8.37877C25.1563 8.4662 25.9711 9.23156 26.1212 10.2299C26.1368 10.3336 26.152 10.4373 26.1667 10.5411L18.7521 14.6603C17.0406 15.6111 14.9596 15.6111 13.2481 14.6603L5.83352 10.5411C5.84827 10.4373 5.86344 10.3336 5.87903 10.2299C6.02916 9.23155 6.84395 8.4662 7.84972 8.37877L9.86337 8.20373ZM26.4115 12.693C26.6701 15.7167 26.5734 18.7632 26.1212 21.7698C25.9711 22.7681 25.1563 23.5335 24.1505 23.6209L22.1369 23.7959C18.0534 24.1509 13.9468 24.1509 9.86337 23.7959L7.84972 23.6209C6.84395 23.5335 6.02916 22.7681 5.87903 21.7698C5.42692 18.7632 5.33017 15.7167 5.58879 12.6931L12.2768 16.4086C14.5923 17.695 17.4078 17.695 19.7234 16.4086L26.4115 12.693Z"
                fill="url(#paint0_linear_2665_3071)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2665_3071"
                  x1="3.48145"
                  y1="15.7121"
                  x2="28.5076"
                  y2="16.6024"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#514DFB" />
                  <stop offset="1" stop-color="#5945FB" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="flex flex-col items-start justify-center">
            <h5 className="text-gray-500 text-base uppercase leading-3 font-medium">
              Email us
            </h5>

            <p className="text-black dark:text-white leading-8 font-base font-medium">
              info@markup.com
            </p>
          </div>
        </div>
        <div className="flex gap-5 bg-white  dark:bg-bgHoverCategory  p-3 rounded-2xl ">
          <div className="p-4 bg-[#ECEDFE]  rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.7873 13.1419C10.1704 18.3311 14.411 22.4566 19.6827 24.6921L19.6994 24.6991L20.7178 25.1531C22.0146 25.7309 23.5389 25.3205 24.3704 24.1697L26.0696 21.8181C26.1733 21.6744 26.1466 21.4747 26.0087 21.3634L23.0423 18.9704C22.8949 18.8514 22.678 18.8791 22.5652 19.0313L21.4108 20.5892C21.1304 20.9675 20.624 21.099 20.195 20.9048C16.2532 19.1209 13.0855 15.9533 11.3016 12.0114C11.1075 11.5824 11.2389 11.0761 11.6173 10.7957L13.1751 9.64122C13.3273 9.52841 13.355 9.31157 13.2361 9.16411L10.8427 6.19739C10.7315 6.0595 10.5318 6.03272 10.3882 6.13641L8.02376 7.84329C6.86538 8.67954 6.45743 10.2167 7.04871 11.5173L7.7865 13.1402C7.78677 13.1407 7.78703 13.1413 7.7873 13.1419ZM18.8935 26.5298C13.1655 24.0984 8.55832 19.6143 5.96893 13.9747L5.96737 13.9713L5.22803 12.345C4.24257 10.1773 4.92247 7.61545 6.85311 6.22169L9.2175 4.51482C10.223 3.78894 11.6206 3.97641 12.3993 4.9416L14.7927 7.90833C15.6254 8.94056 15.4315 10.4584 14.3659 11.2481L13.4733 11.9096C14.9811 14.8355 17.371 17.2253 20.2968 18.7332L20.9584 17.8405C21.748 16.775 23.2659 16.581 24.2981 17.4138L27.2644 19.8068C28.2299 20.5857 28.4172 21.9839 27.6907 22.9894L25.9915 25.341C24.6057 27.259 22.0652 27.9429 19.9038 26.98L18.8935 26.5298Z"
                fill="url(#paint0_linear_2665_3077)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2665_3077"
                  x1="4.7793"
                  y1="15.4095"
                  x2="28.1328"
                  y2="16.0777"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#514DFB" />
                  <stop offset="1" stop-color="#5945FB" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="flex flex-col items-start justify-center">
            <h5 className="text-gray-500 text-base uppercase leading-3 font-medium">
              Message us
            </h5>

            <p className="text-black dark:text-white  leading-8 font-base font-medium">
              +994 99 999 99 99
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col py-custom-space">
        <div className="flex items-center gap-2">
          <hr className="w-[30px] h-[3px] rounded-xl text-black bg-black dark:bg-white dark:text-white"></hr>
          <p className="text-black dark:text-white font-medium leading-6 text-base">
            Connect with us:
          </p>
        </div>

        <div className="flex space-x-4 items-center pt-4">
          <FiInstagram className="size-6 hover:text-hoverPurple hover:scale-110 transform transition-transform duration-300 cursor-pointer dark:text-white" />
          <FiFacebook className="size-6 hover:text-hoverPurple hover:scale-110 transform transition-transform duration-300 cursor-pointer dark:text-white" />
          <FiLinkedin className="size-6 hover:text-hoverPurple hover:scale-110 transform transition-transform duration-300 cursor-pointer dark:text-white" />
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
