import React from "react";
import Customers from "../Customers";

function CustomersSectionAbout() {
  return (
    <div className="py-custom-space">
      <h4 className="text-black dark:text-white font-medium leading-10 md:leading-83 flex items-center justify-center text-4xl md:text-title ">
        Müştərilər
      </h4>

      <Customers />
    </div>
  );
}

export default CustomersSectionAbout;
