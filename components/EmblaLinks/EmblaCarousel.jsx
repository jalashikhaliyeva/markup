import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useNavigate } from "react-router-dom"; // import useNavigate
import styles from "./embla.module.css";
import { FaLink } from "react-icons/fa";
import { useRouter } from "next/router";

const EmblaLinks = ({ slides, options, autoScrollOptions }) => {
  const [emblaRef] = useEmblaCarousel(options, [AutoScroll(autoScrollOptions)]);
  const [isPlaying, setIsPlaying] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsPlaying(true);
  }, []);

  // Updated click handler to navigate internally using the slide's slug
  const handleClick = (slug) => {
    router.push(`useful-links/${slug}`);
  };

  return (
    <div className={`${styles.embla} dark:bg-darkHeader`}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, index) => (
            <div 
              className={styles.embla__slide} 
              key={index}
              onClick={() => handleClick(slide.slug)} // call handleClick with slide.slug
              style={{ cursor: "pointer" }} // indicate clickable area
            >
              <div className={styles.box}>
                <div className={styles.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M13.0605 8.81141L14.4747 10.2256C17.2084 12.9593 17.2084 17.3914 14.4747 20.1251L14.1212 20.4786C11.3875 23.2123 6.95531 23.2123 4.22164 20.4786C1.48797 17.745 1.48797 13.3128 4.22164 10.5792L5.63586 11.9934C3.68324 13.946 3.68324 17.1118 5.63586 19.0644C7.58848 21.017 10.7543 21.017 12.707 19.0644L13.0605 18.7109C15.0131 16.7582 15.0131 13.5924 13.0605 11.6398L11.6463 10.2256L13.0605 8.81141ZM19.778 14.8218L18.3638 13.4076C20.3164 11.4549 20.3164 8.28916 18.3638 6.33654C16.4112 4.38392 13.2454 4.38392 11.2928 6.33654L10.9392 6.69009C8.98654 8.64271 8.98654 11.8085 10.9392 13.7611L12.3534 15.1753L10.9392 16.5895L9.52494 15.1753C6.79127 12.4417 6.79127 8.00955 9.52494 5.27588L9.8785 4.92232C12.6122 2.18865 17.0444 2.18865 19.778 4.92232C22.5117 7.65599 22.5117 12.0881 19.778 14.8218Z"
                      fill="#8B8DA4"
                    />
                  </svg>
                </div>
                <div className={`${styles.text} dark:text-white`}>
                  {slide.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaLinks;
