import React from "react";

function SingleTitle({ children }) {
  return (
    <h1 className="text-black dark:text-white font-medium md:leading-83 leading-6 flex items-center justify-center md:text-title text-3xl pb-custom-space">
      {children}
    </h1>
  );
}

export default SingleTitle;
