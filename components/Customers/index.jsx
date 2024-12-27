import React from "react";
import { useRouter } from "next/router"; // Import useRouter for route checking
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel";

function Customers({slides}) {
  const router = useRouter(); // Get the router object
  const isAboutPage = router.pathname === "/about"; // Check if the current page is the About page

  const OPTIONS = { loop: true };

  // Static data for slides
  

  // Embla carousel auto-scroll configurations
  const autoScrollRight = { playOnInit: true, interval: 6000, speed: 1 };
  const autoScrollLeft = { playOnInit: true, interval: 6000, speed: -1 }; // negative speed for opposite direction

  return (
    <div
      className={`bg-mainGray py-3 md:py-custom-space ${
        isAboutPage ? "dark:bg-black" : "dark:bg-bgDarkGray"
      }`}
    >
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
    </div>
  );
}

export default Customers;
