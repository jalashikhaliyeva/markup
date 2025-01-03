import React from "react";
import Container from "../Container";
import FastContact from "../FastContact";
import FastAbout from "../FastAbout";

function InfoSection({ data }) {
  console.log(data, "data inmfo");
 // Destructure footer_text from data
 const { footer_text } = data;

 // Ensure footer_text has at least two items
 const contactInfo = footer_text && footer_text.length > 0 ? footer_text[0] : null;
 const aboutInfo = footer_text && footer_text.length > 1 ? footer_text[1] : null;

  return (
    <div className="dark:bg-bgDarkGray pt-10 lg:pt-0">
      <Container>
        <div className="flex flex-col lg:flex-row gap-5 pb-16 ">
          <FastContact contactInfo={contactInfo} />
          <FastAbout aboutInfo={aboutInfo}  />
        </div> 
      </Container>
    </div>
  );
}

export default InfoSection;
