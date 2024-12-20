import React from "react";
import Container from "../Container";
import Slider from "../EmblaCarouselAdvantage/EmblaCarousel";
import NavigationTitle from "../NavigationTitle";

function OurAdvantagesSection({ data }) {
  return (
    <div>
      {/* <Container> */}
        {/* <h2
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          className="pt-14 pb-10 font-gilroy text-textSecondaryDefault text-2xl md:text-3xl font-medium"
        >
          Üstünlüklərimiz
        </h2> */}

        <Slider data={data} />
      {/* </Container> */}
    </div>
  );
}

export default OurAdvantagesSection;
