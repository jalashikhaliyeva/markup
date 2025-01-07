import React from "react";
import { useTranslation } from "react-i18next";
import EmblaLinks from "../EmblaLinks/EmblaCarousel";

function UsefulLinks({slides}) {
  const { t } = useTranslation();
  const OPTIONS = { loop: true };

  // const slides = [
  //   { text: "Markup", href: "https://markup.az/" },
  //   { text: "Markup", href: "https://markup.az/" },
  //   { text: "Markup", href: "https://markup.az/" },
  //   { text: "Markup", href: "https://markup.az/" },
  //   { text: "Markup", href: "https://markup.az/" },
  //   { text: "Markup", href: "https://markup.az/" },
  //   { text: "Google", href: "https://www.google.com/" },
  //   { text: "Facebook", href: "https://www.facebook.com/" },
  //   { text: "Twitter", href: "https://twitter.com/" },
  //   { text: "LinkedIn", href: "https://www.linkedin.com/" },
  //   { text: "GitHub", href: "https://github.com/" },
  //   // Add more external links as needed
  // ];

  // Embla carousel auto-scroll configurations
  const autoScrollRight = { playOnInit: true, interval: 6000, speed: 0.7 };

  // Splitting the text
  const usefulLinksText = t('nav.usefulLinks') || ""; // Fallback in case translation is missing
  const words = usefulLinksText.split(" ");
  const lastWord = words.pop();
  const remainingText = words.join(" ");

  return (
    <div className="dark:bg-bgDark pb-6 hidden md:block ">
      <h6 className="text-black dark:bg-bgDark dark:text-white text-lg font-medium md:leading-83 leading-6 flex items-center justify-center">
        {remainingText}{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-500 pl-2">
          {lastWord}
        </span>
      </h6>
      <EmblaLinks
        slides={slides}
        options={OPTIONS}
        autoScrollOptions={autoScrollRight}
      />
    </div>
  );
}

export default UsefulLinks;
