import React from "react";
import SingleTitle from "../SingleTitle";

function BlogsSingleTitle({ blog }) {
  return (
    <div>
      <h1 className="text-black dark:text-white font-medium leading-83 flex items-center justify-center text-4xl md:text-title md:pt-custom-space pb-1">
        {blog.title}
      </h1>
      <div className="flex items-center justify-center">
        <p className="text-pink-500 text-xl justify-center items-center  leading-7 font-medium bg-custom-gradient bg-clip-text text-transparent">
          {blog.date}
        </p>
      </div>
    </div>
  );
}

export default BlogsSingleTitle;
