import React from "react";
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel";
import Container from "../Container";
import NavigationTitle from "../NavigationTitle";

function Customers() {
  const OPTIONS = { loop: true };

  // Static data for slides
  const slides = [
    { imageSrc: "/logo/markup-logo.png" },
    { imageSrc: "/logo/markup-logo.png" },
    { imageSrc: "/logo/markup-logo.png" },
    { imageSrc: "/logo/markup-logo.png" },
    { imageSrc: "/logo/markup-logo.png" },
    { imageSrc: "/logo/markup-logo.png" },
    { imageSrc: "/logo/markup-logo.png" },
    { imageSrc: "/logo/markup-logo.png" },
    { imageSrc: "/logo/markup-logo.png" },
    { imageSrc: "/logo/markup-logo.png" },
    { imageSrc: "/logo/markup-logo.png" },
    { imageSrc: "/logo/markup-logo.png" },
    { imageSrc: "/logo/markup-logo.png" },
    { imageSrc: "/logo/markup-logo.png" },
    { imageSrc: "/logo/markup-logo.png" },
  ];

  // Embla carousel auto-scroll configurations
  const autoScrollRight = { playOnInit: true, interval: 6000, speed: 1 };
  const autoScrollLeft = { playOnInit: true, interval: 6000, speed: -1 }; // negative speed for opposite direction

  return (
    <div className="bg-mainGray py-custom-space">
      <Container>
        <NavigationTitle>Müştərilər</NavigationTitle>
        <p className="text-textGray text-lg leading-6 pb-custom-space">
          Böyük ideyalar, güclü tərəfdaşlıqlar
        </p>
      </Container>
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
