import React from "react";
import Container from "../Container";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

function Hero() {
  return (
    <div className="shadow-sm pb-9 pt-28">
      <Container>
        <div className="flex justify-between items-center py-16">
          <div className="flex flex-col justify-between ">
            <h1 className="font-grotesk text-huge font-medium leading-78 text-neutralBlack">
              Virtual <br /> dünyaya
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
            className="object-cover w-[542px] h-[402px]"
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

        <div className="flex items-center gap-2 tems-baseline">
          {/* SVG Icons */}
          <div className="flex space-x-4">
            <FiInstagram className="size-6 hover:text-hoverPurple hover:scale-110 transform transition-transform duration-300 cursor-pointer" />
            <FiFacebook className="size-6 hover:text-hoverPurple hover:scale-110 transform transition-transform duration-300 cursor-pointer" />
            <FiLinkedin className="size-6 hover:text-hoverPurple hover:scale-110 transform transition-transform duration-300 cursor-pointer" />
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
