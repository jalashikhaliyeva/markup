import React from "react";
import Customers from "../Customers";

function CustomersSectionAbout() {
  return (
    <div className="py-custom-space">
      <h4 className="text-black font-medium leading-83 flex items-center justify-center text-title ">
        Müştərilər
      </h4>

      <Customers />
    </div>
  );
}

export default CustomersSectionAbout;
