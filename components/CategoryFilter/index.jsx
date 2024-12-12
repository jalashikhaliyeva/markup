import React from "react";

function CategoryFilter({ label, isSelected, onClick }) {
  return (
    <div
      className={`flex text-lg leading-5 font-normal items-center justify-center py-3 px-4 rounded-3xl cursor-pointer ${
        isSelected ? "bg-lightPurpleCard" : "bg-white border border-black"
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  );
}

export default CategoryFilter;
