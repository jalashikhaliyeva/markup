import React from "react";

function ShortDescription({desc}) {
  return (
    <>
      <p className="text-textGray text-lg leading-6 pt-5 lg:pt-0">
      {desc}
      </p>
    </>
  );
}

export default ShortDescription;
