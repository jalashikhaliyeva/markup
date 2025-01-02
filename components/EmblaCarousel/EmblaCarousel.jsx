import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import styles from "./embla.module.css";
import Image from "next/image";

const EmblaCarousel = ({ slides, options, autoScrollOptions }) => {
  const [emblaRef] = useEmblaCarousel(options, [AutoScroll(autoScrollOptions)]);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    setIsPlaying(true);
  }, []);
  const handleSlideClick = (link) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides?.map((slide, index) => (
            <div   onClick={() => handleSlideClick(slide.link)} className={styles.embla__slide} key={index}>
              <div className={styles.box}>
                <Image
                  width={55}
                  height={55}
                  src={slide?.image}
                  alt="Banner Logo"
                  style={{ width: "105px", height: "65px", objectFit: "contain" }}
                />
                <div className={styles.text}>{slide.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
