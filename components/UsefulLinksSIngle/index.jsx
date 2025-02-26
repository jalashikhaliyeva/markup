import Image from "next/image";
import React from "react";
import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";
import parse, { domToReact } from "html-react-parser";

function UsefulLinksSingle({ blog }) {


  const transformNode = (node, index) => {
    if (node.type === "text" && !/^\s*$/.test(node.data)) {
      return (
        <p
          key={index}
          className="pb-custom-space text-black dark:text-white font-medium leading-7 text-lg"
        >
          {node.data}
        </p>
      );
    }

    if (node.type === "tag") {
      return (
        <React.Fragment key={index}>
          {domToReact(node.children, { replace: transformNode })}
        </React.Fragment>
      );
    }
  };

  const parsedContent = parse(blog.desc, { replace: transformNode });

  return (
    <div className="flex flex-col pb-custom-space">
      <div className="md:w-[60%] mx-auto">
        <Image
          src={blog.image}
          alt={blog.title}
          width={790}
          height={480}
          className="rounded-2xl w-full h-auto"
        />
        <div className="pb-custom-space border-b-4 border-b-gradient dark:text-white">
          {parsedContent}
        </div>

        <div className="flex flex-col py-custom-space">
          <div className="flex items-center gap-2">
            <hr className="w-[30px] h-[2px] rounded-xl text-black bg-black dark:bg-white dark:text-white" />
            <p className="text-black dark:text-white font-medium leading-6 text-base">
              Share
            </p>
          </div>

          <div className="flex space-x-4 items-center pt-4">
            <FiInstagram className="size-6 hover:text-hoverPurple hover:scale-110 transform transition-transform duration-300 cursor-pointer dark:text-white" />
            <FiFacebook className="size-6 hover:text-hoverPurple hover:scale-110 transform transition-transform duration-300 cursor-pointer dark:text-white" />
            <FiLinkedin className="size-6 hover:text-hoverPurple hover:scale-110 transform transition-transform duration-300 cursor-pointer dark:text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsefulLinksSingle;
