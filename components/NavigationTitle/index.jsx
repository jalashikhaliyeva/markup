import React from "react";

function NavigationTitle({children}) {
  return (
    <h2 className="font-grotesk font-medium leading-9 lg:leading-83 text-neutralBlack dark:text-white text-3xl  md:text-title">
   {children}
    </h2>
  );
}

export default NavigationTitle;
