import Breadcrumb from "@/components/Breadcrumb";
import CervicesCard from "@/components/CervicesCard";
import Container from "@/components/Container";
import Header from "@/components/Header";
import LoadingAnimation from "@/components/LoadingAnimation";
import SingleTitle from "@/components/SingleTitle";
import { getAllServices } from "@/services/getAllServices";
import { useRouter } from "next/router";
import React from "react";

function Services({ servicesData }) {
  const router = useRouter();
  const { locale } = router;

  if (!servicesData) {
    return <LoadingAnimation />;
  }

  // console.log(servicesData, "servicesData");

  const headerBgColor = "#ffff";
  const headerDarkBgColor = "#333435";
  return (
    <div className="pt-20 bg-mainGray dark:bg-bgDark">
      <main>
        <Header bgColor={headerBgColor} darkBgColor={headerDarkBgColor} />
        <Container>
          <Breadcrumb />
        </Container>
        <SingleTitle>Xidmətlərimiz</SingleTitle>
        <Container>
          <CervicesCard item={servicesData} />
        </Container>
      </main>
    </div>
  );
}

export default Services;

export async function getServerSideProps(context) {
  const lang = context.locale || "az"; // Default to "az" if locale is not set

  try {
    const [servicesData] = await Promise.all([getAllServices(lang)]);

    return {
      props: {
        servicesData, // Data for the Hero component
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
