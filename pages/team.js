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

function TeamPage({ teamData, settingsData }) {
  // Added clientsData
  console.log(teamData, "teamData");

  const router = useRouter();
  //   const { locale } = router;
  //   const { meta_tag } = aboutData;
  if (!teamData) {
    return <LoadingAnimation />;
  }

  const headerBgColor = "#ffff";
  const headerDarkBgColor = "#333435";
  return (
    <div className="pt-16 bg-mainGray dark:bg-bgDark">
      <Head>
        {/* <title>{meta_tag.meta_title}</title>
        <meta name="description" content={meta_tag.meta_description} />
        <meta name="keywords" content={meta_tag.meta_keywords} /> */}
      </Head>
      <main>
        <Header bgColor={headerBgColor} darkBgColor={headerDarkBgColor} />
        <Container>
          <Breadcrumb />
        </Container>
        <Container>
          <div className="bg-white dark:bg-black rounded-2xl mb-28">
            <div className="p-2 lg:p-9">
              <Team data={teamData.item} />
            </div>
          </div>
        </Container>
        <Footer data={settingsData} />
      </main>
    </div>
  );
}

export default TeamPage;

import Head from "next/head";
import { getTeam } from "@/services/getTeam";
import { getSettings } from "@/services/getSettings";

export async function getServerSideProps(context) {
  const lang = context.locale; // Default to "az" if locale is not set
  console.log(context, "context");

  try {
    const [teamData, settingsData] = await Promise.all([
      getTeam(lang),
      getSettings(lang),
    ]);

    return {
      props: {
        teamData, // Data for the Team section
        settingsData,
      },
    };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      props: {
        teamData: null,
        settingsData: null,
      },
    };
  }
}
