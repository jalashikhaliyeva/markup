import React from "react";

function NavigationButton({ children, icon }) {
  return (
    <button className="py-3 px-4 w-full text-center flex justify-center rounded-2xl border border-neutralBlack dark:border-white text-lg leading-6  items-center gap-2 hover:bg-neutralBlack hover:text-white dark:text-white transition-colors duration-300 group">
      {children}
      {icon && (
        <span className="transform transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1 group-hover:-translate-y-0.5">
          {icon}
        </span>
      )}
    </button>
  );
}

export default NavigationButton;
