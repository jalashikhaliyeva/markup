// pages/about/index.js

import AboutStatistics from "@/components/AboutStatistics";
import Breadcrumb from "@/components/Breadcrumb";
import CervicesCard from "@/components/CervicesCard";
import Container from "@/components/Container";
import Customers from "@/components/Customers";
import CustomersSectionAbout from "@/components/CustomersSectionAbout";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingAnimation from "@/components/LoadingAnimation";
import NavigationTitle from "@/components/NavigationTitle";
import ProjectsCard from "@/components/ProjectsCard";
import SingleTitle from "@/components/SingleTitle";
import Team from "@/components/Team";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function About({ aboutData, faqData, teamData, clientsData, settingsData }) {
  // Added clientsData
  const router = useRouter();
  const { locale } = router;

  if (!aboutData || !faqData || !teamData || !clientsData || !settingsData) {
    // Updated condition
    return <LoadingAnimation />;
  }

  const headerBgColor = "#ffff";
  const headerDarkBgColor = "#333435";
  return (
    <div className="pt-16 dark:bg-bgDark">
      <main>
        <Header bgColor={headerBgColor} darkBgColor={headerDarkBgColor} />
        <Container>
          <Breadcrumb />
        </Container>
        {/* Main About Section */}
        <Container>
          <div className="bg-mainGray dark:bg-black rounded-2xl mb-28">
            <div className="p-2 lg:p-9">
              <h1 className="text-black dark:text-white font-medium leading-83 flex items-center justify-center text-4xl md:text-title">
                Haqqımızda
              </h1>
              <p className="text-lg leading-6 flex items-center justify-center text-purple1 pb-custom-space">
                {aboutData.item.title}
              </p>
              <div className="flex flex-col lg:flex-row gap-8">
                <Image
                  className="object-contain"
                  src="/about/aboutImg.png"
                  width={546}
                  height={492}
                  alt="About Image"
                />
                <AboutStatistics
                  desc={aboutData.item.description}
                  count={aboutData.counter}
                />
              </div>
              {/* Pass faqData to Faq component */}
              <Faq data={faqData.item} />
              <Team data={teamData.item} />
            </div>

            {/* Pass clientsData to CustomersSectionAbout */}
            <CustomersSectionAbout slides={clientsData.item} />
          </div>
        </Container>

        <Footer data={settingsData} />
      </main>
    </div>
  );
}

export default About;

// Server-side data fetching
import { getAbout } from "@/services/getAbout";
import { getFaq } from "@/services/getFaq";
import { getTeam } from "@/services/getTeam";
import { getClients } from "@/services/getClients"; // Ensure the path is correct
import CustomersTitleIndex from "@/components/CustomersTitleIndex";
import { getSettings } from "@/services/getSettings";

export async function getServerSideProps(context) {
  const lang = context.locale; // Default to "az" if locale is not set

  try {
    const [aboutData, faqData, teamData, clientsData, settingsData] =
      await Promise.all([
        getAbout(lang),
        getFaq(lang),
        getTeam(lang),
        getClients(lang), // Fetch clients data
        getSettings(lang),
      ]);

    return {
      props: {
        aboutData, // Data for the About section
        faqData, // Data for the FAQ section
        teamData, // Data for the Team section
        clientsData, // Data for the Clients/Partners section
        settingsData,
      },
    };
  } catch (error) {
    
    console.error("Failed to fetch data:", error);
    return {
      props: {
        aboutData: null,
        faqData: null,
        teamData: null,
        clientsData: null, // Handle clients data failure
        settingsData: null,
      },
    };
  }
}
