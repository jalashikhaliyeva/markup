import React from "react";

function AboutStatistics() {
  return (
    <div className="flex flex-col gap-16">
      <p className="text-black leading-7 font-medium text-xl">
        Digital marketing allows businesses to reach and engage with a wider
        audience, generate leads, drive website traffic, and increase brand
        visibility. It provides measurable results, allows for targeted
        marketing efforts, and enables businesses to adapt and optimize their
        strategies based on data and insights.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-16 w-[70%]">
        <div className="flex flex-col gap-3">
          <h4 className="text-black font-normal text-6xl">400+</h4>
          <h5 className="leading-7 font-medium  bg-custom-gradient bg-clip-text text-transparent">
            Projects completed
          </h5>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-black font-normal text-6xl">600%</h4>
          <h5 className="text-pink-500 leading-7 font-medium  bg-custom-gradient bg-clip-text text-transparent">
            Projects completed
          </h5>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-black font-normal text-6xl">10k</h4>
          <h5 className="text-pink-500 leading-7 font-medium  bg-custom-gradient bg-clip-text text-transparent">
            Projects completed
          </h5>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-black font-normal text-6xl">200+</h4>
          <h5 className="text-pink-500 leading-7 font-medium  bg-custom-gradient bg-clip-text text-transparent">
            Projects completed
          </h5>
        </div>
      </div>
    </div>
  );
}

export default AboutStatistics;
