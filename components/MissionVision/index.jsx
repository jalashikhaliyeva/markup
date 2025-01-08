import React from "react";

function MissionVision({ data }) {
  console.log(data, "data mission vision");

  return (
    <div className="relative flex justify-center mt-20 flex-wrap gap-16 md:gap-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-blueCard rounded-2xl p-8 gap-3 w-full md:w-[31%] relative"
        >
          <h5 className="text-lg font-semibold pt-5 text-center">
            {item.title}
          </h5>
          <p className="text-textGray400 text-center">{item.description}</p>

          {item.image && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-20 h-20 bg-blueCard border-4 border-white dark:border-bgDark z-10 flex justify-center items-center">
              <img
                src={item.image}
                alt={`${item.title} icon`}
                className="w-10 h-10 object-contain"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MissionVision;
