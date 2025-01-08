import React from "react";

function MissionVision() {
  return (
    <div className="relative flex justify-center mt-20">
      {/* Rectangular Card */}
      <div className="bg-blueCard rounded-2xl p-8 gap-3 w-[31%]">
        <h5 className="text-lg font-semibold pt-5 text-center">Missiyamız</h5>
        <p className="text-textGray400 text-center">
          Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi
          lacus magna.
        </p>
      </div>

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-20 h-20 bg-blueCard border-4 border-white dark:border-bgDark z-10  flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.84092 17.4029C5.25728 22.8256 5.2833 29.0798 6.09543 34.4805C6.5448 37.4688 8.9837 39.7597 11.9943 40.0214L15.1406 40.2949C21.7011 40.8652 28.2987 40.8652 34.8592 40.2949L38.0055 40.0214C41.0161 39.7597 43.455 37.4688 43.9044 34.4805C44.7165 29.0797 44.7426 22.826 44.1589 17.4033C44.0835 16.7746 43.9986 16.1468 43.9044 15.52C43.455 12.5317 41.0161 10.2408 38.0055 9.97906L34.8592 9.70555C28.2987 9.13526 21.7011 9.13526 15.1406 9.70555L11.9943 9.97906C8.9837 10.2408 6.5448 12.5317 6.09543 15.52C6.0012 16.1467 5.91636 16.7744 5.84092 17.4029ZM15.4112 12.8188C21.7916 12.2642 28.2082 12.2642 34.5886 12.8188L37.7349 13.0923C39.3064 13.2289 40.5795 14.4248 40.8141 15.9847C40.8385 16.1467 40.8622 16.3088 40.8852 16.4709L29.2998 22.9072C26.6256 24.3929 23.374 24.3929 20.6999 22.9072L9.11458 16.471C9.13762 16.3088 9.16132 16.1467 9.18569 15.9847C9.42026 14.4248 10.6934 13.2289 12.2649 13.0923L15.4112 12.8188ZM41.2676 19.8333C41.6717 24.5578 41.5206 29.3179 40.8141 34.0158C40.5795 35.5757 39.3064 36.7715 37.7349 36.9081L34.5886 37.1816C28.2082 37.7363 21.7916 37.7363 15.4112 37.1816L12.2649 36.9081C10.6934 36.7715 9.42026 35.5757 9.18569 34.0157C8.47925 29.3179 8.32808 24.5579 8.73218 19.8334L19.1822 25.639C22.8002 27.649 27.1994 27.649 30.8174 25.639L41.2676 19.8333Z"
            fill="url(#paint0_linear_3145_4103)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3145_4103"
              x1="5.43945"
              y1="24.5506"
              x2="44.5429"
              y2="25.9418"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#514DFB" />
              <stop offset="1" stop-color="#5945FB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default MissionVision;
