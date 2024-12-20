import React from "react";
import Container from "../Container";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

function Hero() {
  return (
    <div className="shadow-sm pb-9 pt-28 dark:bg-bgDark">
      <Container>
        <div className="flex-col  gap-5 lg:flex-row  flex justify-between items-center lg:py-16">
          <div className="flex flex-col justify-between mb-10 lg:mb-0 ">
            <h1 className="font-grotesk text-titleResponsive  md:text-textXl xl:text-huge font-medium leading-10 md:leading-78    text-neutralBlack dark:text-white">
              Virtual dünyaya
              <span className="text-gradient">
                <span className="gradient-text pl-3">keçid</span>
              </span>
            </h1>
          </div>

          <video
            src="/hero/heroVideo.mp4"
            width={542}
            height={402}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-[224px]   md:h-[402px]  md:w-[642px]  lg:h-[402px]  lg:w-[442px]  xl:h-[402px]  xl:w-[542px]"
            // Optional: Add a poster image for better UX during loading
            // poster="/hero/heroPoster.png"
          >
            Your browser does not support the video tag.
          </video>
          {/* <video
  src="/hero/heroVideo.mp4"
  width={542}
  height={402}
  autoPlay
  loop
  muted
  playsInline
  className="object-cover w-[542px] h-[402px] shadow-md transform rotate-[-2deg] skew-y-[2deg] scale-[1.02] rounded-2xl"
/> */}
        </div>

        <div className="hidden md:block flex items-center gap-2 tems-baseline">
          {/* SVG Icons */}
          <div className="flex space-x-4">
            <FiInstagram className="size-6 hover:text-hoverPurple hover:scale-110 transform transition-transform duration-300 cursor-pointer dark:text-white" />
            <FiFacebook className="size-6 hover:text-hoverPurple hover:scale-110 transform transition-transform duration-300 cursor-pointer dark:text-white" />
            <FiLinkedin className="size-6 hover:text-hoverPurple hover:scale-110 transform transition-transform duration-300 cursor-pointer dark:text-white" />
          </div>
        </div>
      </Container>
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(to right, #6a5acd, #197df7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        video {
          border-radius: 16px; /* Optional: Add border-radius if needed */
        }
      `}</style>
    </div>
  );
}

export default Hero;
