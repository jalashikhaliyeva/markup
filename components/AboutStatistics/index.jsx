import React from "react";
import CountUp from "react-countup";

/**
 * Helper function to split out the integer portion and suffix
 * from strings like "400+", "600%", "10k", etc.
 */
function parseCountString(countString) {
  let end = 0;
  let suffix = "";

  // Remove all non-digit characters temporarily to parse the number
  const numericValue = parseInt(countString.replace(/\D+/g, ""), 10) || 0;

  // Check how the string ends to figure out suffix
  if (countString.endsWith("+")) {
    end = numericValue;
    suffix = "+";
  } else if (countString.endsWith("%")) {
    end = numericValue;
    suffix = "%";
  } else if (countString.toLowerCase().endsWith("k")) {
    end = numericValue;
    suffix = "k";
  } else {
    // No special suffix
    end = numericValue;
  }

  return { end, suffix };
}

function AboutStatistics({ desc, count }) {
  return (
    <div className="flex flex-col gap-16">
  <p
  className="
    text-black 
    dark:text-white 
    leading-7 
    font-medium 
    text-xl 
    [&_*]:!text-inherit
  "
  dangerouslySetInnerHTML={{ __html: desc }}
/>

      {/* Dynamically render each counter item here */}
      <div className="flex flex-wrap items-center gap-5 md:gap-16 w-full lg:w-[70%]">
        {count.map((item, index) => {
          const { title, number } = item;
          const { end, suffix } = parseCountString(number);

          return (
            <div
              key={index}
              className="flex flex-col items-center gap-3 min-w-[150px]"
            >
              <h4 className="text-black dark:text-white font-normal text-4xl md:text-6xl font-mono">
                <CountUp end={end} duration={3} suffix={suffix} />
              </h4>
              <h5 className="leading-7 text-sm md:text-base font-medium bg-custom-gradient bg-clip-text text-transparent">
                {title}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutStatistics;
