import React from "react";
import Container from "../Container";
import FastContact from "../FastContact";
import FastAbout from "../FastAbout";

function InfoSection() {
  return (
    <div className="dark:bg-bgDarkGray mt-10 lg:pt-0">
      <Container>
        <div className="flex flex-col lg:flex-row gap-5 pb-16 ">
          <FastContact />
          <FastAbout />
        </div>
      </Container>
    </div>
  );
}

export default InfoSection;
