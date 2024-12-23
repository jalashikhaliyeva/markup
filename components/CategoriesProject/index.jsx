import React from "react";

function CategoriesProject({ category }) {
  return (
    <div
      className={`flex text-lg w-[33%]  lg:w-[12%] leading-5 font-normal items-center justify-center py-3 px-4 rounded-3xl cursor-pointer transition-colors duration-300  bg-lightPurpleCard dark:bg-lightPurpleCard dark:text-black dark:border-white   `}
      // onClick={onClick}
    >
      {category}
    </div>
  );
}

export default CategoriesProject;
