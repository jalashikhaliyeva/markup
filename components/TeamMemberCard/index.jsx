import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

function TeamMemberCard({ name, position, image, description, linkedin }) {
  return (
    <div className="group relative flex flex-col gap-3 w-[280px] rounded-2xl">
      {/* Container with perspective and the flipping content */}
      <div className="relative perspective-1000 w-full h-[297px]">
        {/* Flipper container: will rotate on hover */}
        <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
          {/* Front face (default) */}
          <div className="absolute inset-0 backface-hidden">
            <Image
              src={image}
              width={292}
              height={397}
              alt={name}
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>

          {/* Back face (shown on hover flip) */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center rounded-2xl overflow-hidden">
            <Image
              src={image}
              width={292}
              height={397}
              alt={name}
              className="rounded-2xl w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center gap-2 text-center p-4">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-linkedinBlue transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              {/* Short description on flipped side */}
              <p className="text-white text-lg mt-2">{description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Static Name and Position (no hover effect here) */}
      <div className="flex flex-col gap-2">
        <h6 className="font-medium text-black text-4xl font-grotesk leading-10">
          {name}
        </h6>
        <p className="font-normal text-lg leading-6 text-transparent bg-clip-text bg-gradient-to-r from-[#655C71] via-[#655C71] to-[#A25FF8]">
          {position}
        </p>
      </div>
    </div>
  );
}

export default TeamMemberCard;
