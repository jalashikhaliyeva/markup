import React from "react";
import { useRouter } from "next/router";

import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import Header from "@/components/Header";
import ServiceTitle from "@/components/ServiceTitle";
import ServiceAbout from "@/components/ServiceAbout";
import ServicesOffer from "@/components/ServicesOffer";
import Footer from "@/components/Footer"; // <-- Make sure you have a Footer component
import { getSingleService } from "@/services/getSingleService";
import { getSettings } from "@/services/getSettings"; // <-- import here
import Head from "next/head";

function SingleServicePage({ serviceData, settingsData }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const headerBgColor = "#ffff";
  const headerDarkBgColor = "#333435";

  return (
    <div className="pt-20 bg-mainGray dark:bg-bgDark">
      <Head>
        <title>{serviceData.meta_title}</title>
        <meta name="description" content={serviceData.meta_description} />
        <meta name="keywords" content={serviceData.meta_keywords} />
      </Head>

      <Container>
        <Header bgColor={headerBgColor} darkBgColor={headerDarkBgColor} />

        <Breadcrumb />

        <main className="bg-white dark:bg-black p-10 rounded-2xl mt-custom-space">
          <ServiceTitle title={serviceData.title} />
          <ServiceAbout
            description={serviceData.desc}
            image={serviceData.image}
          />

          <ServicesOffer />
        </main>
      </Container>

      {/* Footer with settings data */}
      <div className="mt-10">
        <Footer data={settingsData} />
      </div>
    </div>
  );
}

export default SingleServicePage;

export async function getServerSideProps(context) {
  const { locale = "az" } = context; // fallback to 'az' if no locale is found
  const { slug } = context.params; // the dynamic route [slug].js

  try {
    // Fetch the data for this particular service
    const data = await getSingleService(locale, slug);

    if (!data?.item) {
      return {
        notFound: true,
      };
    }

    // Fetch settings data
    const settingsData = await getSettings(locale);

    // Destructure `item` from the API response
    const serviceData = data.item;

    return {
      props: {
        serviceData,
        settingsData,
      },
    };
  } catch (error) {
    console.error("Failed to fetch single service data:", error);
    return {
      notFound: true,
    };
  }
}
