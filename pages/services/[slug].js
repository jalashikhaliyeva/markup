import React from "react";
import { useRouter } from "next/router";

import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";
import Header from "@/components/Header";
import ServiceTitle from "@/components/ServiceTitle";
import ServiceAbout from "@/components/ServiceAbout";
import ServicesOffer from "@/components/ServicesOffer";
import { getSingleService } from "@/services/getSingleService";

function SingleServicePage({ serviceData }) {
  // If you want, you could handle a loading state:
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const headerBgColor = "#ffff";
  const headerDarkBgColor = "#333435";

  return (
    <div className="pt-20 bg-mainGray dark:bg-bgDark">
      <Container>
        <Header bgColor={headerBgColor} darkBgColor={headerDarkBgColor} />

        <Breadcrumb />

        <main className="bg-white dark:bg-black p-10 rounded-2xl mt-custom-space">
          {/* The API’s `item` includes title, desc, etc. Adjust naming as needed */}
          <ServiceTitle title={serviceData.title} />
          <ServiceAbout description={serviceData.desc} image={serviceData.image} />
          <ServicesOffer />
        </main>
      </Container>
    </div>
  );
}

export default SingleServicePage;

/**
 * For server-side rendering, we fetch the data each time the user visits /services/[slug].
 * `context.locale` is captured so that we can pass the Accept-Language header to the API.
 *
 * @param {object} context - Next.js context object
 * @returns {object} props
 */
export async function getServerSideProps(context) {
  const { locale = "az" } = context; // fallback to 'az' if no locale is found
  const { slug } = context.params; // the dynamic route [slug].js

  try {
    // Fetch the data for this particular service
    const data = await getSingleService(locale, slug);

    if (!data?.item) {
      return {
        notFound: true, // triggers a 404 if there's no item
      };
    }

    // Destructure `item` from the API response
    const serviceData = data.item;

    return {
      props: {
        serviceData,
      },
    };
  } catch (error) {
    console.error("Failed to fetch single service data:", error);
    return {
      notFound: true,
    };
  }
}
