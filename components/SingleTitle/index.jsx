import React from "react";

function SingleTitle({ children }) {
  return (
    <h1 className="text-black dark:text-white font-medium leading-83 flex items-center justify-center text-title py-custom-space">
      {children}
    </h1>
  );
}

export default SingleTitle;
