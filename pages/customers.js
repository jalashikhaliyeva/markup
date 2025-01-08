// pages/about/index.js
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import Customers from "@/components/Customers";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingAnimation from "@/components/LoadingAnimation";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
function CustomersPage({ settingsData, clientsData, titlesData, forumsData }) {
  const { t } = useTranslation();
  const router = useRouter();
  //   console.log(clientsData, "clientsData");
  if (!clientsData) {
    return <LoadingAnimation />;
  }
  const headerBgColor = "#ffff";
  const headerDarkBgColor = "#333435";

  const titlesMap = titlesData.item.reduce((acc, { name, title }) => {
    acc[name] = title;
    return acc;
  }, {});

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
          <div className="bg-white dark:bg-black rounded-2xl mb-28 py-custom-space">
            <h1 className="text-black dark:text-white font-medium leading-83 flex items-center justify-center text-4xl md:text-title">
              {t("nav.clients")}
            </h1>
            <p className="text-lg leading-6 flex items-center justify-center text-purple1 pb-custom-space">
              {titlesMap.Client}
            </p>

            <ParntnersFull data={clientsData.item} />

            <h1 className="text-black pt-custom-space dark:text-white font-medium leading-83 flex items-center justify-center text-4xl md:text-title">
              {t("nav.forums")}
            </h1>
            <p className="text-lg leading-6 flex items-center justify-center text-purple1 pb-custom-space">
              {titlesMap.Forum}
            </p>
            <FormsFull data={forumsData.item} />
          </div>
        </Container>
        <Footer data={settingsData} />
      </main>
    </div>
  );
}
export default CustomersPage;

import Head from "next/head";
import { getSettings } from "@/services/getSettings";
import { getClients } from "@/services/getClients";
import ParntnersFull from "@/components/PartnersFull";
import NavigationTitle from "@/components/NavigationTitle";
import { useTranslation } from "react-i18next";
import { getTitles } from "@/services/getTitles";
import ShortDescription from "@/components/ShortDescription";
import FormsFull from "@/components/FormsFull";
import { getForums } from "@/services/getForums";

export async function getServerSideProps(context) {
  const lang = context.locale;
  console.log(context, "context");

  try {
    const [clientsData, settingsData, titlesData, forumsData] =
      await Promise.all([
        getClients(lang),
        getSettings(lang),
        getTitles(lang),
        getForums(lang),
      ]);

    return {
      props: {
        settingsData,
        clientsData,
        titlesData,
        forumsData,
      },
    };
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      props: {
        settingsData: null,
        clientsData: null,
        titlesData: null,
        forumsData: null,
      },
    };
  }
}
