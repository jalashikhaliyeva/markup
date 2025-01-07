import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router"; // Import useRouter
import useEmblaCarousel from "embla-carousel-react";
import styles from "./embla.module.css";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import sanitizeHtml from "sanitize-html";
import Image from "next/image";

const Slider = ({ data , type }) => {
  console.log(data, "data slider");

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    containScroll: "trimSnaps",
    // align: data.length <= 2 ? "center" : "start", // Optional alignment
  });

  const router = useRouter(); // Initialize the router

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
    onSelect(); // Initialize state
  }, [emblaApi, onSelect, data?.length]);

  const handleCardClick = (slug) => {
    // Encode the item name to make it URL-safe
    // const encodedName = encodeURIComponent(itemName);

    // Determine the base path based on the type prop
    let basePath = "";
    if (type === "blog") {
      basePath = "/blogs";
    } else if (type === "project") {
      basePath = "/projects";
    } else {
      console.warn(`Unknown type "${type}" passed to Slider component.`);
      return;
    }

    router.push(`${basePath}/${slug}`);
  };


  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={`${styles.embla__container} flex`}>
          {data?.map((slide, index) => (
            <div
              className={`${styles.embla__slide} lg:flex-[0_0_35%] px-2`}
              key={slide.id}
            >
              {/* 
                Apply the 'group' class here to make the entire card a hover target.
                This ensures that hovering anywhere on the card affects the child SVG.
                Also, add an onClick handler and cursor-pointer for better UX.
              */}
              <div
                className="group flex flex-col w-full bg-boxGrayBodyColor rounded-2xl transition-transform duration-300 cursor-pointer"
                onClick={() => handleCardClick(slide.slug)} // Add onClick handler
              >
                <Image
                  width={370}
                  height={300}
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="mb-4 object-cover rounded-lg h-[300px]"
                  quality={100}
                />

                <div className="flex flex-wrap mt-2 gap-2">
                  {slide.category?.map((cat) => (
                    <span
                      key={cat.slug}
                      className="text-sm w-fit rounded-full text-textSecondaryDefault font-normal py-2 px-3 mb-4 bg-lightPurpleCard"
                    >
                      {cat.title}
                    </span>
                  ))}
                </div>
                <h5 className="text-3xl leading-52 text-textSecondaryDefault font-medium pb-2 dark:text-white line-clamp-2">
                  {slide.title}
                </h5>
                <p className="text-textGray leading-6 pb-3 dark:text-gray-400 ">
                  {slide.short_desc}
                </p>
                <div className="flex items-center cursor-pointer gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    className="transform transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <path
                      d="M16.0037 10.3842L7.39712 18.9908L5.98291 17.5766L14.5895 8.96997H7.00373V6.96997H18.0037V17.97H16.0037V10.3842Z"
                      className="fill-black dark:fill-white"
                    />
                  </svg>
                  <p
                    className={`${styles.border_animation} text-lg font-medium text-grayTextinBox tracking-036 leading-normal dark:text-white`}
                    // dangerouslySetInnerHTML={{
                    //   __html: sanitizeHtml(slide.desc),
                    // }}
                  >
                    Ətraflı
                  </p>
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
          aria-label="Previous Slide"
        >
          <GrFormPrevious className="fill-black text-black text-lg" />
        </button>
      )}

      {nextBtnEnabled && (
        <button
          className={`${styles.embla__button} ${styles["embla__button--next"]}`}
          onClick={scrollNext}
          aria-label="Next Slide"
        >
          <MdNavigateNext className="fill-black text-black text-lg" />
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
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;
