// pages/blog/[slug].js

import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import BlogsSingleTitle from "@/components/BlogSingleTitle";
import BlogCardSingle from "@/components/BlogCardSingle";
import Breadcrumb from "@/components/Breadcrumb";
import { getSingleBlog } from "@/services/getSingleBlog";
import { getSettings } from "@/services/getSettings"; // <-- Import getSettings
import UsefulLinksSingle from "@/components/UsefulLinksSIngle";
import { getSingleUsefulLinks } from "@/services/getSingleUsefulLinks";

function UsefulLinks({ data, settingsData }) {


  // Handle the case where the blog is not found
  if (!data) {
    return (
      <>
        <Header />
        <Container>
          <h1 className="text-2xl py-96 flex justify-center items-center ">
            Link not found
          </h1>
        </Container>
        <Footer data={settingsData} />
      </>
    );
  }
 

  const headerBgColor = "#ffff";
  const headerDarkBgColor = "#333435";

  return (
    <>
      <Head>
        <title>{data.meta_title}</title>
        <meta name="description" content={data.meta_description} />
        <meta name="keywords" content={data.meta_keywords} />
      </Head>
      <div className="pt-20 bg-mainGray dark:bg-bgDark">
        <Header bgColor={headerBgColor} darkBgColor={headerDarkBgColor} />
        <Container>
          <Breadcrumb />
        </Container>
        <Container>
          <BlogsSingleTitle blog={data} />
          <UsefulLinksSingle blog={data} />
        </Container>
        <Footer data={settingsData} />
      </div>
    </>
  );
}

export default UsefulLinks;

export async function getServerSideProps(context) {
  const { locale = "az" } = context;
  const { slug } = context.params;
  try {
    const response = await getSingleUsefulLinks(locale, slug);

    if (!response?.item) {
      return {
        notFound: true, // Triggers a 404 page if there's no item
      };
    }

    const data = response.item;

    const settingsData = await getSettings(locale);

    return {
      props: {
        data,
        settingsData,
      },
    };
  } catch (error) {
    console.error("Failed to fetch single blog data:", error);
    return {
      notFound: true,
    };
  }
}
