import AboutStatistics from "@/components/AboutStatistics";
import CervicesCard from "@/components/CervicesCard";
import Container from "@/components/Container";
import Faq from "@/components/Faq";
import Header from "@/components/Header";
import ProjectsCard from "@/components/ProjectsCard";
import SingleTitle from "@/components/SingleTitle";
import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="py-28">
      <main>
        <Header />
        <Container>
          <div className="p-9 bg-mainGray rounded-2xl">
            {/* <SingleTitle>Haqqımızda</SingleTitle> */}
            <h1 className="text-black font-medium leading-83 flex items-center justify-center text-title ">
              Haqqımızda
            </h1>
            <p className="text-lg leading-6 flex items-center justify-center text-purple1 pb-custom-space ">
              Learn more about the company and the team behind it.
            </p>

            <div className="flex  gap-8">
              <Image
                className="object-contain"
                src="/about/aboutImg.png"
                width={546}
                height={492}
              />
              <AboutStatistics />
            </div>

            <Faq />
          </div>
        </Container>
      </main>
    </div>
  );
}

export default About;
