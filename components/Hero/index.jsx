import React, { useMemo } from "react";
import DOMPurify from "isomorphic-dompurify";
import Container from "../Container";
import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";

function Hero({ title, videoUrl }) {
  const { mainText, lastWord } = useMemo(() => {
    // 1) Replace all HTML tags with a space
    const titleWithSpaces = title.replace(/<[^>]*>/g, " ");

    // 2) Sanitize + remove any extra whitespace
    const strippedTitle = DOMPurify.sanitize(titleWithSpaces, { ALLOWED_TAGS: [] })
      .replace(/\s+/g, " ")
      .trim();

    // 3) Split into words and extract the last word
    const words = strippedTitle.split(" ");
    const last = words.pop() || "";

    return {
      mainText: words.join(" "),
      lastWord: last,
    };
  }, [title]);

  return (
    <div className="shadow-sm pb-9 pt-28 dark:bg-bgDark">
      <Container>
        <div className="flex-col gap-5 lg:flex-row flex justify-between items-center lg:py-16">
          <div className="flex flex-col justify-between mb-10 lg:mb-0">
            <h1 className="font-grotesk text-titleResponsive md:text-textXl xl:text-huge font-medium leading-10 md:leading-78 text-neutralBlack dark:text-white">
              {mainText}
              <span className="pl-3 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                {lastWord}
              </span>
            </h1>
          </div>

          <video
            src={videoUrl}
            width={542}
            height={402}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-[224px] md:h-[402px] md:w-[642px] lg:h-[402px] lg:w-[442px] xl:h-[402px] xl:w-[542px] rounded-2xl"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="hidden md:flex items-center gap-2 items-baseline md:pt-10">
          <div className="flex space-x-4">
            <FiInstagram className="size-6 hover:text-hoverPurple hover:scale-110 transform transition-transform duration-300 cursor-pointer dark:text-white" />
            <FiFacebook className="size-6 hover:text-hoverPurple hover:scale-110 transform transition-transform duration-300 cursor-pointer dark:text-white" />
            <FiLinkedin className="size-6 hover:text-hoverPurple hover:scale-110 transform transition-transform duration-300 cursor-pointer dark:text-white" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
