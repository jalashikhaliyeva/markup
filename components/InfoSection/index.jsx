import React from "react";
import Container from "../Container";
import FastContact from "../FastContact";
import FastAbout from "../FastAbout";

function InfoSection() {
  return (
    <>
      <Container>
        <div className="flex gap-5 pb-16">
          <FastContact />
          <FastAbout />
        </div>
      </Container>
    </>
  );
}

export default InfoSection;
