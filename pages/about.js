import AboutStatistics from "@/components/AboutStatistics";
import CervicesCard from "@/components/CervicesCard";
import Container from "@/components/Container";
import Customers from "@/components/Customers";
import CustomersSectionAbout from "@/components/CustomersSectionAbout";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavigationTitle from "@/components/NavigationTitle";
import ProjectsCard from "@/components/ProjectsCard";
import SingleTitle from "@/components/SingleTitle";
import Team from "@/components/Team";
import Image from "next/image";
import React from "react";

function About() {
  const headerBgColor = "#ffff"; 
  const headerDarkBgColor = "#333435"; 
  return (
    <div className="pt-28 dark:bg-bgDark">
      <main>
        <Header bgColor={headerBgColor}  darkBgColor={headerDarkBgColor} />

        {/* Main About Section */}
        <Container>
          <div className="bg-mainGray dark:bg-black  rounded-2xl mb-28">
            {/* <SingleTitle>Haqqımızda</SingleTitle> */}

            <div className="p-2 lg:p-9">
              <h1 className=" text-black dark:text-white font-medium leading-83 flex items-center justify-center text-4xl md:text-title ">
                Haqqımızda
              </h1>
              <p className=" text-lg leading-6 flex items-center justify-center text-purple1 pb-custom-space ">
                Learn more about the company and the team behind it.
              </p>
              <div className="flex flex-col lg:flex-row gap-8">
                <Image
                  className="object-contain"
                  src="/about/aboutImg.png"
                  width={546}
                  height={492}
                  alt="About Image"
                />
                <AboutStatistics />
              </div>
              <Faq />
              <Team />
            </div>

            <CustomersSectionAbout />
          </div>
        </Container>

        <Footer />
      </main>
    </div>
  );
}

export default About;
