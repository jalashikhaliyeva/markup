// components/Customers.js
import React from "react";
import { useRouter } from "next/router";
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel";

function Customers({ slides, singleCarousel = false }) { // 1. Accept the new prop with a default value
  const router = useRouter();
  const isAboutPage = router.pathname === "/about";

  const OPTIONS = { loop: true };

  // Embla carousel auto-scroll configurations
  const autoScrollRight = { playOnInit: true, interval: 6000, speed: 1 };
  const autoScrollLeft = { playOnInit: true, interval: 6000, speed: -1 }; // negative speed for opposite direction

  return (
    <div
      className={`bg-mainGray py-3 md:py-custom-space ${
        isAboutPage ? "dark:bg-black" : "dark:bg-bgDarkGray"
      }`}
    >
      {/* 2. Conditional Rendering */}
      {singleCarousel ? (
        // You can choose which direction to scroll when singleCarousel is true
        // Here, we'll default to scrolling right
        <EmblaCarousel
          slides={slides}
          options={OPTIONS}
          autoScrollOptions={autoScrollRight}
        />
      ) : (
        <>
          <EmblaCarousel
            slides={slides}
            options={OPTIONS}
            autoScrollOptions={autoScrollRight}
          />
          <EmblaCarousel
            slides={slides}
            options={OPTIONS}
            autoScrollOptions={autoScrollLeft}
          />
        </>
      )}
    </div>
  );
}

export default Customers;
