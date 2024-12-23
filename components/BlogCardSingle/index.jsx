import Image from "next/image";
import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

function BlogCardSingle({ blog }) {
  return (
    <div className="flex flex-col pb-custom-space ">
      <Image
        className="w-full h-full lg:[540px] md:w-[60%] mx-auto  object-cover rounded-2xl my-custom-space"
        src="/blogs/singleBlog.png"
        width={1000}
        height={516}
        alt={blog.title}
      />

      <div className="md:w-[60%] mx-auto ">
        <p className="pb-custom-space  border-b-4 border-b-gradient dark:text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum ullam
          totam consequuntur molestiae sed minus? Iusto eaque accusantium
          recusandae non porro ex perferendis magnam a, aperiam enim dignissimos
          tenetur saepe!
        </p>

        <h6 className="pt-custom-space pb-6 text-black dark:text-white font-medium leading-9 text-32">
          Introduction
        </h6>

        <p className="pb-custom-space text-black dark:text-white font-medium leading-7 text-lg">
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
          suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
          montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere
          vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
          varius id. Eget quis mi enim, leo lacinia pharetra, semper. Eget in
          volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames
          arcu quis fusce augue enim. Quis at habitant diam at. Suscipit
          tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum
          molestie aliquet sodales id est ac volutpat.{" "}
        </p>

        <Image
          src="/blogs/blog-single2.png"
          width={720}
          height={480}
          alt={blog.title}
          className="object-cover pb-custom-space"
        />

        <div className="border-l border-l-gradient pl-5 mb-custom-space">
          <h6 className="text-2xl text-black dark:text-white font-medium leading-8 pb-8">
            “In a world older and more complete than ours they move finished and
            complete, gifted with extensions of the senses we have lost or never
            attained, living by voices we shall never hear.”
          </h6>
          <p className="dark:text-white">— Olivia Rhye, Product Designer</p>
        </div>

        <p className="text-2xl text-black dark:text-white font-medium leading-8 py-custom-space border-b border-b-gradient">
          In a world older and more complete than ours they move finished and
          complete, gifted with extensions of the senses we have lost or never
          attained, living by voices we shall never hear.
        </p>

        <div className="flex flex-col py-custom-space">
          <div className="flex items-center gap-2">
            <hr className="w-[30px] h-[2px] rounded-xl text-black bg-black dark:bg-white dark:text-white"></hr>
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

export default BlogCardSingle;
