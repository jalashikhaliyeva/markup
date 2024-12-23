// components/LoadingAnimation.js
import React from "react";

const LoadingAnimation = () => {
  return (
    <div
      className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-white dark:bg-bgDark z-50"
      aria-hidden="true" // Ensures accessibility by hiding it from screen readers
    >
      {/* Light Mode Loading Video */}
      <video
        src="/loading-gif/loading-light.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="block dark:hidden w-1/2 max-w-sm"
      >
        Your browser does not support the video tag.
      </video>

      {/* Dark Mode Loading Video */}
      <video
        src="/loading-gif/loading-dark.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="hidden dark:block w-1/2 max-w-sm"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LoadingAnimation;
