import React from "react";

function ServiceTitle({ title }) {
  return (
    <div>
      <h1 className="pb-custom-space text-black dark:text-white font-medium md:leading-83 leading-10 flex items-center justify-center md:text-4xl text-3xl md:text-title ">
        {title}
      </h1>
    </div>
  );
}

export default ServiceTitle;
