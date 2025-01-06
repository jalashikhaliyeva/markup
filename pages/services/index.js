import Breadcrumb from "@/components/Breadcrumb";
import CervicesCard from "@/components/CervicesCard";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingAnimation from "@/components/LoadingAnimation";
import SingleTitle from "@/components/SingleTitle";
import { getAllServices } from "@/services/getAllServices";
import { getSettings } from "@/services/getSettings";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

function Services({ servicesData, settingsData }) {
  const router = useRouter();
  const { locale } = router;
  console.log(servicesData, "servicesData");

  if (!servicesData) {
    return <LoadingAnimation />;
  }
  // console.log(servicesData, "servicesData");

  const headerBgColor = "#ffff";
  const headerDarkBgColor = "#333435";
  return (
    <div className="pt-20 bg-mainGray dark:bg-bgDark">
      <Head>
        <title>{servicesData.meta_tag.meta_title}</title>
        <meta
          name="description"
          content={servicesData.meta_tag.meta_description}
        />
        <meta name="keywords" content={servicesData.meta_tag.meta_keywords} />
      </Head>

      <main>
        <Header bgColor={headerBgColor} darkBgColor={headerDarkBgColor} />
        <Container>
          <Breadcrumb />
        </Container>
        <SingleTitle>Xidmətlərimiz</SingleTitle>
        <Container>
          <CervicesCard item={servicesData.item} />
        </Container>
        <Footer data={settingsData} />
      </main>
    </div>
  );
}

export default Services;

export async function getServerSideProps(context) {
  const lang = context.locale || "az"; // Default to "az" if locale is not set

  try {
    const [servicesData, settingsData] = await Promise.all([
      getAllServices(lang),
      getSettings(lang),
    ]);

    return {
      props: {
        servicesData, // Data for the Hero component
        settingsData,
      },
    };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      props: {
        servicesData: null,
      },
    };
  }
}
