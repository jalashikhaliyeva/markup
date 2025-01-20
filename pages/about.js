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
  // console.log(aboutData, "aboutData");
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  const { meta_tag } = aboutData;
  if (!aboutData || !faqData || !teamData || !clientsData || !settingsData) {
    return <LoadingAnimation />;
  }

  const headerBgColor = "#ffff";
  const headerDarkBgColor = "#333435";
  return (
    <div className="pt-16 bg-mainGray dark:bg-bgDark">
      <Head>
        <title>{meta_tag.meta_title}</title>
        <meta name="description" content={meta_tag.meta_description} />
        <meta name="keywords" content={meta_tag.meta_keywords} />
      </Head>
      <main>
        <Header bgColor={headerBgColor} darkBgColor={headerDarkBgColor} />
        <Container>
          <Breadcrumb />
        </Container>
        {/* Main About Section */}
        <Container>
          <div className="bg-white dark:bg-black rounded-2xl mb-28">
            <div className="p-2 lg:p-9">
              <h1 className="text-black dark:text-white font-medium leading-83 flex items-center justify-center text-4xl md:text-title">
             
                {t("nav.about")}
              </h1>
              <p className="text-lg leading-6 flex items-center justify-center text-purple1 pb-custom-space">
                {aboutData.item.title}
              </p>
              <div className="flex flex-col lg:flex-row gap-8">
                <Image
                  className="object-contain"
                  src={aboutData.item.image}
                  width={546}
                  height={492}
                  alt="About Image"
                />
                <AboutStatistics
                  desc={aboutData.item.description}
                  count={aboutData.counter}
                />
              </div>
              <MissionVision data={aboutData.advantages} />

              <Faq data={faqData.item} />
              {/* <Team data={teamData.item} /> */}
            </div>

            {/* <CustomersSectionAbout slides={clientsData.item} /> */}
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
import Head from "next/head";
import MissionVision from "@/components/MissionVision";
import { useTranslation } from "react-i18next";

export async function getServerSideProps(context) {
  const lang = context.locale; // Default to "az" if locale is not set
  console.log(context, "context");

  try {
    const [aboutData, faqData, teamData, clientsData, settingsData] =
      await Promise.all([
        getAbout(lang),
        getFaq(lang),
        getTeam(lang),
        getClients(lang),
        getSettings(lang),
      ]);

    return {
      props: {
        aboutData,
        faqData,
        teamData,
        clientsData,
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
        clientsData: null,
        settingsData: null,
      },
    };
  }
}
