import React from "react";

function CategoryFilter({ label, isSelected, onClick }) {
  return (
    <div
      className={`flex text-lg leading-5 font-normal items-center justify-center py-3 px-4 rounded-3xl cursor-pointer transition-colors duration-300 ${
        isSelected
          ? "bg-lightPurpleCard"
          : " dark:bg-bgDark dark:text-white dark:border-white border border-black hover:bg-slate-100 dark:hover:bg-bgHoverCategory"
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  );
}

export default CategoryFilter;
