import React from "react";

function AboutProject({ description }) {
  return (
    <>
      <p
        className="text-black dark:text-white text-xl py-custom-space font-normal"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </>
  );
}

export default AboutProject;
