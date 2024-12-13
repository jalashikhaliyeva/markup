import React from "react";
import CountUp from "react-countup";

function AboutStatistics() {
  return (
    <div className="flex flex-col gap-16">
      <p className="text-black dark:text-white leading-7 font-medium text-xl">
        Digital marketing allows businesses to reach and engage with a wider
        audience, generate leads, drive website traffic, and increase brand
        visibility. It provides measurable results, allows for targeted
        marketing efforts, and enables businesses to adapt and optimize their
        strategies based on data and insights.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-5 md:gap-16 w-full lg:w-[70%]">
        {/* Define a fixed width that can accommodate the largest number */}
        <div className="flex flex-col items-center gap-3 min-w-[150px]">
          <h4 className="text-black dark:text-white font-normal text-4xl md:text-6xl font-mono">
            <CountUp end={400} duration={3} suffix="+" />
          </h4>
          <h5 className="leading-7 text-sm md:lext-base font-medium bg-custom-gradient bg-clip-text text-transparent">
            Projects Completed
          </h5>
        </div>

        <div className="flex flex-col items-center gap-3 min-w-[150px]">
          <h4 className="text-black dark:text-white font-normal text-4xl md:text-6xl font-mono">
            <CountUp end={600} duration={3} suffix="%" />
          </h4>
          <h5 className="text-pink-500 text-sm md:lext-base leading-7 font-medium bg-custom-gradient bg-clip-text text-transparent">
            Customer Satisfaction
          </h5>
        </div>

        <div className="flex flex-col items-center gap-3 min-w-[150px]">
          <h4 className="text-black dark:text-white font-normal text-4xl md:text-6xl font-mono">
            <CountUp end={10} duration={3} separator="," suffix="k" />
          </h4>
          <h5 className="text-pink-500 text-sm md:lext-base leading-7 font-medium bg-custom-gradient bg-clip-text text-transparent">
            Users Engaged
          </h5>
        </div>

        <div className="flex flex-col items-center gap-3 min-w-[150px]">
          <h4 className="text-black dark:text-white font-normal text-4xl md:text-6xl font-mono">
            <CountUp end={200} duration={3} suffix="+" />
          </h4>
          <h5 className="text-pink-500 text-sm md:lext-base leading-7 font-medium bg-custom-gradient bg-clip-text text-transparent">
            Active Campaigns
          </h5>
        </div>
      </div>
    </div>
  );
}

export default AboutStatistics;
