import Image from "next/image";
import React from "react";

function PartnersFull({ data }) {
  console.log(data, "data full partners");

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {data.map((partner, index) => (
        <a
          key={index}
          href={partner.link !== "#" ? partner.link : undefined}
          target={partner.link !== "#" ? "_blank" : "_self"}
          rel={partner.link !== "#" ? "noopener noreferrer" : ""}
          className={`rounded-2xl bg-mainGray py-2 px-3 flex items-center justify-center transition-transform transform hover:scale-105 ${
            partner.link === "#" ? "cursor-default" : "cursor-pointer"
          }`}
        >
          <Image
            width={105}
            height={65}
            src={partner.image}
            alt={`Partner ${index + 1} Logo`}
            style={{
              width: "105px",
              height: "65px",
              objectFit: "contain",
            }}
            loading="lazy"
          />
        </a>
      ))}
    </div>
  );
}

export default PartnersFull;
