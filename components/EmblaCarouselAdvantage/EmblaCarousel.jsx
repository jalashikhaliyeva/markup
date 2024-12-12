import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./embla.module.css";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import sanitizeHtml from "sanitize-html";
import Image from "next/image";

const Slider = ({ data }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    containScroll: "trimSnaps",
    // align: data.length <= 2 ? "center" : "start", // Center align if there are 2 or fewer slides
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [showDots, setShowDots] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    setShowDots(data?.length > 3); // Show dots only if there are more than 3 slides
    emblaApi.on("select", onSelect);
    onSelect(); // Call immediately to set initial state
  }, [emblaApi, onSelect, data?.length]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={`${styles.embla__container} flex  `}>
          {data?.map((slide, index) => (
            <div
              className={`${styles.embla__slide}    flex-[0_0_35%] px-2 `}
              key={slide.id}
            >
              <div className="flex flex-col w-full bg-boxGrayBodyColor rounded-2xl p-6 ">
                <Image
                  width={370}
                  height={290}
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="hidden lg:block mb-4"
                />
                <h5 className="text-lg w-fit rounded-full text-textSecondaryDefault font-normal py-2 px-3 mb-4 bg-lightPurpleCard">
                {slide.btn}
                </h5>
                <h5 className="text-sliderTitle leading-52  text-textSecondaryDefault font-medium pb-4 ">
                  {slide.title}
                </h5>
                <div className="flex items-center group cursor-pointer gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    className="transition-transform duration-300 group-hover:rotate-45 ml-2"
                  >
                    <path
                      d="M16.0037 10.3842L7.39712 18.9908L5.98291 17.5766L14.5895 8.96997H7.00373V6.96997H18.0037V17.97H16.0037V10.3842Z"
                      fill="currentColor"
                    />
                  </svg>
                  <p
                    className={`${styles.border_animation} text-lg font-medium text-grayTextinBox tracking-036 leading-normal`}
                    dangerouslySetInnerHTML={{
                      __html: sanitizeHtml(slide.desc),
                    }}
                  ></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {prevBtnEnabled && (
        <button
          className={`${styles.embla__button} ${styles["embla__button--prev"]}`}
          onClick={scrollPrev}
        >
          <GrFormPrevious className="fill-black text-black text-lg" />
        </button>
      )}

      {nextBtnEnabled && (
        <button
          className={`${styles.embla__button} ${styles["embla__button--next"]}`}
          onClick={scrollNext}
        >
          <MdNavigateNext className="fill-black" />
        </button>
      )}

      {showDots && (
        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`${styles.embla__dot} ${
                index === selectedIndex ? styles["embla__dot--selected"] : ""
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;
